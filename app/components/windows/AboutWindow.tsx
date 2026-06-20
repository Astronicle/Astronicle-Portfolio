'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Counter({ target, label, suffix = '' }: { target: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
      <div className="text-3xl font-bold text-white font-mono">
        {count}{suffix}
      </div>
      <div className="text-xs text-white/40 mt-1">{label}</div>
    </div>
  );
}

export function AboutWindow() {
  return (
    <div className="h-full overflow-auto text-white">
      {/* Hero */}
      <div className="relative p-8 pb-6 border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent" />
        <div className="relative flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl flex-shrink-0 shadow-lg shadow-indigo-500/30">
            👨‍💻
          </div>
          <div>
            <h1 className="text-2xl font-bold">Astronicle</h1>
            <p className="text-indigo-400 mt-1">Full-Stack Software Developer</p>
            <p className="text-white/40 text-sm mt-2">Building scalable web apps with Java & TypeScript</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Counter target={4} label="Projects Built" suffix="+" />
          <Counter target={15} label="GitHub Repos" suffix="+" />
          <Counter target={200} label="LeetCode Solved" suffix="+" />
          <Counter target={2} label="AWS Certs" />
        </motion.div>

        {/* About */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">About</h2>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <p className="text-white/70 text-sm leading-relaxed">
              I&apos;m a self-driven software developer with a passion for building things that matter.
              My journey started with curiosity and evolved into a love for clean code, scalable systems,
              and solving hard problems. I specialize in Java/Spring Boot backends and React/Next.js frontends,
              with hands-on experience deploying on AWS.
            </p>
          </div>
        </motion.div>

        {/* Career Goals */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Career Goals</h2>
          <div className="space-y-2">
            {[
              { icon: '🎯', text: 'Land a role at a product-driven tech company' },
              { icon: '📈', text: 'Deepen expertise in distributed systems & cloud architecture' },
              { icon: '🤝', text: 'Contribute meaningfully to open-source projects' },
              { icon: '🚀', text: 'Build products that reach millions of users' },
            ].map((goal, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/60">
                <span>{goal.icon}</span>
                <span>{goal.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {['⚙️ System Design', '☁️ Cloud Computing', '🎮 Gaming', '🌙 Anime', '📚 Reading', '🏋️ Fitness', '🎵 Music', '🔭 Space'].map((interest) => (
              <span key={interest} className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/60">
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
