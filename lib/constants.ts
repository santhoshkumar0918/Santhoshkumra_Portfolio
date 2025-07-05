// Site Configuration
export const SITE_CONFIG = {
  name: "Santhosh Kumar",
  title: "Santhosh Kumar | Full-Stack Web3 Developer",
  description:
    "Premium Web3 development services - Building tomorrow's digital infrastructure with cutting-edge blockchain technology",
  url: "https://santhoshkumarkbsv09",
  ogImage: "/og-image.jpg",
  keywords: [
    "Web3 Developer",
    "Blockchain",
    "Full Stack",
    "React",
    "Next.js",
    "Solidity",
    "DeFi",
    "Smart Contracts",
  ],
  author: "Santhosh Kumar K",
  creator: "Santhosh Kumar K",
  twitterHandle: "@Santhosh0918_",
} as const;

// Personal Information
export const PERSONAL_INFO = {
  name: "Santhosh Kumar K",
  title: "Full-Stack Web3 Developer",
  tagline: "Crafting the Future of Web3 - One Line of Code at a Time",
  email: "santhoshkumarkbsv09@gmail.com",
  phone: "+91 7358120918",
  location: "Chennai, India",
  availability: "Available for projects",
  resume: "/resume.pdf",
} as const;

// Social Links
export const SOCIAL_LINKS = {
  github: "https://github.com/santhoshkumar0918",
  linkedin: "https://www.linkedin.com/in/santhosh-kumar-k-a727ba2a7",
  twitter: "https://x.com/Santhosh0918_",
  email: "mailto:santhoshkumarkbsv09@gmail.com",
  calendly: "https://calendly.com/santhoshkumar",
} as const;

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
] as const;

// Skills Categories
export const SKILLS_CATEGORIES = [
  {
    id: "languages",
    name: "Languages",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "TypeScript", level: 95, icon: "🔷" },
      { name: "JavaScript", level: 98, icon: "🟨" },
      { name: "Rust", level: 85, icon: "🦀" },
      { name: "Solidity", level: 90, icon: "💎" },
      { name: "Python", level: 80, icon: "🐍" },
    ],
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 93, icon: "▲" },
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Express.js", level: 88, icon: "🚀" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "Hardhat", level: 85, icon: "⚡" },
      { name: "Zerepy", level: 82, icon: "🔥" },
      { name: "Elizaos", level: 80, icon: "🤖" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Git", level: 95, icon: "📝" },
      { name: "Docker", level: 85, icon: "🐳" },
      { name: "VS Code", level: 98, icon: "💻" },
      { name: "Figma", level: 80, icon: "🎨" },
      { name: "Postman", level: 90, icon: "📮" },
      { name: "Notion", level: 85, icon: "📚" },
      { name: "Jupyter", level: 82, icon: "📊" },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "PostgreSQL", level: 90, icon: "🐘" },
      { name: "MongoDB", level: 88, icon: "🍃" },
      { name: "Redis", level: 80, icon: "🔴" },
      { name: "IPFS", level: 85, icon: "📡" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "AWS", level: 85, icon: "☁️" },
      { name: "Firebase", level: 90, icon: "🔥" },
      { name: "Supabase", level: 88, icon: "⚡" },
      { name: "Appwrite", level: 82, icon: "🚀" },
      { name: "Vercel", level: 95, icon: "▲" },
    ],
  },
  {
    id: "blockchain",
    name: "Blockchain & Web3",
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "Ethereum", level: 90, icon: "💎" },
      { name: "Polygon", level: 88, icon: "🔮" },
      { name: "Smart Contracts", level: 92, icon: "📄" },
      { name: "DeFi", level: 85, icon: "🏦" },
      { name: "NFTs", level: 87, icon: "🖼️" },
    ],
  },
] as const;

