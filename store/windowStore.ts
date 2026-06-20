import { create } from 'zustand';
import type { WindowState, WindowId, Settings } from '@/types';

const DEFAULT_SETTINGS: Settings = {
  wallpaper: 'space',
  theme: 'dark',
  animations: true,
  sound: false,
  iconSize: 'medium',
};

interface WindowStore {
  windows: WindowState[];
  zCounter: number;
  settings: Settings;
  isBooting: boolean;
  isShutdown: boolean;

  openWindow: (window: Omit<WindowState, 'zIndex' | 'isFocused'>) => void;
  closeWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  maximizeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  updatePosition: (id: WindowId, position: { x: number; y: number }) => void;
  updateSize: (id: WindowId, size: { width: number; height: number }) => void;
  restoreWindow: (id: WindowId) => void;
  updateSettings: (settings: Partial<Settings>) => void;
  setBooting: (booting: boolean) => void;
  setShutdown: (shutdown: boolean) => void;
}

function getInitialSettings(): Settings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const stored = localStorage.getItem('astronicle-settings');
    if (stored) return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
  } catch { /* ignore */ }
  return DEFAULT_SETTINGS;
}

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  zCounter: 100,
  settings: DEFAULT_SETTINGS,
  isBooting: true,
  isShutdown: false,

  openWindow: (windowConfig) => {
    const { windows, zCounter } = get();
    const exists = windows.find((w) => w.id === windowConfig.id);

    if (exists) {
      if (exists.isMinimized) {
        set((state) => ({
          zCounter: state.zCounter + 1,
          windows: state.windows.map((w) =>
            w.id === windowConfig.id
              ? { ...w, isMinimized: false, isFocused: true, zIndex: state.zCounter + 1 }
              : { ...w, isFocused: false }
          ),
        }));
      } else {
        set((state) => ({
          zCounter: state.zCounter + 1,
          windows: state.windows.map((w) =>
            w.id === windowConfig.id
              ? { ...w, isFocused: true, zIndex: state.zCounter + 1 }
              : { ...w, isFocused: false }
          ),
        }));
      }
      return;
    }

    const newWindow: WindowState = {
      ...windowConfig,
      zIndex: zCounter + 1,
      isFocused: true,
    };

    set((state) => ({
      zCounter: state.zCounter + 1,
      windows: [
        ...state.windows.map((w) => ({ ...w, isFocused: false })),
        newWindow,
      ],
    }));
  },

  closeWindow: (id) => {
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    }));
  },

  minimizeWindow: (id) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMinimized: true, isFocused: false } : w
      ),
    }));
  },

  maximizeWindow: (id) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      ),
    }));
  },

  focusWindow: (id) => {
    set((state) => ({
      zCounter: state.zCounter + 1,
      windows: state.windows.map((w) =>
        w.id === id
          ? { ...w, isFocused: true, zIndex: state.zCounter + 1 }
          : { ...w, isFocused: false }
      ),
    }));
  },

  updatePosition: (id, position) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, position } : w
      ),
    }));
  },

  updateSize: (id, size) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, size } : w
      ),
    }));
  },

  restoreWindow: (id) => {
    set((state) => ({
      zCounter: state.zCounter + 1,
      windows: state.windows.map((w) =>
        w.id === id
          ? { ...w, isMinimized: false, isFocused: true, zIndex: state.zCounter + 1 }
          : { ...w, isFocused: false }
      ),
    }));
  },

  updateSettings: (newSettings) => {
    set((state) => {
      const updated = { ...state.settings, ...newSettings };
      if (typeof window !== 'undefined') {
        localStorage.setItem('astronicle-settings', JSON.stringify(updated));
      }
      return { settings: updated };
    });
  },

  setBooting: (booting) => set({ isBooting: booting }),
  setShutdown: (shutdown) => set({ isShutdown: shutdown }),
}));

// Hydrate settings from localStorage on client
if (typeof window !== 'undefined') {
  useWindowStore.setState({ settings: getInitialSettings() });
}
