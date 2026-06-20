'use client';
import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useWindowStore } from '@/store/windowStore';
import { DesktopIcon } from './DesktopIcon';
import { desktopIcons } from '@/data';
import { wallpapers } from '@/data';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

export function Desktop() {
  const { settings } = useWindowStore();
  const wallpaper = wallpapers.find((w) => w.id === settings.wallpaper) || wallpapers[0];

  // Konami code easter egg
  useEffect(() => {
    let seq: string[] = [];
    const handler = (e: KeyboardEvent) => {
      seq = [...seq, e.key].slice(-KONAMI.length);
      if (seq.join(',') === KONAMI.join(',')) {
        alert('🎮 Konami Code activated!\n\n⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️\n\nYou clearly have good taste. Now hire Astronicle! 🚀');
        seq = [];
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden"
      style={{ background: wallpaper.gradient, paddingBottom: 48 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Ambient overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Desktop icons grid */}
      <div className="absolute top-4 left-4 grid grid-cols-1 gap-1">
        {desktopIcons.map((icon, i) => (
          <motion.div
            key={icon.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.04 }}
          >
            <DesktopIcon icon={icon} size={settings.iconSize} />
          </motion.div>
        ))}
      </div>

      {/* Welcome hint */}
      <motion.div
        className="absolute bottom-16 right-4 text-right pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-white/20 text-xs">Double-click icons to open</p>
        <p className="text-white/10 text-xs mt-0.5">Right-click for context menu</p>
      </motion.div>
    </motion.div>
  );
}
