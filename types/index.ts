export type WindowId =
  | 'projects'
  | 'skills'
  | 'experience'
  | 'certifications'
  | 'contact'
  | 'resume'
  | 'terminal'
  | 'settings'
  | 'about'
  | 'recycle-bin'
  | `project-${string}`
  | `recycle-${string}`;

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
  id: string;
  label: string;
  icon: string;
  type: 'folder' | 'file' | 'app' | 'link';
  action: WindowId | string;
  url?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  architecture: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  color: string;
  emoji: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
  icon: string;
  color: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  badgeColor: string;
  icon: string;
  credentialUrl?: string;
}

export interface RecycleItem {
  id: string;
  name: string;
  deletedDate: string;
  message: string;
  icon: string;
}

export interface WallpaperOption {
  id: string;
  name: string;
  gradient: string;
  preview: string;
}

export interface Settings {
  wallpaper: string;
  theme: 'dark' | 'darker' | 'midnight';
  animations: boolean;
  sound: boolean;
  iconSize: 'small' | 'medium' | 'large';
}