// Projects Data
export const PROJECTS = [
  {
    id: 1,
    title: "Meringoo",
    description:
      "A community-driven platform connecting users and brands through digital collectibles and verified identity systems",
    longDescription:
      "Revolutionary Web3 platform that bridges the gap between traditional commerce and decentralized identity. Built with cutting-edge blockchain technology for seamless user experience.",
    image: "/projects/meringoo.jpg",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Web3"],
    githubUrl: "https://github.com/santhoshkumar0918/meringoo",
    liveUrl: "https://meringoo.com",
    category: "Web3 Platform",
    status: "Live",
    featured: true,
  },
  {
    id: 2,
    title: "SupplyChain",
    description:
      "Decentralized supply chain platform improving transparency, traceability, and accountability in logistics",
    longDescription:
      "Enterprise-grade blockchain solution transforming global supply chain management with immutable tracking and smart contract automation.",
    image: "/projects/supplychain.jpg",
    tags: ["Solidity", "Hardhat", "React", "IPFS", "Polygon"],
    githubUrl: "https://github.com/santhoshkumar0918/supplychain",
    liveUrl: "https://supplychain-demo.vercel.app",
    category: "Blockchain",
    status: "Live",
    featured: true,
  },
  {
    id: 3,
    title: "Nammakirana",
    description:
      "Hyperlocal digital platform for kirana store owners, enabling smart inventory management and commerce",
    longDescription:
      "Empowering local businesses with modern technology. AI-powered inventory management and community-driven commerce platform.",
    image: "/projects/nammakirana.jpg",
    tags: ["React Native", "Firebase", "Node.js", "AI/ML", "MongoDB"],
    githubUrl: "https://github.com/santhoshkumar0918/nammakirana",
    liveUrl: "https://nammakirana.app",
    category: "Mobile App",
    status: "Beta",
    featured: true,
  },
  {
    id: 4,
    title: "Learnovix",
    description:
      "Decentralized education platform enabling users to learn, connect, and earn credentials on blockchain",
    longDescription:
      "Next-generation learning platform combining education with blockchain technology. Verifiable credentials and peer-to-peer learning ecosystem.",
    image: "/projects/learnovix.jpg",
    tags: ["React", "Solidity", "IPFS", "Web3", "Smart Contracts"],
    githubUrl: "https://github.com/santhoshkumar0918/learnovix",
    liveUrl: "https://learnovix.edu",
    category: "EdTech",
    status: "Development",
    featured: true,
  },
  {
    id: 5,
    title: "DeCap",
    description:
      "Decentralized Carbon Emission Platform built on Polygon for industrial compliance tracking",
    longDescription:
      "Contributing to India's Net Zero 2030 initiative with blockchain-based carbon tracking. Real-time emission monitoring and compliance reporting.",
    image: "/projects/decap.jpg",
    tags: ["Polygon", "Solidity", "React", "Charts.js", "Web3"],
    githubUrl: "https://github.com/santhoshkumar0918/decap",
    liveUrl: "https://decap.climate",
    category: "Climate Tech",
    status: "Live",
    featured: true,
  },
] as const;

// Contact Information
export const CONTACT_INFO = [
  {
    label: "Email",
    value: "santhoshkumarkbsv09@gmail.com",
    href: "mailto:santhoshkumarkbsv09v@gmail.com",
    icon: "Mail",
    color: "text-blue-400",
  },
  {
    label: "Phone",
    value: "+91 7358120918",
    href: "tel:+917358120918",
    icon: "Phone",
    color: "text-green-400",
  },
  {
    label: "Location",
    value: "Chennai, India",
    href: "https://maps.google.com/?q=Chennai,India",
    icon: "MapPin",
    color: "text-purple-400",
  },
] as const;

// Services
export const SERVICES = [
  "Web3 Development",
  "Smart Contracts",
  "Full-Stack Development",
  "UI/UX Design",
  "Blockchain Consulting",
  "DeFi Solutions",
  "NFT Platforms",
  "Mobile App Development",
] as const;

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Theme Colors
export const THEME_COLORS = {
  primary: {
    blue: "#3B82F6",
    purple: "#8B5CF6",
    green: "#10B981",
  },
  gradient: {
    primary: "from-blue-600 to-purple-600",
    secondary: "from-purple-600 to-pink-600",
    accent: "from-green-600 to-blue-600",
  },
} as const;
