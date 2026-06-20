import type { Project, SkillCategory, Experience, Certification, RecycleItem, WallpaperOption, DesktopIcon } from '@/types';

export const projects: Project[] = [
  {
    id: 'urlshortee',
    name: 'UrlShortee',
    description: 'A high-performance URL shortener with analytics, custom aliases, and QR code generation.',
    longDescription: 'UrlShortee is a production-grade URL shortening service built with a focus on performance and scalability. Features include real-time click analytics, custom short aliases, QR code generation, expiry dates, and a comprehensive dashboard for link management.',
    features: [
      'Custom short aliases with validation',
      'Real-time click analytics & geographic data',
      'QR code generation for every link',
      'Link expiry and password protection',
      'REST API with rate limiting',
      'Responsive dashboard with charts',
    ],
    architecture: 'Built with Spring Boot microservices on the backend, PostgreSQL for persistent storage with Redis caching for high-throughput redirects. The frontend is a React SPA consuming the REST API. Deployed on AWS EC2 with RDS and ElastiCache.',
    techStack: ['Spring Boot', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'AWS EC2', 'Docker'],
    githubUrl: 'https://github.com/astronicle/urlshortee',
    liveUrl: 'https://urlshortee.dev',
    color: '#6366f1',
    emoji: '🔗',
  },
  {
    id: 'barze',
    name: 'Barze',
    description: 'A full-stack social platform for developers to share code snippets, tips, and discoveries.',
    longDescription: 'Barze is a developer-centric social platform where engineers share code snippets, technical discoveries, and programming tips. Features a modern feed, syntax-highlighted code blocks, tag-based discovery, and a reputation system.',
    features: [
      'Syntax-highlighted code sharing',
      'Tag-based content discovery',
      'User reputation & karma system',
      'Real-time notifications',
      'Full-text search across posts',
      'OAuth with GitHub',
    ],
    architecture: 'Next.js full-stack application using App Router with server components. PostgreSQL database via Prisma ORM. Authentication handled by NextAuth. Real-time features powered by Server-Sent Events.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth', 'Tailwind CSS'],
    githubUrl: 'https://github.com/astronicle/barze',
    color: '#8b5cf6',
    emoji: '⚡',
  },
  {
    id: 'stygianmaxxer',
    name: 'StygianMaxxer',
    description: 'An intelligent fitness tracker and workout optimizer with AI-powered recommendations.',
    longDescription: 'StygianMaxxer is a comprehensive fitness tracking application that goes beyond simple logging. It analyzes workout patterns, provides progressive overload recommendations, tracks body metrics over time, and generates personalized training plans.',
    features: [
      'Intelligent progressive overload suggestions',
      'Custom workout plan builder',
      'Body metrics tracking with charts',
      'Exercise library with 500+ movements',
      'Personal records & achievement system',
      'Export data as CSV/PDF',
    ],
    architecture: 'React Native app (iOS & Android) with a Spring Boot REST API backend. PostgreSQL for user data with time-series optimizations for metrics tracking. AWS S3 for media storage. CI/CD via GitHub Actions.',
    techStack: ['React Native', 'Spring Boot', 'PostgreSQL', 'AWS S3', 'TypeScript', 'Docker'],
    githubUrl: 'https://github.com/astronicle/stygianmaxxer',
    color: '#ef4444',
    emoji: '💪',
  },
  {
    id: 'genshin-calc',
    name: 'Genshin Material Calculator',
    description: 'A resource planning tool for Genshin Impact players to optimize farming routes and material usage.',
    longDescription: 'A comprehensive web application for Genshin Impact players to plan their character and weapon upgrade paths. Calculates exact material requirements, maps optimal farming routes, and tracks daily/weekly resin spending.',
    features: [
      'Character & weapon upgrade calculator',
      'Optimal farming route generation',
      'Daily/weekly resin tracker',
      'Material inventory management',
      'Pull budget & primo planning',
      'Domain schedule optimizer',
    ],
    architecture: 'Pure client-side React application with all game data bundled as JSON. Uses localStorage for inventory persistence. No backend required — built for performance with memoization throughout.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Vite'],
    githubUrl: 'https://github.com/astronicle/genshin-calc',
    liveUrl: 'https://genshin-calc.vercel.app',
    color: '#10b981',
    emoji: '🌙',
  },
];

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    icon: '💻',
    color: '#6366f1',
    skills: [
      { name: 'Java', level: 92, icon: '☕' },
      { name: 'TypeScript', level: 88, icon: '🔷' },
      { name: 'JavaScript', level: 90, icon: '🟡' },
      { name: 'SQL', level: 82, icon: '🗄️' },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: '#8b5cf6',
    skills: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Next.js', level: 85, icon: '▲' },
      { name: 'Tailwind CSS', level: 92, icon: '🌊' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#ef4444',
    skills: [
      { name: 'Spring Boot', level: 88, icon: '🍃' },
      { name: 'REST APIs', level: 90, icon: '🔌' },
      { name: 'PostgreSQL', level: 82, icon: '🐘' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    color: '#f59e0b',
    skills: [
      { name: 'AWS', level: 78, icon: '☁️' },
      { name: 'Docker', level: 80, icon: '🐳' },
    ],
  },
  {
    category: 'Tools',
    icon: '🔧',
    color: '#10b981',
    skills: [
      { name: 'Git', level: 92, icon: '🌿' },
      { name: 'GitHub', level: 90, icon: '🐙' },
      { name: 'IntelliJ IDEA', level: 88, icon: '🧠' },
      { name: 'Postman', level: 85, icon: '📮' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'personal-projects',
    title: 'Personal Projects',
    subtitle: 'Full-Stack Development',
    period: '2022 – Present',
    description: 'Built 4+ production-grade projects spanning URL shorteners, social platforms, fitness apps, and game utilities. Each project follows industry best practices with proper architecture, testing, and deployment pipelines.',
    tags: ['Spring Boot', 'React', 'Next.js', 'PostgreSQL', 'AWS'],
    icon: '🚀',
    color: '#6366f1',
  },
  {
    id: 'open-source',
    title: 'Open Source Contributions',
    subtitle: 'Community Development',
    period: '2023 – Present',
    description: 'Active contributor to several open-source projects. Fixed bugs, improved documentation, and added features to Spring Boot ecosystem libraries and React component libraries.',
    tags: ['Git', 'GitHub', 'Java', 'TypeScript', 'Documentation'],
    icon: '🌍',
    color: '#10b981',
  },
  {
    id: 'cloud-projects',
    title: 'Cloud & Infrastructure Projects',
    subtitle: 'AWS Solutions',
    period: '2023 – Present',
    description: 'Designed and deployed cloud-native solutions on AWS. Projects include auto-scaling web applications, S3-backed media storage, RDS database configurations, and Lambda-powered serverless functions.',
    tags: ['AWS EC2', 'RDS', 'S3', 'Lambda', 'CloudWatch', 'IAM'],
    icon: '☁️',
    color: '#f59e0b',
  },
  {
    id: 'learning',
    title: 'Learning Journey',
    subtitle: 'Continuous Education',
    period: '2021 – Present',
    description: 'Committed to continuous learning through AWS certifications, LeetCode problem solving (200+ problems), and following system design principles. Currently exploring distributed systems and microservices architecture.',
    tags: ['AWS Certified', 'LeetCode', 'System Design', 'Data Structures'],
    icon: '📚',
    color: '#8b5cf6',
  },
];

export const certifications: Certification[] = [
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'December 2023',
    badgeColor: '#f59e0b',
    icon: '☁️',
    credentialUrl: 'https://aws.amazon.com/certification/',
  },
  {
    id: 'aws-ai-practitioner',
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    date: 'March 2024',
    badgeColor: '#8b5cf6',
    icon: '🤖',
    credentialUrl: 'https://aws.amazon.com/certification/',
  },
];

export const recycleItems: RecycleItem[] = [
  {
    id: 'php',
    name: 'PHP_Experiments_2021',
    deletedDate: 'March 12, 2022',
    message: '🤔 There once was a time when every web tutorial started with <?php echo "Hello World"; ?>. We don\'t talk about those days. The files are gone. The memories... not so much.',
    icon: '🐘',
  },
  {
    id: 'jquery',
    name: 'jQuery_Era_Projects',
    deletedDate: 'January 5, 2022',
    message: '⚡ $(document).ready(function() { // fix everything }); — A simpler time. Before components, before hooks, before we knew better. These files have been deleted, but the muscle memory of typing .click() will never leave.',
    icon: '💛',
  },
  {
    id: 'centering',
    name: 'How_To_Center_A_Div.txt',
    deletedDate: 'November 30, 2021',
    message: '😤 This file contained 47 different attempts at centering a div. margin: auto, text-align: center, position: absolute... Some worked. Some didn\'t. All were deleted in shame. We now use flexbox. We are healed.',
    icon: '📄',
  },
  {
    id: 'css',
    name: 'CSS_Nightmares_v6.css',
    deletedDate: 'September 14, 2021',
    message: '😱 6 versions. SIX. This file contained !important after !important in an increasingly desperate attempt to override Bootstrap. Pixel-perfect layouts that broke on any screen not exactly 1440px wide. Gone. But not forgotten.',
    icon: '🎨',
  },
];

export const wallpapers: WallpaperOption[] = [
  {
    id: 'space',
    name: 'Space Theme',
    gradient: 'radial-gradient(ellipse at 20% 50%, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)',
    preview: 'linear-gradient(135deg, #1a1a2e 0%, #533483 100%)',
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    gradient: 'radial-gradient(ellipse at 80% 20%, #0d0d0d 0%, #1a0033 40%, #00001a 70%, #0d0d0d 100%)',
    preview: 'linear-gradient(135deg, #ff006e 0%, #8338ec 50%, #3a86ff 100%)',
  },
  {
    id: 'minimal-dark',
    name: 'Minimal Dark',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)',
    preview: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
  },
  {
    id: 'dev-setup',
    name: 'Developer Setup',
    gradient: 'radial-gradient(ellipse at 50% 100%, #0d1117 0%, #101820 40%, #0d1117 100%)',
    preview: 'linear-gradient(135deg, #0d1117 0%, #238636 100%)',
  },
  {
    id: 'abstract-neon',
    name: 'Abstract Neon',
    gradient: 'radial-gradient(ellipse at 30% 70%, #03001e 0%, #1b1b2f 30%, #0f0c29 60%, #302b63 100%)',
    preview: 'linear-gradient(135deg, #f72585 0%, #7209b7 50%, #3a0ca3 100%)',
  },
];

export const desktopIcons: DesktopIcon[] = [
  { id: 'projects', label: 'Projects', icon: '📁', type: 'folder', action: 'projects' },
  { id: 'skills', label: 'Skills', icon: '📁', type: 'folder', action: 'skills' },
  { id: 'experience', label: 'Experience', icon: '📁', type: 'folder', action: 'experience' },
  { id: 'certifications', label: 'Certifications', icon: '📁', type: 'folder', action: 'certifications' },
  { id: 'contact', label: 'Contact', icon: '📁', type: 'folder', action: 'contact' },
  { id: 'resume', label: 'Resume.pdf', icon: '📄', type: 'file', action: 'resume' },
  { id: 'leetcode', label: 'LeetCode.url', icon: '🟠', type: 'link', action: 'link', url: 'https://leetcode.com/astronicle' },
  { id: 'github', label: 'GitHub.url', icon: '🐙', type: 'link', action: 'link', url: 'https://github.com/astronicle' },
  { id: 'linkedin', label: 'LinkedIn.url', icon: '🔵', type: 'link', action: 'link', url: 'https://linkedin.com/in/astronicle' },
  { id: 'terminal', label: 'Terminal', icon: '💻', type: 'app', action: 'terminal' },
  { id: 'settings', label: 'Settings', icon: '⚙️', type: 'app', action: 'settings' },
  { id: 'recycle-bin', label: 'Recycle Bin', icon: '🗑️', type: 'app', action: 'recycle-bin' },
];
