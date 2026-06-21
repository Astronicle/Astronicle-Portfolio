export type WindowId =
  | 'projects' | 'skills' | 'experience' | 'education'
  | 'certifications' | 'contact' | 'resume'
  | 'terminal' | 'settings' | 'about' | 'recycle-bin'
  | `project-${string}`;

export interface WindowState {
  id: WindowId;
  title: string;
  icon: string;
  isMinimized: boolean;
  isMaximized: boolean;
  isFocused: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  component: string;
  props?: Record<string, unknown>;
}

export interface DesktopIcon {
  id: string; label: string; icon: string;
  type: 'folder' | 'file' | 'app' | 'link';
  action: string; url?: string;
}

export interface Project {
  id: string; name: string; description: string; longDescription: string;
  features: string[]; architecture: string; techStack: string[];
  githubUrl: string; liveUrl?: string; color: string; emoji: string;
}

export interface SkillCategory {
  category: string; icon: string; color: string;
  skills: { name: string; level: number; icon: string }[];
}

export interface Experience {
  id: string; title: string; subtitle: string; period: string;
  description: string; tags: string[]; icon: string; color: string;
}

export interface Education {
  id: string; institution: string; degree: string; period: string;
  grade: string; gradeLabel: string; location: string; icon: string; color: string;
  coursework?: string[];
}

export interface Certification {
  id: string; name: string; issuer: string; date: string; expires: string;
  badgeColor: string; icon: string; detail: string; credentialUrl?: string;
}

export interface RecycleItem {
  id: string; name: string; deletedDate: string; message: string; icon: string;
}

export interface WallpaperOption {
  id: string; name: string; gradient: string; preview: string;
}

export interface Settings {
  wallpaper: string;
  theme: 'dark' | 'darker' | 'midnight';
  animations: boolean;
  sound: boolean;
  iconSize: 'small' | 'medium' | 'large';
}
