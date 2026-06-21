'use client';
import { motion } from 'framer-motion';
import { skills } from '@/data';

export function SkillsExplorer() {
  return (
    <div style={{ height: '100%', overflow: 'auto', padding: 24, color: '#fff', display: 'flex', flexDirection: 'column', gap: 28 }}>
      {skills.map((cat, ci) => (
        <motion.div key={cat.category} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ci * 0.08 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 16 }}>{cat.icon}</span>
            <span style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: cat.color }}>
              {cat.category}
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {cat.skills.map((skill, si) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: ci * 0.08 + si * 0.04 }}
                style={{
                  padding: '12px 14px', borderRadius: 10,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <span style={{ fontSize: 16 }}>{skill.icon}</span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.82)' }}>{skill.name}</span>
                  </div>
                  <span style={{ fontSize: 11, fontFamily: 'monospace', color: cat.color }}>{skill.level}%</span>
                </div>
                <div style={{ height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2, overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: ci * 0.08 + si * 0.04 + 0.2, duration: 0.7, ease: 'easeOut' }}
                    style={{ height: '100%', background: `linear-gradient(90deg, ${cat.color}88, ${cat.color})`, borderRadius: 2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
