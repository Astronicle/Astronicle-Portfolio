'use client';
import { motion } from 'framer-motion';
import { skills } from '@/data';

export function SkillsExplorer() {
  return (
    <div className="h-full overflow-auto p-6 text-white">
      <div className="space-y-6">
        {skills.map((category, ci) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span>{category.icon}</span>
              <h2 className="text-xs font-semibold uppercase tracking-widest" style={{ color: category.color }}>
                {category.category}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {category.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: ci * 0.1 + si * 0.05 }}
                  className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{skill.icon}</span>
                      <span className="text-sm font-medium text-white/80">{skill.name}</span>
                    </div>
                    <span className="text-xs font-mono" style={{ color: category.color }}>{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${category.color}aa, ${category.color})` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: ci * 0.1 + si * 0.05 + 0.2, duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
