'use client';
import { motion } from 'framer-motion';
import { useWindowStore } from '@/store/windowStore';
import { wallpapers } from '@/data';

export function SettingsWindow() {
  const { settings, updateSettings } = useWindowStore();

  return (
    <div className="h-full flex text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-48 border-r border-white/[0.06] p-3 space-y-1 flex-shrink-0">
        {['Wallpaper', 'Theme', 'Animations', 'Desktop'].map((item) => (
          <div
            key={item}
            className="px-3 py-2 rounded-lg text-sm text-white/60 hover:bg-white/[0.05] hover:text-white cursor-pointer transition-colors"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6 space-y-8">
        {/* Wallpaper */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Wallpaper</h2>
          <div className="grid grid-cols-3 gap-3">
            {wallpapers.map((wp) => (
              <motion.button
                key={wp.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => updateSettings({ wallpaper: wp.id })}
                className={`relative h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  settings.wallpaper === wp.id ? 'border-indigo-500' : 'border-white/10'
                }`}
                style={{ background: wp.preview }}
              >
                {settings.wallpaper === wp.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <span className="text-white text-lg">✓</span>
                  </div>
                )}
                <p className="absolute bottom-1 left-0 right-0 text-center text-[9px] text-white/80 drop-shadow">
                  {wp.name}
                </p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Animations */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Animations</h2>
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div>
              <p className="text-sm font-medium">Enable Animations</p>
              <p className="text-xs text-white/40 mt-0.5">Window transitions and effects</p>
            </div>
            <button
              onClick={() => updateSettings({ animations: !settings.animations })}
              className={`w-11 h-6 rounded-full transition-colors relative ${
                settings.animations ? 'bg-indigo-500' : 'bg-white/10'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform shadow-sm ${
                  settings.animations ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Theme */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Theme</h2>
          <div className="grid grid-cols-3 gap-2">
            {(['dark', 'darker', 'midnight'] as const).map((theme) => (
              <button
                key={theme}
                onClick={() => updateSettings({ theme })}
                className={`p-3 rounded-xl border text-sm font-medium capitalize transition-all ${
                  settings.theme === theme
                    ? 'border-indigo-500 bg-indigo-500/10 text-white'
                    : 'border-white/[0.06] bg-white/[0.02] text-white/50 hover:text-white'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        {/* Icon Size */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Desktop Icon Size</h2>
          <div className="grid grid-cols-3 gap-2">
            {(['small', 'medium', 'large'] as const).map((size) => (
              <button
                key={size}
                onClick={() => updateSettings({ iconSize: size })}
                className={`p-3 rounded-xl border text-sm font-medium capitalize transition-all ${
                  settings.iconSize === size
                    ? 'border-purple-500 bg-purple-500/10 text-white'
                    : 'border-white/[0.06] bg-white/[0.02] text-white/50 hover:text-white'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
