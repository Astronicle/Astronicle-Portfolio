'use client';
import { motion } from 'framer-motion';
import { projects } from '@/data';

export function ProjectDetail({ projectId }: { projectId: string }) {
  const p = projects.find(x => x.id === projectId);
  if (!p) return <div style={{ padding: 24, color: 'rgba(255,255,255,0.4)' }}>Project not found</div>;

  return (
    <div style={{ height: '100%', overflow: 'auto', color: '#fff' }}>
      {/* Hero */}
      <div style={{
        padding: '32px 28px 24px',
        background: `linear-gradient(135deg, ${p.color}28 0%, ${p.color}0a 100%)`,
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: `radial-gradient(circle at 1px 1px, ${p.color} 1px, transparent 0)`,
          backgroundSize: '20px 20px',
        }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>{p.emoji}</div>
          <h1 style={{ margin: '0 0 6px', fontSize: 22, fontWeight: 700 }}>{p.name}</h1>
          <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{p.description}</p>
        </div>
      </div>

      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Tech stack */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
          <p style={{ margin: '0 0 10px', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)' }}>Tech Stack</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {p.techStack.map(t => (
              <span key={t} style={{
                fontSize: 12, padding: '5px 12px', borderRadius: 999, fontWeight: 500,
                background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}40`,
              }}>{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.13 }}>
          <p style={{ margin: '0 0 10px', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)' }}>Overview</p>
          <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{p.longDescription}</p>
        </motion.div>

        {/* Features */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
          <p style={{ margin: '0 0 10px', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)' }}>Key Features</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {p.features.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, fontSize: 13, alignItems: 'flex-start' }}>
                <span style={{ color: p.color, flexShrink: 0, marginTop: 1 }}>✓</span>
                <span style={{ color: 'rgba(255,255,255,0.65)' }}>{f}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architecture */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
          <p style={{ margin: '0 0 10px', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)' }}>Architecture</p>
          <div style={{ padding: 14, borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{p.architecture}</p>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }} style={{ display: 'flex', gap: 10 }}>
          <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: 7,
            padding: '8px 16px', borderRadius: 9, textDecoration: 'none',
            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff', fontSize: 13, fontWeight: 500,
          }}>🐙 GitHub</a>
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 7,
              padding: '8px 16px', borderRadius: 9, textDecoration: 'none',
              background: `${p.color}28`, border: `1px solid ${p.color}44`,
              color: p.color, fontSize: 13, fontWeight: 500,
            }}>🚀 Live Demo</a>
          )}
        </motion.div>
      </div>
    </div>
  );
}
