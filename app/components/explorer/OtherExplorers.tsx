'use client';
import { motion } from 'framer-motion';
import { experiences, certifications, recycleItems } from '@/data';

export function ExperienceExplorer() {
  return (
    <div className="h-full overflow-auto p-6 text-white">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-white/[0.06]" />

        <div className="space-y-6 pl-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              className="relative"
            >
              {/* Dot */}
              <div
                className="absolute -left-[42px] w-8 h-8 rounded-lg flex items-center justify-center text-base border"
                style={{ background: `${exp.color}22`, borderColor: `${exp.color}44`, color: exp.color }}
              >
                {exp.icon}
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-semibold text-white">{exp.title}</h3>
                    <p className="text-sm" style={{ color: exp.color }}>{exp.subtitle}</p>
                  </div>
                  <span className="text-xs text-white/30 whitespace-nowrap font-mono">{exp.period}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded"
                      style={{ background: `${exp.color}15`, color: exp.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CertificationsExplorer() {
  return (
    <div className="h-full overflow-auto p-6 text-white">
      <div className="grid grid-cols-1 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-white/20 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: `${cert.badgeColor}22`, border: `1px solid ${cert.badgeColor}44` }}
              >
                {cert.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-white">{cert.name}</h3>
                <p className="text-sm text-white/50 mt-0.5">{cert.issuer}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs font-mono" style={{ color: cert.badgeColor }}>
                    Issued: {cert.date}
                  </span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/30 hover:text-white/60 transition-colors"
                    >
                      Verify →
                    </a>
                  )}
                </div>
              </div>
              <div
                className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{ background: `${cert.badgeColor}22`, color: cert.badgeColor }}
              >
                ✓ Active
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-center">
        <p className="text-white/30 text-sm">More certifications in progress...</p>
        <p className="text-white/20 text-xs mt-1">AWS Developer Associate • AWS Solutions Architect</p>
      </div>
    </div>
  );
}

export function ContactExplorer() {
  const contacts = [
    { icon: '📧', label: 'Email', value: 'astronicle@gmail.com', url: 'mailto:astronicle@gmail.com', color: '#ef4444' },
    { icon: '🔵', label: 'LinkedIn', value: 'linkedin.com/in/astronicle', url: 'https://linkedin.com/in/astronicle', color: '#0077b5' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/astronicle', url: 'https://github.com/astronicle', color: '#6e40c9' },
    { icon: '🟠', label: 'LeetCode', value: 'leetcode.com/astronicle', url: 'https://leetcode.com/astronicle', color: '#ffa116' },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/[0.06] text-xs text-white/40">
        <span>📁</span>
        <span>Desktop</span>
        <span className="text-white/20">›</span>
        <span className="text-white/60">Contact</span>
      </div>
      <div className="flex-1 p-6 grid gap-3">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all group cursor-pointer"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
              style={{ background: `${c.color}22`, border: `1px solid ${c.color}33` }}
            >
              {c.icon}
            </div>
            <div>
              <p className="text-white/40 text-xs">{c.label}</p>
              <p className="text-white font-medium text-sm">{c.value}</p>
            </div>
            <div className="ml-auto text-white/20 group-hover:text-white/60 transition-colors text-sm">↗</div>
          </motion.a>
        ))}
      </div>
      <div className="px-4 py-3 border-t border-white/[0.06] text-white/30 text-xs text-center">
        Double-click any contact to open
      </div>
    </div>
  );
}

export function RecycleBinExplorer() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col text-white">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/[0.06] text-xs text-white/40">
        <span>🗑️</span>
        <span className="text-white/60">Recycle Bin</span>
        <span className="ml-auto">{recycleItems.length} items</span>
      </div>
      <div className="flex-1 overflow-auto p-4 grid gap-2">
        {recycleItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            <div
              className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/10 cursor-pointer transition-all"
              onDoubleClick={() => setOpenItem(openItem === item.id ? null : item.id)}
            >
              <span className="text-xl">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white/70 truncate">{item.name}</p>
                <p className="text-xs text-white/30">Deleted: {item.deletedDate}</p>
              </div>
              <span className="text-white/20 text-xs">{openItem === item.id ? '▲' : '▼'}</span>
            </div>
            {openItem === item.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mx-2 p-4 bg-white/[0.03] border border-white/[0.06] rounded-b-lg text-sm text-white/60 leading-relaxed"
              >
                {item.message}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Must import useState at top of file
import { useState } from 'react';
