'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWindowStore } from '@/store/windowStore';
import { DesktopIcon } from './DesktopIcon';
import { desktopIcons, wallpapers } from '@/data';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

export function Desktop() {
  const { settings } = useWindowStore();
  const wallpaper = wallpapers.find((w) => w.id === settings.wallpaper) || wallpapers[0];

  useEffect(() => {
    let seq: string[] = [];
    const handler = (e: KeyboardEvent) => {
      seq = [...seq, e.key].slice(-KONAMI.length);
      if (seq.join(',') === KONAMI.join(',')) {
        alert('🎮 Konami Code activated!\n\nYou clearly have excellent taste. Now hire Astronicle! 🚀');
        seq = [];
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Each icon is roughly: emoji(34px) + gap(5) + label(~24px) + padding(12) + gap(2) ≈ 77px
  // 12 icons × 77px = 924px — too tall for most screens.
  // Solution: 2-column grid so icons wrap horizontally instead.

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        bottom: 48,
        background: wallpaper.gradient,
        overflow: 'hidden',
      }}
    >
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)', pointerEvents: 'none' }} />

      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.03,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Icons — 2 columns so they all fit vertically */}
      <div style={{
        position: 'absolute',
        top: 12,
        left: 8,
        bottom: 8,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 72px)',
        gridAutoRows: 'max-content',
        gap: 2,
        alignContent: 'start',
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollbarWidth: 'none',
        paddingBottom: 4,
      }}>
        {desktopIcons.map((icon, i) => (
          <motion.div
            key={icon.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 + i * 0.035 }}
          >
            <DesktopIcon icon={icon} size={settings.iconSize} />
          </motion.div>
        ))}
      </div>

      {/* Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{
          position: 'absolute', bottom: 12, right: 16,
          pointerEvents: 'none', textAlign: 'right',
        }}
      >
        <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: 11, margin: 0 }}>
          Double-click icons to open
        </p>
      </motion.div>
    </motion.div>
  );
}
