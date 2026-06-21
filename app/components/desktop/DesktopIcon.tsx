'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import type { DesktopIcon as DesktopIconType } from '@/types';
import { useOpenWindow } from '@/hooks/useOpenWindow';

interface Props { icon: DesktopIconType; size?: 'small' | 'medium' | 'large'; }

const WINDOW_MAP: Record<string, { title: string; component: string; icon: string }> = {
  projects: { title: 'Projects', component: 'ProjectsExplorer', icon: '📁' },
  skills: { title: 'Skills', component: 'SkillsExplorer', icon: '📁' },
  experience: { title: 'Experience', component: 'ExperienceExplorer', icon: '📁' },
  education: { title: 'Education', component: 'EducationExplorer', icon: '📁' },
  certifications: { title: 'Certifications', component: 'CertificationsExplorer', icon: '📁' },
  contact: { title: 'Contact', component: 'ContactExplorer', icon: '📁' },
  resume: { title: 'Resume.pdf', component: 'ResumeViewer', icon: '📄' },
  terminal: { title: 'Terminal', component: 'Terminal', icon: '💻' },
  settings: { title: 'Settings', component: 'SettingsWindow', icon: '⚙️' },
  'recycle-bin': { title: 'Recycle Bin', component: 'RecycleBinExplorer', icon: '🗑️' },
};

export function DesktopIcon({ icon, size = 'medium' }: Props) {
  const [selected, setSelected] = useState(false);
  const [hovered, setHovered] = useState(false);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openWindow = useOpenWindow();

  const iconSize = size === 'small' ? 28 : size === 'large' ? 42 : 34;
  const labelSize = size === 'small' ? 9 : size === 'large' ? 12 : 10;
  const containerW = size === 'small' ? 60 : size === 'large' ? 84 : 72;

  const handleOpen = () => {
    if (icon.type === 'link' && icon.url) { window.open(icon.url, '_blank'); return; }
    const map = WINDOW_MAP[icon.action];
    if (map) openWindow(icon.action as any, map.title, map.icon, map.component);
  };

  const handleClick = () => {
    setSelected(true);
    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
      clickTimer.current = null;
      handleOpen();
    } else {
      clickTimer.current = setTimeout(() => { clickTimer.current = null; }, 280);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setSelected(false); }}
      style={{
        width: containerW, display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 5, cursor: 'pointer',
        padding: '6px 4px', borderRadius: 10, userSelect: 'none',
        background: selected ? 'rgba(99,102,241,0.2)' : hovered ? 'rgba(255,255,255,0.08)' : 'transparent',
      }}
    >
      <span style={{ fontSize: iconSize, lineHeight: 1, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }}>
        {icon.icon}
      </span>
      <span style={{
        fontSize: labelSize, color: '#fff', textAlign: 'center', lineHeight: 1.3,
        textShadow: '0 1px 4px rgba(0,0,0,0.8)', fontWeight: 500,
        background: selected ? 'rgba(99,102,241,0.5)' : 'transparent',
        padding: selected ? '1px 4px' : '0', borderRadius: 3,
        wordBreak: 'break-word', maxWidth: containerW - 4,
      }}>
        {icon.label}
      </span>
    </motion.div>
  );
}
