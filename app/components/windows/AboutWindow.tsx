'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Counter({ target, label, suffix = '' }: { target: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let n = 0;
    const step = target / (1400 / 16);
    const iv = setInterval(() => {
      n += step;
      if (n >= target) { setCount(target); clearInterval(iv); }
      else setCount(Math.floor(n));
    }, 16);
    return () => clearInterval(iv);
  }, [target]);

  return (
    <div style={{ textAlign: 'center', padding: '14px 8px', borderRadius: 12, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ fontSize: 26, fontWeight: 700, color: '#fff', fontFamily: 'monospace' }}>{count}{suffix}</div>
      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.38)', marginTop: 4 }}>{label}</div>
    </div>
  );
}

export function AboutWindow() {
  return (
    <div style={{ height: '100%', overflow: 'auto', color: '#fff' }}>
      {/* Hero */}
      <div style={{
        padding: '28px 28px 22px',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(168,85,247,0.06) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.15) 1px, transparent 0)', backgroundSize: '24px 24px', opacity: 0.4, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 76, height: 76, borderRadius: 20, background: 'linear-gradient(135deg, #6366f1, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, flexShrink: 0, boxShadow: '0 8px 32px rgba(99,102,241,0.35)' }}>
            👨‍💻
          </div>
          <div>
            <h1 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700 }}>Abdul Rehman</h1>
            <p style={{ margin: '0 0 2px', color: '#818cf8', fontSize: 14 }}>Software Developer</p>
            <p style={{ margin: '0 0 6px', color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>Lucknow, Uttar Pradesh · astronicle78@gmail.com</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <a href="https://linkedin.com/in/astronicle78" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: '#818cf8', textDecoration: 'none' }}>🔵 linkedin.com/in/astronicle78</a>
              <a href="https://github.com/Astronicle" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: '#818cf8', textDecoration: 'none' }}>🐙 github.com/Astronicle</a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          <Counter target={2} label="Projects" />
          <Counter target={4} label="AWS Certs" />
          <Counter target={9} label="CGPA" suffix=".13" />
          <Counter target={98} label="Class XII %" suffix=".25" />
        </motion.div>

        {/* Summary */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <p style={{ margin: '0 0 10px', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)' }}>Summary</p>
          <div style={{ padding: 16, borderRadius: 12, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
              Results-driven Software Developer with experience in building scalable applications, backend systems, and automation tools using Java, Python, JavaScript, and modern web technologies. Skilled in full-stack development, problem-solving, and designing reliable, production-ready solutions. Holder of 4 AWS Certifications including CloudOps Engineer Associate and Data Engineer Associate, with practical knowledge of cloud infrastructure, deployment automation, monitoring, security, and data engineering workflows.
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <p style={{ margin: '0 0 10px', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)' }}>Education</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { icon: '🎓', title: 'B.Tech — Information Technology', sub: 'KIET Group of Institutions, Ghaziabad', meta: '2024–2028 · CGPA: 9.13' },
              { icon: '🏫', title: 'Class XII — ISC Board', sub: 'City Montessori School, Lucknow', meta: '2023 · 98.25%' },
              { icon: '🏫', title: 'Class X — ICSE Board', sub: 'City Montessori School, Lucknow', meta: '2021 · 98.6%' },
            ].map((e, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{e.icon}</span>
                <div>
                  <p style={{ margin: '0 0 2px', fontSize: 13, fontWeight: 600 }}>{e.title}</p>
                  <p style={{ margin: '0 0 2px', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{e.sub}</p>
                  <p style={{ margin: 0, fontSize: 11, color: '#818cf8', fontFamily: 'monospace' }}>{e.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <p style={{ margin: '0 0 10px', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)' }}>Interests</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['☁️ Cloud Architecture', '🤖 AI & ML', '⚙️ System Design', '🌍 Open Source', '🎮 Gaming', '🌙 Anime', '📚 Reading', '🔭 Space'].map(interest => (
              <span key={interest} style={{ fontSize: 12, padding: '5px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(255,255,255,0.6)' }}>
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
