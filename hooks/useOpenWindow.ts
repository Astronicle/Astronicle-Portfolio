import { useWindowStore } from '@/store/windowStore';
import type { WindowId } from '@/types';

export function useOpenWindow() {
  const openWindow = useWindowStore((s) => s.openWindow);

  return (id: WindowId, title: string, icon: string, component: string, props?: Record<string, unknown>) => {
    const sizes: Record<string, { w: number; h: number }> = {
      projects: { w: 900, h: 620 },
      skills: { w: 800, h: 580 },
      experience: { w: 780, h: 600 },
      certifications: { w: 720, h: 500 },
      contact: { w: 680, h: 480 },
      resume: { w: 750, h: 680 },
      terminal: { w: 720, h: 480 },
      settings: { w: 760, h: 540 },
      about: { w: 820, h: 620 },
      'recycle-bin': { w: 680, h: 460 },
    };

    const key = id.startsWith('project-') ? 'projects' : id.startsWith('recycle-') ? 'recycle-bin' : id;
    const { w, h } = sizes[key] || { w: 700, h: 500 };

    const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const vh = typeof window !== 'undefined' ? window.innerHeight : 800;

    const x = Math.max(40, Math.floor((vw - w) / 2) + Math.floor(Math.random() * 60 - 30));
    const y = Math.max(40, Math.floor((vh - h) / 2) + Math.floor(Math.random() * 40 - 20));

    openWindow({
      id,
      title,
      icon,
      isMinimized: false,
      isMaximized: false,
      position: { x, y },
      size: { width: w, height: h },
      component,
      props,
    });
  };
}
