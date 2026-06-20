'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '@/store/windowStore';

export function BootAnimation() {
  const [phase, setPhase] = useState<'logo' | 'loading' | 'done'>('logo');
  const [progress, setProgress] = useState(0);
  const setBooting = useWindowStore((s) => s.setBooting);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('loading'), 1200);
    const t2 = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            return 100;
          }
          return p + Math.random() * 12;
        });
      }, 80);
      return () => clearInterval(interval);
    }, 1400);

    const t3 = setTimeout(() => {
      setPhase('done');
      setTimeout(() => setBooting(false), 600);
    }, 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [setBooting]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6"
          >
            {/* Logo */}
            <motion.div
              className="relative"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-20 h-20 rounded-2xl border border-indigo-500/40 bg-indigo-950/60 flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(99,102,241,0.4)]">
                🚀
              </div>
              <div className="absolute inset-0 rounded-2xl border border-indigo-500/20 animate-ping" />
            </motion.div>

            <div className="text-center">
              <motion.h1
                className="text-3xl font-bold text-white tracking-[0.2em]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                ASTRONICLE
              </motion.h1>
              <motion.p
                className="text-indigo-400 text-sm tracking-widest mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                PORTFOLIO OS v2.0.26
              </motion.p>
            </div>

            <AnimatePresence>
              {phase === 'loading' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-64 flex flex-col gap-2"
                >
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                      transition={{ ease: 'easeOut' }}
                    />
                  </div>
                  <p className="text-white/30 text-xs text-center">
                    {progress < 30 ? 'Initializing workspace...' :
                     progress < 60 ? 'Loading portfolio data...' :
                     progress < 85 ? 'Preparing desktop environment...' :
                     'Almost ready...'}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
