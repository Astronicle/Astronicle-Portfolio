'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import type { DesktopIcon as DesktopIconType } from '@/types';
import { useOpenWindow } from '@/hooks/useOpenWindow';

interface DesktopIconProps {
  icon: DesktopIconType;
  size?: 'small' | 'medium' | 'large';
}

const WINDOW_MAP: Record<string, { title: string; component: string; icon: string }> = {
  projects: { title: 'Projects', component: 'ProjectsExplorer', icon: '📁' },
  skills: { title: 'Skills', component: 'SkillsExplorer', icon: '📁' },
  experience: { title: 'Experience', component: 'ExperienceExplorer', icon: '📁' },
  certifications: { title: 'Certifications', component: 'CertificationsExplorer', icon: '📁' },
  contact: { title: 'Contact', component: 'ContactExplorer', icon: '📁' },
  resume: { title: 'Resume.pdf', component: 'ResumeViewer', icon: '📄' },
  terminal: { title: 'Terminal', component: 'Terminal', icon: '💻' },
  settings: { title: 'Settings', component: 'SettingsWindow', icon: '⚙️' },
  'recycle-bin': { title: 'Recycle Bin', component: 'RecycleBinExplorer', icon: '🗑️' },
};

export function DesktopIcon({ icon, size = 'medium' }: DesktopIconProps) {
  const [isSelected, setIsSelected] = useState(false);
  const clickTimer = useRef<NodeJS.Timeout | null>(null);
  const openWindow = useOpenWindow();

  const sizeClasses = {
    small: 'w-14',
    medium: 'w-18',
    large: 'w-22',
  };

  const iconSizes = {
    small: 'text-3xl',
    medium: 'text-4xl',
    large: 'text-5xl',
  };

  const handleClick = () => {
    setIsSelected(true);

    if (clickTimer.current) {
      // Double click
      clearTimeout(clickTimer.current);
      clickTimer.current = null;
      handleOpen();
    } else {
      clickTimer.current = setTimeout(() => {
        clickTimer.current = null;
      }, 280);
    }
  };

  const handleOpen = () => {
    if (icon.type === 'link' && icon.url) {
      window.open(icon.url, '_blank');
      return;
    }

    const map = WINDOW_MAP[icon.action];
    if (map) {
      openWindow(icon.action as any, map.title, map.icon, map.component);
    }
  };

  return (
    <motion.div
      className={`flex flex-col items-center gap-1.5 cursor-pointer p-2 rounded-lg select-none ${sizeClasses[size] || sizeClasses.medium}`}
      style={{ width: size === 'small' ? 56 : size === 'large' ? 88 : 72 }}
      onClick={handleClick}
      onBlur={() => setIsSelected(false)}
      tabIndex={0}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className={`${iconSizes[size]} rounded-xl p-2 transition-all duration-150 ${
          isSelected ? 'bg-indigo-500/25 ring-1 ring-indigo-500/50' : 'hover:bg-white/10'
        }`}
      >
        {icon.icon}
      </div>
      <span
        className={`text-white text-center leading-tight font-medium drop-shadow-md px-1 rounded ${
          isSelected ? 'bg-indigo-500/60' : ''
        }`}
        style={{ fontSize: size === 'small' ? 9 : size === 'large' ? 12 : 10 }}
      >
        {icon.label}
      </span>
    </motion.div>
  );
}
