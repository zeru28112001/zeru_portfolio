export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const HERO_CONTENT = {
  title: "Junior Web Developer",
  name: "Wai Yan Ko Ko",
  badge: "Open to Opportunities",
  bio: "Self-taught web developer passionate about UI design and problem-solving. I build real-world web applications with NestJS, React, PHP, and modern web technologies.",
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
    id: 9,
    title: "MyTogether Admin & API",
    brand: "NestJS + React",
    description:
      "Contributed across backend APIs and the admin dashboard for a food-ordering platform — shops, orders, coupons, marketing, chat, and more — alongside 2 senior developers.",
    longDescription:
      "Worked with 2 senior developers on MyTogether’s NestJS REST API and React admin panel. Built and extended modules end-to-end: shop/restaurant onboarding, menus, orders (live board, pickup, delivery, status flows), shop coupons (admin CRUD, QR scan, wishlist, order discounts, expiry cron), subscription plans (admin + user pricing API), flash events, collections, news, visa/places, chat, wishlist, and shop feedback. Also delivered admin pages with Zod + TanStack Query, drag-and-drop ordering, Excel shop import, push broadcast, home discount sections, and CI/CD deploy to EC2. Additional work on auth (phone/device login, force logout), real-time orders (WebSocket, multi-device notifications), search/location (geolib), master menu categories, cities/districts/cuisines, image upload (S3), and pagination/security fixes across the API.",
    features: [
      "Shop coupon system — admin & user APIs, scan/redeem, order discount, early-bird rules, expiry cronjob",
      "Subscription plans — plan/feature admin CRUD, reorder, user GET /user/plans for pricing page",
      "Order operations — live order board, pickup/delivery flows, status rules, payment-slip alerts",
      "Shop & menu admin — create/edit shops, menus, categories, tags, approvals, Excel import",
      "Marketing & content — banners, flash events, collections, news, home discount sections, broadcast push",
      "User-facing APIs — chat, wishlist, reviews, visa, places, search, location-based shop discovery",
      "Platform work — auth/session management, WebSocket real-time orders, S3 image upload, CI/CD to EC2",
      "Collaborated with 2 senior developers on architecture, PR reviews, migrations, and module design",
    ],
    tags: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "React",
      "TypeScript",
      "TanStack Query",
      "Zod",
      "WebSocket",
      "Redis",
    ],
    imageUrl: "/projects/mytogether.png",
  },
  {
    id: 1,
    title: "WiFi Management System",
    brand: "Laravel",
    description:
      "Developed a WiFi management system with supporter roles, payment handling, and admin dashboard for managing users and services.",
    longDescription:
      "A complete WiFi service management platform built with Laravel. It supports multiple user roles, subscription payments, and a centralized admin dashboard for monitoring users, plans, and service status.",
    features: [
      "Role-based access for admins and supporters",
      "Payment handling and subscription tracking",
      "User and service management dashboard",
      "Plan assignment and usage monitoring",
    ],
    tags: ["Laravel", "PHP", "MySQL"],
    imageUrl: "/projects/wifi.png",
  },
  {
    id: 2,
    title: "School Management System",
    brand: "Pure PHP",
    description:
      "Built a school management system with features like student records, course management, and admin control panel.",
    longDescription:
      "A school administration system designed to simplify daily academic operations. It centralizes student data, course records, and staff workflows inside one manageable PHP application.",
    features: [
      "Student record and enrollment management",
      "Course and class scheduling",
      "Admin control panel for staff",
      "Searchable academic data storage",
    ],
    tags: ["PHP", "MySQL"],
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
    title: "E-commerce System",
    brand: "Freelance Project",
    description:
      "Built a Full-Stack E-commerce Management system with 2-way Telegram automation, dynamic order tracking, and comprehensive administrative features.",
    longDescription:
      "A full-stack e-commerce platform with Laravel and React, featuring order management, JWT authentication, admin controls, and Telegram bot automation for customer updates.",
    features: [
      "Product and order management",
      "JWT-secured authentication",
      "Telegram bot automation for orders",
      "Admin dashboard with dynamic tracking",
    ],
    tags: ["Laravel", "React", "MySQL", "JWT", "Telegram Bot"],
    imageUrl: "/projects/ecommerce.png",
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
    category: "Development",
    items: [
      { name: "PHP / Laravel", level: 92 },
      { name: "NestJS / Node.js", level: 78 },
      { name: "React / TypeScript", level: 80 },
    ],
  },
  {
    category: "Frontend & UI",
    items: [
      { name: "HTML / CSS", level: 90 },
      { name: "Tailwind / Bootstrap", level: 85 },
      { name: "UI/UX Design", level: 60 },
    ],
  },
  {
    category: "Database & Tools",
    items: [
      { name: "PostgreSQL / MySQL", level: 85 },
      { name: "Prisma / REST APIs", level: 75 },
      { name: "Git / GitHub", level: 75 },
    ],
  },
];

export const TOOLS = [
  "NestJS",
  "React",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "Laravel",
  "Git",
  "GitHub",
  "Figma",
  "Tailwind CSS",
];

// Stats data for the hero section
export const STATS = [
  { value: 4, suffix: "+", label: "Years learning" },
  { value: 9, suffix: "+", label: "Projects built" },
  { value: 3, suffix: "+", label: "Freelance projects" },
];

// Social links
export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/zeru28112001" },
  { label: "Facebook", href: "https://www.facebook.com/zeru.11" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/wai-yan-ko-ko-66a739284/" },
];

export const ABOUT_ME =
  "I am a junior web developer with a strong passion for building functional and user-friendly web applications. I have hands-on experience building backend APIs and admin dashboards with NestJS and React, along with PHP and Laravel projects. Currently pursuing Level 5 Computing and Physics, I enjoy solving real-world problems through code and continuously improving my development skills.";

export const TIMELINE = [
  {
    title: "BSc Physics (4th Year)",
    institution: "Mandalay University",
    date: "2018 - 2026",
    type: "Education",
  },
  {
    title: "Outstanding Student Award",
    institution: "Strategy First International College",
    date: "2024",
    description: "Awarded for academic excellence in computing studies.",
    type: "Award",
  },
  {
    title: "Level 4 Diploma in Computing",
    institution: "NCC Education",
    date: "2024 - 2025",
    type: "Education",
  },
  {
    title: "UI/UX Design for Beginners",
    institution: "Strategy First International College (SFIC)",
    date: "Feb 2025",
    type: "Certification",
  },
  {
    title: "Preparation Program for NCC Level 4 Diploma",
    institution: "Strategy First International College (SFIC)",
    date: "Aug 2025",
    type: "Certification",
  },
  {
    title: "Python Essentials for Beginners",
    institution: "Strategy First International College (SFIC)",
    date: "Oct 2025",
    type: "Certification",
  },
];

export const OFFERS = [
  {
    title: "Web Development",
    description:
      "Building APIs, admin dashboards, and full-stack web applications with NestJS, React, PHP, and Laravel.",
  },
  {
    title: "UI Design",
    description:
      "Designing clean and responsive user interfaces with a focus on usability and simplicity.",
  },
];

export const FAQS = [
  {
    question: "Who are you?",
    answer:
      "I am Wai Yan Ko Ko, a junior web developer who enjoys building practical web applications, backend APIs, and admin dashboards.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I mainly work with NestJS, React, TypeScript, PHP, Laravel, Prisma, and PostgreSQL, along with frontend tools like Tailwind CSS and Bootstrap.",
  },
  {
    question: "Are you available for work?",
    answer:
      "Yes, I am open to internships, junior roles, and freelance opportunities.",
  },
];