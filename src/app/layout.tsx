import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./portfolio.css";
import ParticleOrbitEffect from "../components/lightswind/particle-orbit-effect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://waiyankoko.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Wai Yan Ko Ko | Full Stack Developer",
    template: "%s | Wai Yan Ko Ko Portfolio",
  },
  description:
    "Self-taught full stack developer passionate about UI design and problem-solving. Building APIs and web apps with NestJS, React, and modern tools.",
  icons: {
    icon: "/profile.jpg",
    shortcut: "/profile.jpg",
    apple: "/profile.jpg",
  },
  keywords: [
    "Web Developer",
    "Full Stack Developer",
    "NestJS",
    "React",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Laravel",
    "PHP",
    "Node.js",
    "TailwindCSS",
    "UI/UX Design",
    "Wai Yan Ko Ko",
    "Zeru",
    "Portfolio",
  ],
  authors: [{ name: "Wai Yan Ko Ko", url: BASE_URL }],
  creator: "Wai Yan Ko Ko",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wai Yan Ko Ko | Full Stack Developer",
    description:
      "Self-taught full stack developer building APIs and web apps with NestJS, React, and modern tools.",
    url: BASE_URL,
    siteName: "Wai Yan Ko Ko Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wai Yan Ko Ko — Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wai Yan Ko Ko | Full Stack Developer",
    description:
      "Self-taught full stack developer building APIs and web apps with NestJS, React, and modern tools.",
    images: ["/og-image.png"],
    creator: "@zeru",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wai Yan Ko Ko",
  url: BASE_URL,
  image: `${BASE_URL}/profile.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/wai-yan-ko-ko-66a739284/",
    "https://github.com/zeru28112001",
    "https://www.facebook.com/zeru.11",
  ],
  jobTitle: "Full Stack Developer",
  description:
    "Self-taught full stack developer building APIs and web apps with NestJS, React, and modern tools.",
  knowsAbout: [
    "NestJS",
    "React",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Node.js",
    "PHP",
    "Laravel",
    "Web Design",
    "UI/UX",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Wai Yan Ko Ko Portfolio",
  url: BASE_URL,
  description: "Portfolio website of Wai Yan Ko Ko — Full Stack Developer.",
  author: { "@type": "Person", name: "Wai Yan Ko Ko" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#11131B" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col dark text-white"
        style={{ backgroundColor: "#11131B" }}
        suppressHydrationWarning
      >
        <ParticleOrbitEffect
          particleCount={10}
          radius={25}
          particleSpeed={0.06}
          particleSize={1.5}
          followMouse={true}
          autoColors={true}
          colorRange={[200, 260]}
        />
        {children}
      </body>
    </html>
  );
}
