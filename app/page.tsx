'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useWindowStore } from '@/store/windowStore';
import { BootAnimation } from './components/desktop/BootAnimation';
import { Desktop } from './components/desktop/Desktop';
import { Taskbar } from './components/taskbar/Taskbar';
import { WindowRenderer } from './components/windows/WindowRenderer';
import { ShutdownScreen } from './components/desktop/ShutdownScreen';
import { MobileLayout } from './components/mobile/MobileLayout';

export default function Page() {
  const isBooting = useWindowStore((s) => s.isBooting);
  const openWindow = useWindowStore((s) => s.openWindow);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Auto-open terminal once boot finishes
  useEffect(() => {
    if (!isBooting && !isMobile && mounted) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const w = 760;
      const h = 500;
      openWindow({
        id: 'terminal',
        title: 'Terminal',
        icon: '💻',
        isMinimized: false,
        isMaximized: false,
        position: { x: Math.floor((vw - w) / 2), y: Math.floor((vh - h) / 2) - 20 },
        size: { width: w, height: h },
        component: 'Terminal',
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBooting]);

  if (!mounted) return null;
  if (isMobile) return <MobileLayout />;

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
      <AnimatePresence>{isBooting && <BootAnimation />}</AnimatePresence>
      {!isBooting && (
        <>
          <Desktop />
          <WindowRenderer />
          <Taskbar />
          <ShutdownScreen />
        </>
      )}
    </div>
  );
}
