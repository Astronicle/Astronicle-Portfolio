'use client';
import { useRef, useCallback, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '@/store/windowStore';
import type { WindowState } from '@/types';

interface WindowProps {
  window: WindowState;
  children: React.ReactNode;
}

export function Window({ window: win, children }: WindowProps) {
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, updatePosition } = useWindowStore();
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, winX: 0, winY: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return;
    focusWindow(win.id);
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY, winX: win.position.x, winY: win.position.y });
    e.preventDefault();
  }, [focusWindow, win.id, win.position]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      const newX = Math.max(0, dragStart.winX + dx);
      const newY = Math.max(0, dragStart.winY + dy);
      updatePosition(win.id, { x: newX, y: newY });
    };

    const handleMouseUp = () => setIsDragging(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, win.id, updatePosition]);

  const style = win.isMaximized
    ? { left: 0, top: 0, width: '100vw', height: 'calc(100vh - 48px)' }
    : { left: win.position.x, top: win.position.y, width: win.size.width, height: win.size.height };

  return (
    <AnimatePresence>
      {!win.isMinimized && (
        <motion.div
          ref={windowRef}
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="fixed overflow-hidden rounded-xl select-none"
          style={{
            ...style,
            zIndex: win.zIndex,
            boxShadow: win.isFocused
              ? '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.1)'
              : '0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
          }}
          onClick={() => focusWindow(win.id)}
        >
          {/* Glass background */}
          <div className="absolute inset-0 bg-[#141414]/95 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

          {/* Title bar */}
          <div
            className="relative flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] cursor-grab active:cursor-grabbing"
            onMouseDown={!win.isMaximized ? handleMouseDown : undefined}
            onDoubleClick={() => maximizeWindow(win.id)}
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <button
                className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff3b30] transition-colors group relative flex items-center justify-center"
                onClick={(e) => { e.stopPropagation(); closeWindow(win.id); }}
              >
                <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold leading-none">✕</span>
              </button>
              <button
                className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ff9500] transition-colors group relative flex items-center justify-center"
                onClick={(e) => { e.stopPropagation(); minimizeWindow(win.id); }}
              >
                <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold leading-none">─</span>
              </button>
              <button
                className="w-3 h-3 rounded-full bg-[#28ca41] hover:bg-[#1cac34] transition-colors group relative flex items-center justify-center"
                onClick={(e) => { e.stopPropagation(); maximizeWindow(win.id); }}
              >
                <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold leading-none">⤢</span>
              </button>
            </div>

            {/* Title */}
            <div className="flex items-center gap-2 flex-1 min-w-0 justify-center absolute left-0 right-0 pointer-events-none">
              <span className="text-sm">{win.icon}</span>
              <span className="text-white/70 text-sm font-medium truncate">{win.title}</span>
            </div>
          </div>

          {/* Content */}
          <div className="relative overflow-auto" style={{ height: 'calc(100% - 45px)' }}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
