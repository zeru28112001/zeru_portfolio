export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const HERO_CONTENT = {
  title: "Full Stack Developer",
  name: "Wai Yan Ko Ko",
  badge: "Open to Remote Work",
  bio: "Self-taught Full Stack Developer with 2+ years of hands-on experience building web applications with React, Next.js, Node.js (NestJS/Express), and Laravel. Delivering Telegram bot automation and Ubuntu Linux server deployments.",
  heroImage: "/profile.jpg",
  aboutImage: "/image.png",
};

export type Project = {
  id: number;
  title: string;
  brand: string;
  description: string;
  longDescription: string;
  features: string[];
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    id: 12,
    title: "Htoo Delivery Services",
    brand: "TanStack Start + Supabase",
    description:
      "Full-stack logistics management platform featuring automated Telegram alert broadcasting, mobile PWA driver tracking, multi-currency financial reporting, and digital PNG voucher generation.",
    longDescription:
      "Built Htoo Delivery end-to-end as a TanStack Start (React SSR) + Supabase application for multi-regional logistics and driver dispatch management. Features an automated Telegram alert engine with smart noise-filtering for real-time security incident (401/403/429) and server crash monitoring. Includes an installable mobile Driver PWA with direct phone triggers, dynamic rate cards (MMK & THB), a high-res PNG digital voucher generator (`html-to-image`), real-time financial KPI analytics with one-click `.xlsx` Excel exports, and persistent rate-limiting security.",
    features: [
      "Admin operations panel — order dispatching, driver assignments, delivery status tracking, and audit logs",
      "Driver mobile PWA — installable dashboard with phone dialer triggers, delivery tasks, and live status toggles",
      "Automated Telegram alerts — noise-filtered monitoring engine broadcasting security threats and system exceptions",
      "Digital voucher engine — computes fees and COD terms to generate downloadable PNG receipts for messaging apps",
      "Delivery zones & rate cards — dynamic flat-fee and weight-based pricing for local and international MMK & THB rates",
      "Analytics & Excel reporting — live revenue dashboards, driver performance breakdowns, and raw `.xlsx` data exports",
    ],
    tags: [
      "TanStack Start",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Telegram Bot API",
      "TanStack Query",
      "Tailwind CSS",
      "PWA",
      "Zod",
    ],
    imageUrl: "/projects/deli.jpg",
  },
  {
    id: 11,
    title: "BuildSafe Hub",
    brand: "TanStack Start + Supabase",
    description:
      "Full-stack structural-safety SaaS for pre-construction building design — multi-step project intake, live strength scoring, 3D floor plans, AI-assisted analysis, and MMK plan checkout with payment-proof review.",
    longDescription:
      "Built BuildSafe end-to-end as a TanStack Start (React SSR) + Supabase app for safer building design before groundbreaking. Users create projects through a 7-step wizard (land, structure, materials, safety), map sites with Leaflet, edit interactive 3D / floor-plan layouts (Three.js), and get deterministic structural strength scores plus Myanmar-focused geo-hazard checks. Added Free/Pro entitlements, referral AI credits, material cost estimates, bilingual EN/MY UX, and a manual payment-proof flow (bank/mobile methods) reviewed in admin and via Telegram approve/reject. Also shipped an admin ops panel (users, projects, plans, payments, materials, audit logs) with RLS-backed Postgres, private blueprint/payment Storage uploads, and edge functions for AI assistant actions.",
    features: [
      "7-step project wizard — land/site, structural inputs, materials, safety checklist, draft saves to Supabase",
      "Interactive design tools — Leaflet GPS picker, Three.js 3D building preview, floor-plan editor with L-shape rooms",
      "Structural intelligence — live strength scoring, predictive hazard checklist, exportable safety & analysis reports",
      "AI assistant flows — strength, materials, design generation, furniture layout (edge function + persisted analyses)",
      "Subscriptions & referrals — Free/Pro plan gates, MMK pricing, payment-proof upload, Telegram two-way review",
      "Cost & catalog — material quantities × unit prices, bilingual material/category names, BOM/CSV exports",
      "Admin operations — users, projects, plans, payment methods/reviews, referrals, AI logs, audit trail",
      "Platform work — Supabase Auth + device/IP throttle, RLS, private Storage uploads, TanStack Query + Zod forms",
    ],
    tags: [
      "TanStack Start",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Three.js",
      "Leaflet",
      "TanStack Query",
      "Zod",
      "Tailwind CSS",
    ],
    imageUrl: "/projects/buildsafe.png",
  },
  {
    id: 10,
    title: "Stream Studio",
    brand: "Express + Next.js",
    description:
      "Built a full-stack video streaming platform end-to-end — live RTMP/HLS with real-time chat, VOD upload, RAG + vector search, AI tool-calling chat, and an admin panel.",
    longDescription:
      "Designed and shipped Stream Studio as a solo full-stack project: Express.js REST API + Socket.io backend, Next.js App Router frontend, and MongoDB with Prisma. Live streaming uses Nginx-RTMP ingest, stream-key validation via webhooks, HLS playback (hls.js), and ephemeral Socket.io chat with viewer counts and owner studio controls. VOD covers Multer uploads, FFmpeg thumbnails, local @xenova/transformers embeddings, and MongoDB Atlas vector search. AI layer includes RAG (`POST /api/rag/query` — retrieve similar content then answer via OpenRouter or template fallback) and an LLM tool-calling chat (`POST /api/chat`) for semantic search, watchlist add/remove, and watch history. Also implemented an MCP stdio server exposing the same AI tools (search, watchlist, history) for external clients like Cursor. Additional work: JWT auth, follow/live notifications, admin (users, content, streams, settings), plus TanStack Query + Zod on key frontend paths.",
    features: [
      "Live streaming — OBS/Streamlabs RTMP ingest, Nginx-RTMP → HLS, on_publish stream-key validation, owner studio",
      "Real-time chat — Socket.io rooms, viewer count / peak viewers, chat mute, stream-end chat clear",
      "VOD pipeline — Multer local upload, FFmpeg thumbnail extract, Content embeddings",
      "RAG — embed query, Atlas / local vector retrieve, OpenRouter natural-language answer (`/api/rag/query`)",
      "AI chat + tools — OpenRouter tool loop: search_similar_content, add/remove watchlist, get_watch_history",
      "MCP server — stdio tools mirroring the same AI/watchlist actions for Cursor / MCP clients",
      "Social & alerts — follow creators, persisted live-start notifications + realtime bell",
      "Admin panel — ban/unban/delete users, hide/delete content, force-end streams, AI/chat/upload settings",
    ],
    tags: [
      "Express.js",
      "Next.js",
      "Prisma",
      "MongoDB",
      "Socket.io",
      "Nginx-RTMP",
      "HLS",
      "RAG",
      "Vector Search",
      "OpenRouter",
      "MCP",
      "TanStack Query",
      "Zod",
    ],
    imageUrl: "/projects/stream-studio.png",
  },
  {
    id: 9,
    title: "MyTogether Food Delivery System",
    brand: "NestJS + React",
    description:
      "Built a food delivery backend system with NestJS REST APIs and React frontend, featuring Socket.IO real-time chat, order tracking, and indexed search.",
    longDescription:
      "Full Stack Developer (Project-based, Remote, 2026) for My Together. Built a comprehensive food delivery backend system with NestJS REST APIs and a React frontend. Implemented authentication, restaurant and menu management, order processing, and real-time order status updates. Developed a real-time chat feature using Socket.IO for customer-driver communication and engineered fast restaurant and menu search using database indexing. Collaborated closely with 2 senior developers on architecture, PR reviews, migrations, and CI/CD deployment to AWS EC2.",
    features: [
      "NestJS REST APIs & React admin dashboard — full-stack food delivery operations",
      "Real-time customer-driver chat — built with Socket.IO for live in-transit communications",
      "Fast restaurant & menu search — accelerated query performance via database indexing",
      "Order processing pipeline — live order board, pickup/delivery flows, and real-time status updates",
      "Shop coupons & promotions — scan/redeem vouchers, early-bird discounts, and expiry cronjobs",
      "Subscriptions & marketing — tier plans, banners, flash events, collections, and broadcast push",
      "Security & infrastructure — session management, phone/device auth, S3 upload, and CI/CD to EC2",
    ],
    tags: [
      "NestJS",
      "React",
      "TypeScript",
      "Socket.IO",
      "PostgreSQL",
      "Prisma",
      "TanStack Query",
      "Zod",
      "Redis",
      "AWS EC2",
    ],
    imageUrl: "/projects/mytogether.png",
  },
  {
    id: 1,
    title: "Shwe Monywa Net",
    brand: "Laravel",
    description:
      "Developed a WiFi management system with supporter roles, payment handling, and admin dashboard for managing users and services.",
    longDescription:
      "Developed Shwe Monywa Net (2024–2025) as a part-time full-stack developer. A complete WiFi service management platform built with Laravel featuring role-based access for supporters and admins, payment tracking, user and plan management, and centralized admin monitoring.",
    features: [
      "Role-based access for admins and supporter staff",
      "Payment handling and subscription lifecycle tracking",
      "User, voucher, and bandwidth plan management dashboard",
      "Centralized service monitoring and administrative control",
    ],
    tags: ["Laravel", "PHP", "MySQL", "Admin Panel"],
    imageUrl: "/projects/wifi.png",
  },
  {
    id: 2,
    title: "StudySphere",
    brand: "Pure PHP",
    description:
      "Built StudySphere, a school management system with features like student records, course management, and admin control panel.",
    longDescription:
      "StudySphere is an academic administration system built with PHP and MySQL to streamline school operations. It centralizes student enrollment, academic courses, records, and staff workflows inside an organized and responsive portal.",
    features: [
      "Student record and academic enrollment management",
      "Course and class scheduling",
      "Admin control panel for staff and teachers",
      "Searchable academic database and record storage",
    ],
    tags: ["PHP", "MySQL", "JavaScript"],
    imageUrl: "/projects/school.png",
  },
  {
    id: 3,
    title: "Food Sharing Website",
    brand: "Pure PHP",
    description:
      "Created a web platform for users to share food posts and interact through comments and basic social features.",
    longDescription:
      "A community-focused food sharing platform where users can publish posts, browse shared meals, and engage through comments and lightweight social interactions.",
    features: [
      "User food post creation and browsing",
      "Commenting and basic social interaction",
      "Image-friendly post layout",
      "Simple content management workflow",
    ],
    tags: ["PHP", "MySQL", "JavaScript"],
    imageUrl: "/projects/food.png",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    brand: "C#",
    description:
      "Desktop application to track workouts, calories, and activity logs with simple UI and data storage.",
    longDescription:
      "A desktop fitness tracking app that helps users log workouts, monitor calories, and review activity history through a clean and straightforward interface.",
    features: [
      "Workout and activity logging",
      "Calorie and progress tracking",
      "Local data storage for user records",
      "Simple desktop-friendly UI",
    ],
    tags: ["C#", ".NET"],
    imageUrl: "/projects/fitness.png",
  },
  {
    id: 5,
    title: "Face API Login System",
    brand: "Face API.js",
    description:
      "Implemented a face recognition login system using Face API with image upload and facial matching.",
    longDescription:
      "An experimental authentication project that uses Face API.js to recognize users from uploaded images and match faces for login verification.",
    features: [
      "Image upload and face detection",
      "Facial matching for authentication",
      "Client-side Face API integration",
      "Interactive login proof of concept",
    ],
    tags: ["JavaScript", "Face API"],
    imageUrl: "/projects/face.png",
  },
  {
    id: 6,
    title: "Workshop Management System",
    brand: "PHP",
    description:
      "Developed a system to manage workshop schedules, participants, and records with admin functionality.",
    longDescription:
      "A workshop operations system for organizing schedules, tracking participants, and maintaining records with admin tools for day-to-day management.",
    features: [
      "Workshop schedule management",
      "Participant registration tracking",
      "Admin records and reporting",
      "Organized backend data structure",
    ],
    tags: ["PHP", "MySQL"],
    imageUrl: "/projects/workshop.svg",
  },
  {
    id: 7,
    title: "Logistics Management System",
    brand: "Freelance Project",
    description:
      "Built an entry-level logistics system with inventory tracking, shipment records, and reporting features.",
    longDescription:
      "A freelance logistics management solution focused on inventory visibility, shipment tracking, and operational reporting for small business workflows.",
    features: [
      "Inventory tracking and stock updates",
      "Shipment record management",
      "Reporting for logistics operations",
      "Admin-friendly business dashboard",
    ],
    tags: ["PHP", "MySQL"],
    imageUrl: "/projects/logistics.png",
  },
  {
    id: 8,
    title: "Now Fashion — E-Commerce System",
    brand: "Freelance Project",
    description:
      "Full-stack e-commerce management system with 2-way Telegram automation, dynamic order tracking, and comprehensive administrative features.",
    longDescription:
      "Built Now Fashion end-to-end as a freelance full-stack developer (2026). The platform features 2-way Telegram automation for instant order notifications and customer communication, dynamic order tracking, JWT-secured authentication, product management, and full admin operations.",
    features: [
      "Product catalog and multi-category inventory management",
      "JWT-secured authentication and role controls",
      "2-way Telegram bot automation for orders and customer alerts",
      "Dynamic order tracking and live administrative dashboard",
    ],
    tags: ["Laravel", "React", "MySQL", "JWT", "Telegram Bot API"],
    imageUrl: "/projects/ecommerce.png",
    liveUrl: "https://nowfashioncollection.com",
  },
];

