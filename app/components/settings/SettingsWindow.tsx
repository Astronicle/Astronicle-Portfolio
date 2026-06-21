'use client';
import { motion } from 'framer-motion';
import { useWindowStore } from '@/store/windowStore';
import { wallpapers } from '@/data';

export function SettingsWindow() {
  const { settings, updateSettings } = useWindowStore();

  return (
    <div style={{ height: '100%', display: 'flex', color: '#fff', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div style={{ width: 168, borderRight: '1px solid rgba(255,255,255,0.07)', padding: 10, flexShrink: 0 }}>
        {['Wallpaper', 'Theme', 'Animations', 'Desktop'].map(item => (
          <div key={item} style={{
            padding: '9px 12px', borderRadius: 8, fontSize: 13, color: 'rgba(255,255,255,0.55)',
            cursor: 'pointer', transition: 'all 0.15s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; }}
          >{item}</div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 28 }}>
        {/* Wallpaper */}
        <div>
          <p style={{ margin: '0 0 14px', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)' }}>Wallpaper</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {wallpapers.map(wp => (
              <motion.button
                key={wp.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => updateSettings({ wallpaper: wp.id })}
                style={{
                  height: 60, borderRadius: 10, overflow: 'hidden', cursor: 'pointer',
                  background: wp.preview, position: 'relative',
                  border: `2px solid ${settings.wallpaper === wp.id ? '#6366f1' : 'rgba(255,255,255,0.1)'}`,
                  transition: 'border-color 0.2s',
                }}
              >
                {settings.wallpaper === wp.id && (
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>✓</div>
                )}
                <p style={{ position: 'absolute', bottom: 3, left: 0, right: 0, textAlign: 'center', fontSize: 9, color: 'rgba(255,255,255,0.85)', margin: 0, textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{wp.name}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Animations toggle */}
        <div>
          <p style={{ margin: '0 0 12px', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)' }}>Animations</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', borderRadius: 12, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div>
              <p style={{ margin: '0 0 3px', fontSize: 13, fontWeight: 500 }}>Enable Animations</p>
              <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Window transitions and effects</p>
            </div>
            <button
              onClick={() => updateSettings({ animations: !settings.animations })}
              style={{
                width: 44, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer',
                background: settings.animations ? '#6366f1' : 'rgba(255,255,255,0.12)',
                position: 'relative', transition: 'background 0.2s', flexShrink: 0,
              }}
            >
              <div style={{
                position: 'absolute', top: 3, width: 18, height: 18, borderRadius: '50%',
                background: '#fff', transition: 'left 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
                left: settings.animations ? 23 : 3,
              }} />
            </button>
          </div>
        </div>

        {/* Theme */}
        <div>
          <p style={{ margin: '0 0 12px', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)' }}>Theme</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {(['dark','darker','midnight'] as const).map(theme => (
              <button key={theme} onClick={() => updateSettings({ theme })} style={{
                padding: '10px 0', borderRadius: 10, border: `1px solid ${settings.theme === theme ? '#6366f1' : 'rgba(255,255,255,0.08)'}`,
                background: settings.theme === theme ? 'rgba(99,102,241,0.12)' : 'rgba(255,255,255,0.03)',
                color: settings.theme === theme ? '#fff' : 'rgba(255,255,255,0.45)',
                fontSize: 13, fontWeight: 500, cursor: 'pointer', textTransform: 'capitalize',
                transition: 'all 0.2s',
              }}>{theme}</button>
            ))}
          </div>
        </div>

        {/* Icon size */}
        <div>
          <p style={{ margin: '0 0 12px', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)' }}>Desktop Icon Size</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {(['small','medium','large'] as const).map(sz => (
              <button key={sz} onClick={() => updateSettings({ iconSize: sz })} style={{
                padding: '10px 0', borderRadius: 10, border: `1px solid ${settings.iconSize === sz ? '#a855f7' : 'rgba(255,255,255,0.08)'}`,
                background: settings.iconSize === sz ? 'rgba(168,85,247,0.12)' : 'rgba(255,255,255,0.03)',
                color: settings.iconSize === sz ? '#fff' : 'rgba(255,255,255,0.45)',
                fontSize: 13, fontWeight: 500, cursor: 'pointer', textTransform: 'capitalize',
                transition: 'all 0.2s',
              }}>{sz}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
