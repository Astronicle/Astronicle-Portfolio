'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '@/store/windowStore';

export function ShutdownScreen() {
  const { isShutdown, setShutdown } = useWindowStore();

  return (
    <AnimatePresence>
      {isShutdown && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9998] bg-black flex flex-col items-center justify-center cursor-pointer"
          onClick={() => setShutdown(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">🌌</div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Thank you for visiting Astronicle&apos;s Portfolio
            </h1>
            <p className="text-white/40 text-sm mb-8">
              Astronicle OS — Powered by curiosity and caffeine ☕
            </p>
            <div className="inline-flex items-center gap-2 text-white/30 text-sm border border-white/10 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" />
              Click anywhere to restart
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
