'use client';
import { motion } from 'framer-motion';
import { projects, skills, certifications, experiences } from '@/data';

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <motion.section
      id={id}
      className="py-12 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-6">{title}</h2>
      {children}
    </motion.section>
  );
}

export function MobileLayout() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.06] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚀</span>
          <span className="font-bold text-sm tracking-widest">ASTRONICLE</span>
        </div>
        <span className="text-xs text-indigo-400">Portfolio</span>
      </nav>

      {/* Hero */}
      <section className="px-4 pt-16 pb-12 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-5xl mx-auto mb-6 shadow-lg shadow-indigo-500/30">
            👨‍💻
          </div>
          <h1 className="text-4xl font-bold mb-2">Astronicle</h1>
          <p className="text-indigo-400 mb-4">Full-Stack Software Developer</p>
          <p className="text-white/50 text-sm max-w-xs mx-auto leading-relaxed">
            Building scalable web apps with Java, Spring Boot, TypeScript & React
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <a href="https://github.com/astronicle" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] transition-colors text-sm border border-white/[0.08]">
              🐙 GitHub
            </a>
            <a href="mailto:astronicle@gmail.com"
              className="px-4 py-2 rounded-xl bg-indigo-500/20 text-indigo-400 text-sm border border-indigo-500/30">
              📧 Contact
            </a>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-2 px-4 pb-8">
        {[
          { value: '4+', label: 'Projects' },
          { value: '15+', label: 'Repos' },
          { value: '200+', label: 'LeetCode' },
          { value: '2', label: 'AWS Certs' },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="text-xl font-bold text-indigo-400">{stat.value}</div>
            <div className="text-[10px] text-white/30 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Projects */}
      <Section title="Projects" id="projects">
        <div className="space-y-3">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${project.color}22`, border: `1px solid ${project.color}44` }}>
                  {project.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm">{project.name}</h3>
                  <p className="text-white/50 text-xs mt-0.5 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] px-1.5 py-0.5 rounded"
                        style={{ background: `${project.color}22`, color: project.color }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills" id="skills">
        <div className="space-y-5">
          {skills.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-xs text-white/40 mb-2 flex items-center gap-1">
                <span>{cat.icon}</span> {cat.category}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 text-xs">
                    <span>{skill.icon}</span>
                    <span className="text-white/70">{skill.name}</span>
                    <span className="ml-auto text-white/30 font-mono">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section title="Certifications" id="certs">
        <div className="space-y-3">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                style={{ background: `${cert.badgeColor}22`, border: `1px solid ${cert.badgeColor}44` }}>
                {cert.icon}
              </div>
              <div>
                <h3 className="font-semibold text-sm">{cert.name}</h3>
                <p className="text-white/40 text-xs">{cert.issuer} · {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section title="Contact" id="contact">
        <div className="space-y-2">
          {[
            { icon: '📧', label: 'Email', value: 'astronicle@gmail.com', url: 'mailto:astronicle@gmail.com' },
            { icon: '🔵', label: 'LinkedIn', value: 'linkedin.com/in/astronicle', url: 'https://linkedin.com/in/astronicle' },
            { icon: '🐙', label: 'GitHub', value: 'github.com/astronicle', url: 'https://github.com/astronicle' },
            { icon: '🟠', label: 'LeetCode', value: 'leetcode.com/astronicle', url: 'https://leetcode.com/astronicle' },
          ].map((c) => (
            <a key={c.label} href={c.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-all">
              <span className="text-xl">{c.icon}</span>
              <div>
                <p className="text-white/40 text-xs">{c.label}</p>
                <p className="text-sm font-medium">{c.value}</p>
              </div>
              <span className="ml-auto text-white/20">↗</span>
            </a>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-white/[0.04]">
        <p className="text-white/20 text-xs">
          🖥️ Visit on desktop for the full OS experience
        </p>
        <p className="text-white/10 text-xs mt-1">Built with Next.js · Astronicle © 2026</p>
      </footer>
    </div>
  );
}
