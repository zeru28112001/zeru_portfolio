"use client";

import { useState, useEffect } from "react";
import { Navbar, Footer } from "../../components/layout";
import { Button } from "../../components/lightswind/button";
import { Badge } from "../../components/lightswind/badge";
import { GridBackground } from "../../components/lightswind/grid-dot-backgrounds";
import ParticlesBackground from "../../components/lightswind/particles-background";
import { SOCIAL_LINKS, NAV_LINKS } from "../../data";
import SparkleNavbar from "../../components/lightswind/sparkle-navbar";
import { useRouter } from "next/navigation";

export default function ContactPage() {
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
        items={NAV_LINKS.map((link) => link.label)}
        onSelect={(index) => router.push(NAV_LINKS[index].href)}
        defaultActiveIndex={2}
        color="#173eff"
      />

      <main className="pt-32 pb-24 relative overflow-hidden">
        <GridBackground
          gridSize={40}
          darkGridColor="rgba(255,255,255,0.02)"
          className="absolute inset-0 h-full"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Badge variant="secondary">Contact</Badge>
          <h1
            className="text-5xl md:text-7xl font-bold mt-6"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Let&apos;s build something <br />
            <span className="gradient-text">extraordinary</span>
          </h1>
          <p className="text-white/50 mt-8 text-xl leading-relaxed">
            I&apos;m currently open to new opportunities and interesting
            projects. Whether you have a specific idea or just want to say hi,
            I&apos;d love to hear from you.
          </p>

          <div className="mt-16 p-1 bg-gradient-to-br from-[#173eff]/20 to-transparent rounded-3xl inline-block">
            <div className="bg-[#181b27] rounded-[calc(1.5rem-4px)] p-12 md:p-20 text-center relative overflow-hidden">
              <ParticlesBackground height="100%" countDesktop={30} />
              <div className="relative z-10">
                <p className="text-white/40 font-semibold uppercase tracking-widest text-sm mb-6">
                  Direct Email
                </p>
                <a
                  href="mailto:waiyan.koko.2811@gmail.com"
                  className="text-3xl md:text-5xl font-bold hover:text-[var(--primarylw)] transition-colors break-all"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Let’s Work Together!
                </a>

                <div className="mt-12 flex flex-wrap justify-center gap-8">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-bold hover:text-[var(--primarylw)] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
