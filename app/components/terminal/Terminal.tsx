'use client';
import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success' | 'ascii';
  content: string;
}

const COMMANDS: Record<string, () => string[]> = {
  help: () => [
    '╔══════════════════════════════════════╗',
    '║     Astronicle Portfolio OS - Help   ║',
    '╚══════════════════════════════════════╝',
    '',
    '  about         → About Astronicle',
    '  projects      → List all projects',
    '  skills        → View tech skills',
    '  experience    → Work experience',
    '  certifications→ AWS certifications',
    '  contact       → Contact information',
    '  resume        → View resume',
    '  github        → Open GitHub profile',
    '  linkedin      → Open LinkedIn',
    '  leetcode      → Open LeetCode',
    '  whoami        → Display user info',
    '  history       → Command history',
    '  clear         → Clear terminal',
    '  easteregg     → ???',
    '',
  ],
  about: () => [
    '┌─────────────────────────────────────────┐',
    '│              ASTRONICLE                 │',
    '│         Software Developer              │',
    '└─────────────────────────────────────────┘',
    '',
    '  A passionate full-stack developer who',
    '  builds things with Java, TypeScript,',
    '  Spring Boot, React, and AWS.',
    '',
    '  Currently: Building cool stuff 🚀',
    '  Location: Planet Earth 🌍',
    '  Status: Open to opportunities ✅',
    '',
  ],
  whoami: () => ['astronicle', ''],
  projects: () => [
    'Projects (4 total):',
    '',
    '  🔗 UrlShortee          → URL shortener with analytics',
    '  ⚡ Barze               → Developer social platform',
    '  💪 StygianMaxxer       → AI-powered fitness tracker',
    '  🌙 Genshin Calculator  → Resource planning tool',
    '',
    'Tip: Open the Projects folder on the desktop for details.',
    '',
  ],
  skills: () => [
    'Technical Skills:',
    '',
    '  Languages  : Java ████████ 92%',
    '               TypeScript ███████ 88%',
    '               JavaScript ████████ 90%',
    '               SQL ██████ 82%',
    '',
    '  Frontend   : React ████████ 90%',
    '               Next.js ███████ 85%',
    '               Tailwind ████████ 92%',
    '',
    '  Backend    : Spring Boot ████████ 88%',
    '               REST APIs ████████ 90%',
    '               PostgreSQL ██████ 82%',
    '',
    '  Cloud      : AWS ██████ 78%',
    '               Docker ███████ 80%',
    '',
  ],
  experience: () => [
    'Experience Timeline:',
    '',
    '  2021 → Learning Journey begins',
    '  2022 → First personal projects',
    '  2023 → Open source contributions',
    '  2023 → AWS Cloud Practitioner certified',
    '  2024 → AWS AI Practitioner certified',
    '  2024 → 4+ production projects deployed',
    '  Now  → Building the future 🚀',
    '',
  ],
  certifications: () => [
    'AWS Certifications:',
    '',
    '  ☁️  AWS Certified Cloud Practitioner    [Dec 2023]',
    '  🤖  AWS Certified AI Practitioner       [Mar 2024]',
    '',
    '  In Progress:',
    '  ⏳  AWS Developer Associate',
    '  ⏳  AWS Solutions Architect Associate',
    '',
  ],
  contact: () => [
    'Contact Information:',
    '',
    '  📧  Email    : astronicle@gmail.com',
    '  🔵  LinkedIn : linkedin.com/in/astronicle',
    '  🐙  GitHub   : github.com/astronicle',
    '  🟠  LeetCode : leetcode.com/astronicle',
    '',
  ],
  resume: () => [
    'Opening Resume...',
    'Tip: Double-click Resume.pdf on the desktop.',
    '',
  ],
  github: () => {
    if (typeof window !== 'undefined') window.open('https://github.com/astronicle', '_blank');
    return ['Opening GitHub profile...', ''];
  },
  linkedin: () => {
    if (typeof window !== 'undefined') window.open('https://linkedin.com/in/astronicle', '_blank');
    return ['Opening LinkedIn profile...', ''];
  },
  leetcode: () => {
    if (typeof window !== 'undefined') window.open('https://leetcode.com/astronicle', '_blank');
    return ['Opening LeetCode profile...', '200+ problems solved 💪', ''];
  },
  easteregg: () => [
    '🥚 You found an easter egg!',
    '',
    '  Try these secret commands:',
    '  → "sudo hire astronicle"',
    '  → Konami code on the desktop (↑↑↓↓←→←→BA)',
    '  → Click the clock 10 times',
    '',
  ],
  clear: () => [],
};