export function getProjectById(id: number) {
  return PROJECTS.find((project) => project.id === id);
}

export function getProjectPath(id: number) {
  return `/projects/${id}`;
}

export const SKILLS = [
  {
    category: "Backend & Systems",
    items: [
      { name: "Node.js / NestJS / Express", level: 88 },
      { name: "PHP / Laravel / REST APIs", level: 90 },
      { name: "Ubuntu Linux / Deployment", level: 82 },
    ],
  },
  {
    category: "Frontend & Mobile",
    items: [
      { name: "React / Next.js / TypeScript", level: 90 },
      { name: "Tailwind CSS / Bootstrap", level: 88 },
      { name: "PWA / Flutter (basic)", level: 75 },
    ],
  },
  {
    category: "Databases & Automation",
    items: [
      { name: "PostgreSQL / MySQL", level: 88 },
      { name: "Supabase / MongoDB / Prisma", level: 84 },
      { name: "Telegram Bot / Socket.IO", level: 86 },
    ],
  },
];

export const TOOLS = [
  "NestJS",
  "Next.js",
  "React",
  "TypeScript",
  "Express.js",
  "Laravel",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Socket.IO",
  "Telegram Bot",
  "Ubuntu Linux",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

// Stats data for the hero section
export const STATS = [
  { value: 3, suffix: "+", label: "Years experience" },
  { value: 12, suffix: "", label: "Projects built" },
  { value: 4, suffix: "+", label: "Production & Freelance" },
];

// Social links
export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/zeru28112001" },
  { label: "Facebook", href: "https://www.facebook.com/zeru.11" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/wai-yan-ko-ko-66a739284/" },
];

export const ABOUT_ME =
  "I am a self-taught Full Stack Developer with 2+ years of hands-on experience building web applications with React, Next.js, Node.js (NestJS/Express), and Laravel. I specialize in delivering real-world e-commerce, delivery, logistics, and management platforms with REST APIs, authentication, admin panels, and 2-way Telegram bot automation. I have practical experience integrating LLMs, engineering real-time customer-driver chat with Socket.IO, and deploying and maintaining applications on Ubuntu Linux servers. Completed Level 4 & 5 Diploma in Computing (BTEC / Pearson, NCC) in July 2026, and currently pursuing BSc Physics at Mandalar University, I am committed to clean architecture, high performance, and continuous learning.";

export const TIMELINE = [
  {
    title: "Level 4 & 5 Diploma in Computing",
    institution: "BTEC / Pearson, NCC Education",
    date: "2024 - July 2026",
    type: "Education",
    description:
      "Graduated with Level 4 & 5 Diploma in Computing (Completed July 2026), covering software engineering, database design, and full-stack development.",
  },
  {
    title: "BSc Physics",
    institution: "Mandalar University",
    date: "2018 - 2026",
    type: "Education",
    description:
      "Core physics degree developing analytical problem-solving, mathematical foundations, and critical thinking.",
  },
  {
    title: "Outstanding Student Award",
    institution: "Strategy First International College",
    date: "2024",
    description: "Awarded for academic excellence in computing studies.",
    type: "Award",
  },
  {
    title: "UI/UX & Graphic Design",
    institution: "Strategy First / Independent",
    date: "2025",
    type: "Certification",
    description:
      "Visual branding, interface ergonomics, wireframing, and graphic design fundamentals.",
  },
  {
    title: "Python Essentials for Beginners",
    institution: "Strategy First International College (SFIC)",
    date: "Oct 2025",
    type: "Certification",
  },
  {
    title: "Self-Taught Web Development Journey",
    institution: "Independent Learning",
    date: "2020 - Present",
    type: "Milestone",
    description:
      "Building real-world web applications, production client systems, and mastering modern full-stack architectures.",
  },
];

export const OFFERS = [
  {
    title: "Full Stack Web Development",
    description:
      "Building high-performance web applications, scalable REST APIs, and intuitive admin dashboards with React, Next.js, NestJS, and Laravel.",
  },
  {
    title: "Bot Automation & Real-time Systems",
    description:
      "Developing 2-way Telegram bot workflows, Socket.IO real-time chat, and mobile PWAs for seamless operational monitoring and communication.",
  },
  {
    title: "Linux Deployment & AI Integration",
    description:
      "Deploying, securing, and maintaining production applications on Ubuntu Linux servers, paired with intelligent LLM integration and database indexing.",
  },
];

export const FAQS = [
  {
    question: "Who are you?",
    answer:
      "I am Wai Yan Ko Ko (Zeru), a self-taught Full Stack Developer with 2+ years of hands-on experience building production web applications, backend APIs, and automation systems.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "My core tech stack includes React, Next.js, TypeScript, Node.js (NestJS & Express), PHP, Laravel, PostgreSQL, MySQL, Supabase, MongoDB, and Prisma, deployed on Ubuntu Linux servers.",
  },
  {
    question: "Do you have experience with bots and real-time features?",
    answer:
      "Yes! I have built 2-way Telegram bot automation for orders and alerts, real-time messaging with Socket.IO, digital receipt/voucher generators, and LLM integrations.",
  },
  {
    question: "Are you open to remote or freelance opportunities?",
    answer:
      "Yes, I am actively open to remote full-time developer positions, project-based contracts, and freelance work.",
  },
];