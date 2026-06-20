'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function ResumeViewer() {
  const [zoom, setZoom] = useState(100);

  const resumeContent = {
    name: 'Astronicle',
    title: 'Full-Stack Software Developer',
    contact: ['astronicle@gmail.com', 'github.com/astronicle', 'linkedin.com/in/astronicle', 'leetcode.com/astronicle'],
    summary: 'Self-driven full-stack developer specializing in Java/Spring Boot and TypeScript/React ecosystems. Proven ability to design, build, and deploy production-grade web applications from scratch. AWS certified with hands-on cloud experience.',
    skills: {
      'Languages': ['Java', 'TypeScript', 'JavaScript', 'SQL'],
      'Frontend': ['React', 'Next.js', 'Tailwind CSS'],
      'Backend': ['Spring Boot', 'REST APIs', 'PostgreSQL', 'Redis'],
      'Cloud & Tools': ['AWS EC2/RDS/S3', 'Docker', 'Git', 'GitHub', 'Postman'],
    },
    projects: [
      { name: 'UrlShortee', tech: 'Spring Boot, React, PostgreSQL, AWS', desc: 'High-performance URL shortener with analytics and QR codes' },
      { name: 'Barze', tech: 'Next.js, TypeScript, PostgreSQL, Prisma', desc: 'Developer social platform for sharing code snippets' },
      { name: 'StygianMaxxer', tech: 'React Native, Spring Boot, PostgreSQL', desc: 'AI-powered fitness tracker with progressive overload' },
      { name: 'Genshin Calculator', tech: 'React, TypeScript, Zustand', desc: 'Game resource planning tool with 500+ farming routes' },
    ],
    certifications: [
      'AWS Certified Cloud Practitioner — Dec 2023',
      'AWS Certified AI Practitioner — Mar 2024',
    ],
  };

  return (
    <div className="h-full flex flex-col bg-[#1a1a1a] text-white">
      {/* Toolbar */}
      <div className="flex items-center gap-3 px-4 py-2 border-b border-white/[0.06] bg-[#141414]">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setZoom(Math.max(50, zoom - 10))}
            className="px-2 py-1 text-xs rounded hover:bg-white/10 transition-colors"
          >−</button>
          <span className="text-xs text-white/50 w-12 text-center">{zoom}%</span>
          <button
            onClick={() => setZoom(Math.min(150, zoom + 10))}
            className="px-2 py-1 text-xs rounded hover:bg-white/10 transition-colors"
          >+</button>
        </div>
        <div className="h-4 w-px bg-white/10" />
        <span className="text-xs text-white/40">Resume.pdf</span>
        <button className="ml-auto text-xs px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition-colors border border-indigo-500/30">
          ↓ Download
        </button>
      </div>

      {/* PDF Content */}
      <div className="flex-1 overflow-auto bg-[#2a2a2a] flex justify-center py-8 px-4">
        <motion.div
          className="bg-white text-gray-900 shadow-2xl"
          style={{
            width: `${(595 * zoom) / 100}px`,
            minHeight: `${(842 * zoom) / 100}px`,
            fontSize: `${zoom}%`,
            padding: '48px',
            transformOrigin: 'top center',
          }}
        >
          {/* Header */}
          <div className="border-b-2 border-gray-800 pb-4 mb-6">
            <h1 className="text-3xl font-bold tracking-tight">{resumeContent.name}</h1>
            <p className="text-lg text-gray-600 mt-1">{resumeContent.title}</p>
            <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
              {resumeContent.contact.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Summary</h2>
            <p className="text-sm leading-relaxed text-gray-700">{resumeContent.summary}</p>
          </div>

          {/* Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Technical Skills</h2>
            {Object.entries(resumeContent.skills).map(([cat, items]) => (
              <div key={cat} className="flex gap-2 text-sm mb-1">
                <span className="font-semibold text-gray-700 w-28 flex-shrink-0">{cat}:</span>
                <span className="text-gray-600">{items.join(', ')}</span>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Projects</h2>
            {resumeContent.projects.map((p) => (
              <div key={p.name} className="mb-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-gray-800">{p.name}</span>
                  <span className="text-xs text-gray-400">| {p.tech}</span>
                </div>
                <p className="text-sm text-gray-600 mt-0.5">• {p.desc}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Certifications</h2>
            {resumeContent.certifications.map((cert) => (
              <p key={cert} className="text-sm text-gray-700">• {cert}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