export function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'ascii', content: '╔══════════════════════════════════════════════╗' },
    { type: 'ascii', content: '║     Welcome to Astronicle Portfolio OS       ║' },
    { type: 'ascii', content: '║           Type "help" to get started         ║' },
    { type: 'ascii', content: '╚══════════════════════════════════════════════╝' },
    { type: 'output', content: '' },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, cmd.trim()];
    setHistory(newHistory);
    setHistoryIndex(-1);

    const inputLine: TerminalLine = { type: 'input', content: cmd };

    if (!trimmed) {
      setLines((l) => [...l, inputLine, { type: 'output', content: '' }]);
      return;
    }

    // Easter egg
    if (trimmed === 'sudo hire astronicle') {
      setLines((l) => [
        ...l,
        inputLine,
        { type: 'success', content: '🎉 EXCELLENT CHOICE! Opening offer letter...' },
        { type: 'success', content: '  You have excellent taste in developers.' },
        { type: 'success', content: '  astronicle@gmail.com — drop a message! 🚀' },
        { type: 'output', content: '' },
      ]);
      return;
    }

    if (trimmed === 'history') {
      const historyLines: TerminalLine[] = [
        inputLine,
        ...newHistory.map((h, i) => ({
          type: 'output' as const,
          content: `  ${i + 1}  ${h}`,
        })),
        { type: 'output', content: '' },
      ];
      setLines((l) => [...l, ...historyLines]);
      return;
    }

    if (trimmed === 'clear') {
      setLines([]);
      return;
    }

    const handler = COMMANDS[trimmed];
    if (handler) {
      const output = handler();
      const outputLines: TerminalLine[] = output.map((o) => ({ type: 'output' as const, content: o }));
      setLines((l) => [...l, inputLine, ...outputLines]);
    } else {
      setLines((l) => [
        ...l,
        inputLine,
        { type: 'error', content: `Command not found: "${trimmed}". Type "help" for available commands.` },
        { type: 'output', content: '' },
      ]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(newIndex);
      setInput(history[history.length - 1 - newIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      setInput(newIndex === -1 ? '' : history[history.length - 1 - newIndex] || '');
    }
  };

  return (
    <div
      className="h-full flex flex-col bg-[#0d1117] text-green-400 font-mono text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1 overflow-auto p-4 space-y-0.5">
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              line.type === 'input' ? 'text-white' :
              line.type === 'error' ? 'text-red-400' :
              line.type === 'success' ? 'text-yellow-400' :
              line.type === 'ascii' ? 'text-indigo-400' :
              'text-green-400/80'
            }
          >
            {line.type === 'input' && (
              <span>
                <span className="text-indigo-400">astronicle</span>
                <span className="text-white/40">@</span>
                <span className="text-purple-400">portfolio</span>
                <span className="text-white/40">:~$ </span>
                <span className="text-white">{line.content}</span>
              </span>
            )}
            {line.type !== 'input' && (line.content || '\u00A0')}
          </div>
        ))}

        {/* Active input line */}
        <div className="flex items-center">
          <span className="text-indigo-400">astronicle</span>
          <span className="text-white/40">@</span>
          <span className="text-purple-400">portfolio</span>
          <span className="text-white/40">:~$ </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-white caret-green-400"
            spellCheck={false}
            autoComplete="off"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
