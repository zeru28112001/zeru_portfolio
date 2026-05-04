"use client";

import { Button } from "../lightswind/button";
import { NAV_LINKS } from "../../data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export function Navbar({
  scrolled,
  menuOpen,
  setMenuOpen,
}: NavbarProps) {
  const pathname = usePathname();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-blur" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          <span className="gradient-text">Zeru</span>
          <span className="text-white/40">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                pathname === link.href
                  ? "text-[var(--primarylw)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="hidden md:inline-block text-sm">
          <a href="mailto:hello@zeru.dev">Hire Me</a>
        </Button>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-0.5 w-6 bg-white/80 rounded transition-all duration-300"
              style={
                menuOpen
                  ? i === 0
                    ? { transform: "translateY(8px) rotate(45deg)" }
                    : i === 1
                      ? { opacity: 0 }
                      : { transform: "translateY(-8px) rotate(-45deg)" }
                  : {}
              }
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-blur md:hidden px-6 pb-6 pt-2 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-left font-semibold text-base ${
                pathname === link.href ? "text-[var(--primarylw)]" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="text-sm text-center">
            <a href="mailto:hello@zeru.dev">Hire Me</a>
          </Button>
        </div>
      )}
    </header>
  );
}
