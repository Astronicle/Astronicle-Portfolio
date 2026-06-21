'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data';
import { useOpenWindow } from '@/hooks/useOpenWindow';

export function ProjectsExplorer() {
  const [selected, setSelected] = useState<string | null>(null);
  const openWindow = useOpenWindow();

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', color: '#fff' }}>
      {/* Address bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '8px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)',
        fontSize: 12, color: 'rgba(255,255,255,0.4)',
      }}>
        <span>📁</span><span>Desktop</span>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
        <span style={{ color: 'rgba(255,255,255,0.7)' }}>Projects</span>
        <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.3)' }}>4 items</span>
      </div>

      {/* Grid */}
      <div style={{ flex: 1, overflow: 'auto', padding: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              onClick={() => setSelected(p.id)}
              onDoubleClick={() => openWindow(`project-${p.id}` as any, p.name, '📁', 'ProjectDetail', { projectId: p.id })}
              style={{
                padding: 16, borderRadius: 12, cursor: 'pointer',
                background: selected === p.id ? `${p.color}18` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${selected === p.id ? p.color + '55' : 'rgba(255,255,255,0.07)'}`,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (selected !== p.id) { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; } }}
              onMouseLeave={e => { if (selected !== p.id) { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; } }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 10, marginBottom: 12,
                background: `${p.color}20`, border: `1px solid ${p.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
              }}>{p.emoji}</div>
              <h3 style={{ margin: '0 0 4px', fontSize: 14, fontWeight: 600 }}>{p.name}</h3>
              <p style={{ margin: '0 0 10px', fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>
                {p.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {p.techStack.slice(0, 3).map(t => (
                  <span key={t} style={{
                    fontSize: 10, padding: '2px 7px', borderRadius: 4,
                    background: `${p.color}20`, color: p.color,
                  }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{
        padding: '8px 16px', borderTop: '1px solid rgba(255,255,255,0.06)',
        fontSize: 11, color: 'rgba(255,255,255,0.3)',
      }}>
        {selected ? `"${projects.find(p => p.id === selected)?.name}" selected — double-click to open` : 'Double-click a project to view details'}
      </div>
    </div>
  );
}
