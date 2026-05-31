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

const BASE_URL = "https://zeru.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Zeru | Junior Web Developer",
    template: "%s | Zeru Portfolio",
  },
  description:
    "Self-taught junior web developer passionate about UI design and problem-solving. Explore my portfolio, projects, and skills.",
  icons: {
    icon: "/profile.jpg",
    shortcut: "/profile.jpg",
    apple: "/profile.jpg",
  },
  keywords: [
    "Web Developer",
    "Frontend Developer",
    "Junior Web Developer",
    "Zeru",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "UI/UX Design",
    "Node.js",
    "Web Design",
  ],
  authors: [{ name: "Zeru", url: BASE_URL }],
  creator: "Zeru",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zeru | Junior Web Developer",
    description:
      "Self-taught junior web developer passionate about UI design and problem-solving. Check out my latest work.",
    url: BASE_URL,
    siteName: "Zeru Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zeru — Junior Web Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeru | Junior Web Developer",
    description:
      "Self-taught junior web developer passionate about UI design and problem-solving. Check out my latest work.",
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
  name: "Zeru",
  url: BASE_URL,
  image: `${BASE_URL}/profile.jpg`,
  sameAs: ["https://github.com", "https://linkedin.com", "https://x.com"],
  jobTitle: "Junior Web Developer",
  description:
    "Self-taught junior web developer passionate about UI design and problem-solving.",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Design",
    "UI/UX",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zeru Portfolio",
  url: BASE_URL,
  description: "Portfolio website of Zeru — Junior Web Developer.",
  author: { "@type": "Person", name: "Zeru" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
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
