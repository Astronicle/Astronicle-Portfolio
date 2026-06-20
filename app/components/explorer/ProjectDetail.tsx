'use client';
import { motion } from 'framer-motion';
import { projects } from '@/data';

interface ProjectDetailProps {
  projectId: string;
}

export function ProjectDetail({ projectId }: ProjectDetailProps) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return <div className="p-6 text-white/40">Project not found</div>;

  return (
    <div className="h-full overflow-auto text-white">
      {/* Hero */}
      <div
        className="relative h-48 flex items-end p-6"
        style={{ background: `linear-gradient(135deg, ${project.color}33 0%, ${project.color}11 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${project.color} 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative">
          <div className="text-5xl mb-3">{project.emoji}</div>
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <p className="text-white/60 text-sm mt-1">{project.description}</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Tech stack */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h2 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{ background: `${project.color}22`, color: project.color, border: `1px solid ${project.color}44` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <h2 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Overview</h2>
          <p className="text-white/70 text-sm leading-relaxed">{project.longDescription}</p>
        </motion.div>

        {/* Features */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Key Features</h2>
          <div className="grid grid-cols-2 gap-2">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span style={{ color: project.color }} className="mt-0.5 flex-shrink-0">✓</span>
                <span className="text-white/70">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architecture */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <h2 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Architecture</h2>
          <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <p className="text-white/60 text-sm leading-relaxed">{project.architecture}</p>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          className="flex gap-3 pt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] transition-colors text-sm font-medium border border-white/[0.08]"
          >
            🐙 View on GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              style={{ background: `${project.color}33`, color: project.color, border: `1px solid ${project.color}44` }}
            >
              🚀 Live Demo
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
}
