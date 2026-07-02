"use client";

import { useState, useEffect } from "react";
import { Navbar, Footer } from "../../components/layout";
import { PROJECTS, NAV_LINKS, getProjectPath } from "../../data";
import SparkleNavbar from "../../components/lightswind/sparkle-navbar";
import {
  Card,
  CardTitle,
  CardDescription,
} from "../../components/lightswind/card";
import { Badge } from "../../components/lightswind/badge";
import ScrollReveal from "../../components/lightswind/scroll-reveal";
import { GridBackground } from "../../components/lightswind/grid-dot-backgrounds";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProjectsPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="dark min-h-screen text-white"
      style={{ background: "#11131B" }}
    >
      <SparkleNavbar 
        items={NAV_LINKS.map(link => link.label)} 
        onSelect={(index) => router.push(NAV_LINKS[index].href)}
        defaultActiveIndex={1}
        color="#173eff" 
      />

      <main className="pt-32 pb-24">
        <section className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <Badge variant="secondary">Portfolio</Badge>
            <h1
              className="text-5xl md:text-6xl font-bold mt-4"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-white/50 mt-6 max-w-2xl text-lg">
              A comprehensive list of my work, ranging from complex full-stack
              applications to experimental frontend experiments and UI/UX
              explorations.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {PROJECTS.map((p, i) => (
              <Link
                key={p.id}
                href={getProjectPath(p.id)}
                className="no-underline group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Card className="lw-card p-6 h-full flex flex-col gap-4">
                  <div className="h-48 rounded-xl overflow-hidden relative border border-white/05">
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{p.brand}</Badge>
                    <svg
                      className="w-4 h-4 text-white/30 group-hover:text-[var(--primarylw)] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 7l-10 10M17 7H7m10 0v10"
                      />
                    </svg>
                  </div>

                  <CardTitle className="text-xl font-bold">{p.title}</CardTitle>
                  <CardDescription className="text-white/50">
                    {p.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/08"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
