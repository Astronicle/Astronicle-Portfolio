'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data';
import { useOpenWindow } from '@/hooks/useOpenWindow';

export function ProjectsExplorer() {
  const [selected, setSelected] = useState<string | null>(null);
  const openWindow = useOpenWindow();

  return (
    <div className="h-full flex flex-col bg-transparent text-white">
      {/* Address bar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/[0.06]">
        <span className="text-white/40 text-xs">📁</span>
        <span className="text-white/40 text-xs">Desktop</span>
        <span className="text-white/30 text-xs">›</span>
        <span className="text-white/70 text-xs">Projects</span>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-4 px-4 py-2 border-b border-white/[0.06] text-white/40 text-xs">
        <span>4 items</span>
        <span className="ml-auto">Grid view</span>
      </div>

      {/* Projects grid */}
      <div className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`group relative p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                selected === project.id
                  ? 'border-indigo-500/60 bg-indigo-500/10'
                  : 'border-white/[0.06] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
              }`}
              onClick={() => setSelected(project.id)}
              onDoubleClick={() =>
                openWindow(
                  `project-${project.id}` as `project-${string}`,
                  project.name,
                  '📁',
                  'ProjectDetail',
                  { projectId: project.id }
                )
              }
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-3"
                style={{ background: `${project.color}22`, border: `1px solid ${project.color}44` }}
              >
                {project.emoji}
              </div>
              <h3 className="text-white font-semibold text-sm">{project.name}</h3>
              <p className="text-white/40 text-xs mt-1 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-1.5 py-0.5 rounded"
                    style={{ background: `${project.color}22`, color: project.color }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${project.color}33` }} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="px-4 py-2 border-t border-white/[0.06] text-white/30 text-xs">
        {selected ? `"${projects.find(p => p.id === selected)?.name}" selected — double-click to open` : 'Double-click a project to view details'}
      </div>
    </div>
  );
}
