'use client';
import { motion } from 'framer-motion';
import { education } from '@/data';

export function EducationExplorer() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', color: '#fff' }}>
      {/* Address bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '8px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)',
        fontSize: 12, color: 'rgba(255,255,255,0.4)',
      }}>
        <span>📁</span>
        <span>Desktop</span>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
        <span style={{ color: 'rgba(255,255,255,0.7)' }}>Education</span>
        <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.3)' }}>
          {education.length} items
        </span>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{
              borderRadius: 14,
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
            }}
          >
            {/* Card header */}
            <div style={{
              padding: '18px 20px 16px',
              background: `linear-gradient(135deg, ${edu.color}20 0%, ${edu.color}08 100%)`,
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'flex-start', gap: 16,
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                background: `${edu.color}25`,
                border: `1px solid ${edu.color}50`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26,
              }}>
                {edu.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                  <div>
                    <h3 style={{ margin: '0 0 3px', fontSize: 15, fontWeight: 700 }}>
                      {edu.institution}
                    </h3>
                    <p style={{ margin: '0 0 6px', fontSize: 13, color: edu.color, fontWeight: 500 }}>
                      {edu.degree}
                    </p>
                    <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.38)' }}>
                      📍 {edu.location}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <span style={{
                      display: 'inline-block',
                      fontSize: 11, fontFamily: 'monospace',
                      color: 'rgba(255,255,255,0.3)',
                      padding: '3px 8px', borderRadius: 6,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}>
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Grade + Coursework */}
            <div style={{
              padding: '14px 20px',
              background: 'rgba(255,255,255,0.02)',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              {/* Grade badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>
                  {edu.gradeLabel}:
                </span>
                <span style={{
                  fontSize: 14, fontWeight: 700, fontFamily: 'monospace',
                  color: edu.color,
                  padding: '2px 10px', borderRadius: 6,
                  background: `${edu.color}18`,
                  border: `1px solid ${edu.color}40`,
                }}>
                  {edu.grade}
                </span>
              </div>

              {/* Coursework */}
              {edu.coursework && edu.coursework.length > 0 && (
                <div>
                  <p style={{ margin: '0 0 8px', fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Relevant Coursework
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {edu.coursework.map(course => (
                      <span key={course} style={{
                        fontSize: 11, padding: '4px 10px', borderRadius: 6,
                        background: `${edu.color}12`,
                        border: `1px solid ${edu.color}30`,
                        color: 'rgba(255,255,255,0.65)',
                      }}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
