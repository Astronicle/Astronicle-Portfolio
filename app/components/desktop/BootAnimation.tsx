'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '@/store/windowStore';

export function BootAnimation() {
  const [phase, setPhase] = useState<'logo' | 'loading' | 'done'>('logo');
  const [progress, setProgress] = useState(0);
  const setBooting = useWindowStore((s) => s.setBooting);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('loading'), 1000);

    const t2 = setTimeout(() => {
      const iv = setInterval(() => {
        setProgress(p => {
          if (p >= 100) { clearInterval(iv); return 100; }
          return Math.min(100, p + Math.random() * 15 + 3);
        });
      }, 80);
    }, 1200);

    const t3 = setTimeout(() => {
      setPhase('done');
      setTimeout(() => setBooting(false), 500);
    }, 3200);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [setBooting]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: '#000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {/* Subtle grid */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.04,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, position: 'relative' }}
          >
            {/* Logo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{
                width: 80, height: 80, borderRadius: 20,
                background: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 36,
                boxShadow: '0 0 40px rgba(99,102,241,0.3)',
              }}
            >
              🚀
            </motion.div>

            <div style={{ textAlign: 'center' }}>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ fontSize: 28, fontWeight: 700, letterSpacing: '0.2em', color: '#fff', margin: 0 }}
              >
                ASTRONICLE
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ color: '#818cf8', fontSize: 12, letterSpacing: '0.15em', marginTop: 6 }}
              >
                PORTFOLIO OS v2.0.26
              </motion.p>
            </div>

            {phase === 'loading' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ width: 260, display: 'flex', flexDirection: 'column', gap: 8 }}
              >
                <div style={{ height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' }}>
                  <motion.div
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                      borderRadius: 4,
                      width: `${Math.min(progress, 100)}%`,
                    }}
                  />
                </div>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, textAlign: 'center' }}>
                  {progress < 30 ? 'Initializing workspace...' :
                   progress < 60 ? 'Loading portfolio data...' :
                   progress < 85 ? 'Preparing desktop environment...' : 'Almost ready...'}
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
