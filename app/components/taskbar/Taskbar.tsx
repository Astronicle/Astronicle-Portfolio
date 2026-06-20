'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '@/store/windowStore';
import { useOpenWindow } from '@/hooks/useOpenWindow';

export function Taskbar() {
  const { windows, restoreWindow, focusWindow, minimizeWindow, setShutdown } = useWindowStore();
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [showStart, setShowStart] = useState(false);
  const [clockClicks, setClockClicks] = useState(0);
  const openWindow = useOpenWindow();

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setDate(now.toLocaleDateString([], { month: 'short', day: 'numeric' }));
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  const handleClockClick = () => {
    const newCount = clockClicks + 1;
    setClockClicks(newCount);
    if (newCount >= 10) {
      setClockClicks(0);
      alert('🎉 Easter Egg! You found the clock secret! Time is just a construct anyway... ⏰✨');
    }
  };

  const startMenuItems = [
    { icon: '👨‍💻', label: 'About Me', action: () => { openWindow('about', 'About Me', '👨‍💻', 'AboutWindow'); setShowStart(false); } },
    { icon: '📁', label: 'Projects', action: () => { openWindow('projects', 'Projects', '📁', 'ProjectsExplorer'); setShowStart(false); } },
    { icon: '💻', label: 'Skills', action: () => { openWindow('skills', 'Skills', '📁', 'SkillsExplorer'); setShowStart(false); } },
    { icon: '📋', label: 'Experience', action: () => { openWindow('experience', 'Experience', '📁', 'ExperienceExplorer'); setShowStart(false); } },
    { icon: '🏆', label: 'Certifications', action: () => { openWindow('certifications', 'Certifications', '📁', 'CertificationsExplorer'); setShowStart(false); } },
    { icon: '📄', label: 'Resume', action: () => { openWindow('resume', 'Resume.pdf', '📄', 'ResumeViewer'); setShowStart(false); } },
    { icon: '🖥️', label: 'Terminal', action: () => { openWindow('terminal', 'Terminal', '💻', 'Terminal'); setShowStart(false); } },
    { icon: '⚙️', label: 'Settings', action: () => { openWindow('settings', 'Settings', '⚙️', 'SettingsWindow'); setShowStart(false); } },
    { icon: '📬', label: 'Contact', action: () => { openWindow('contact', 'Contact', '📁', 'ContactExplorer'); setShowStart(false); } },
    { icon: '🔴', label: 'Shut Down', action: () => { setShutdown(true); setShowStart(false); } },
  ];

  const openWindows = windows.filter((w) => !w.isMinimized || true);

  return (
    <>
      {/* Start menu */}
      <AnimatePresence>
        {showStart && (
          <>
            <motion.div
              className="fixed inset-0 z-[998]"
              onClick={() => setShowStart(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="fixed bottom-14 left-3 z-[999] w-72 rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(18,18,18,0.95)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.8)',
              }}
            >
              {/* Header */}
              <div className="px-5 py-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl">
                    🚀
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Astronicle</p>
                    <p className="text-white/40 text-xs">Portfolio OS</p>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="p-2">
                {startMenuItems.slice(0, -1).map((item) => (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.06] transition-colors text-left"
                  >
                    <span className="text-lg w-6 text-center">{item.icon}</span>
                    <span className="text-sm text-white/80 font-medium">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Shutdown */}
              <div className="p-2 border-t border-white/[0.06]">
                <button
                  onClick={startMenuItems[startMenuItems.length - 1].action}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-500/10 transition-colors text-left"
                >
                  <span className="text-lg w-6 text-center">🔴</span>
                  <span className="text-sm text-red-400/80 font-medium">Shut Down</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Taskbar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[997] h-12 flex items-center px-2 gap-1"
        style={{
          background: 'rgba(10,10,10,0.92)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Start button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowStart(!showStart)}
          className={`w-9 h-9 rounded-lg flex items-center justify-center text-xl transition-all ${
            showStart ? 'bg-white/15' : 'hover:bg-white/10'
          }`}
        >
          🚀
        </motion.button>

        {/* Divider */}
        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Pinned apps */}
        {['📁', '💻', '⚙️'].map((icon, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-xl hover:bg-white/10 transition-colors"
          >
            {icon}
          </motion.button>
        ))}

        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Open windows */}
        <div className="flex items-center gap-1 flex-1 overflow-x-auto">
          {openWindows.map((win) => (
            <motion.button
              key={win.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => {
                if (win.isMinimized) {
                  restoreWindow(win.id);
                } else if (win.isFocused) {
                  minimizeWindow(win.id);
                } else {
                  focusWindow(win.id);
                }
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs max-w-32 transition-all ${
                win.isFocused && !win.isMinimized
                  ? 'bg-white/15 text-white'
                  : 'bg-white/[0.04] text-white/50 hover:bg-white/[0.08] hover:text-white/70'
              }`}
            >
              <span>{win.icon}</span>
              <span className="truncate">{win.title}</span>
              {win.isMinimized && <span className="text-[8px] opacity-50">◼</span>}
            </motion.button>
          ))}
        </div>

        {/* Clock */}
        <button
          onClick={handleClockClick}
          className="flex flex-col items-end px-3 hover:bg-white/[0.05] rounded-lg py-1 transition-colors cursor-pointer"
        >
          <span className="text-white text-xs font-medium font-mono">{time}</span>
          <span className="text-white/40 text-[10px]">{date}</span>
        </button>
      </div>
    </>
  );
}
