import { SOCIAL_LINKS } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-[#11131B] border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-white font-bold text-lg tracking-wider mb-2" style={{ fontFamily: "Syne, sans-serif" }}>ZERU</p>
          <p className="text-white/40 text-sm italic">Building digital things that matter.</p>
        </div>

        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#173eff] transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-white/30 text-xs font-mono">
          © {new Date().getFullYear()} • HANDCRAFTED WITH PASSION
        </div>
      </div>
    </footer>
  );
}
