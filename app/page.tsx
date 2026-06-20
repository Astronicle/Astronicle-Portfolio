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
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (!mounted) return null;

  if (isMobile) {
    return <MobileLayout />;
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
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
