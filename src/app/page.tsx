"use client";

import { Badge } from "../components/lightswind/badge";
import { CountUp } from "../components/lightswind/count-up";
import { Footer } from "../components/layout";
import SparkleNavbar from "../components/lightswind/sparkle-navbar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../components/lightswind/collapsible";
import {
  PROJECTS,
  SKILLS,
  TOOLS,
  STATS,
  HERO_CONTENT,
  NAV_LINKS,
  ABOUT_ME,
  TIMELINE,
  OFFERS,
  FAQS,
  getProjectPath,
} from "../data";
import { GridBackground } from "../components/lightswind/grid-dot-backgrounds";
import { motion } from "framer-motion";
import GlowingCards, {
  GlowingCard,
} from "../components/lightswind/glowing-cards";
import ParticlesBackground from "../components/lightswind/particles-background";
import { ThreeDImageCarousel } from "../components/lightswind/3d-image-carousel";
import { BentoGrid } from "../components/lightswind/bento-grid";
import TextScrollMarquee from "../components/lightswind/text-scroll-marquee";
import { ScrollTimeline } from "../components/lightswind/scroll-timeline";
import { ShineButton } from "../components/lightswind/shine-button";
import FallBeamBackground from "../components/lightswind/fall-beam-background";
import { SparkleParticles } from "../components/lightswind/sparkle-particles";
import InteractiveGradient from "../components/lightswind/interactive-gradient-card";
import { MagneticButton } from "../components/lightswind/magnetic-button";
import { BorderBeam } from "../components/lightswind/border-beam";
import { Meteors } from "../components/lightswind/meteors";
import { AuroraTextEffect } from "../components/lightswind/aurora-text-effect";
import { TrialButton } from "../components/lightswind/trial-button";
import {
  Code,
  Server,
  Database,
  Layers,
  Zap,
  Container,
  Mail,
  Plus,
} from "lucide-react";

import { useRouter } from "next/navigation";

const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    viewport={{ once: true, margin: "-100px" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function HomePage() {
  const router = useRouter();

  const SKILL_ICONS = [Code, Layers, Server, Zap, Database, Container];

  return (
    <div
      className="dark min-h-screen text-white font-sans selection:bg-[#173eff]/40"
      style={{ background: "#11131B" }}
    >
      {/* ━━━ NAVBAR ━━━ */}
      <SparkleNavbar
        items={NAV_LINKS.map((link) => link.label)}
        onSelect={(index) => router.push(NAV_LINKS[index].href)}
        color="#173eff"
      />

      {/* ━━━ HERO ━━━ */}
      <section
        id="about"
        className="relative w-full min-h-screen flex items-center overflow-hidden"
      >
        <FallBeamBackground beamColorClass="blue-400" className="opacity-20" />
        <GridBackground
          gridSize={30}
          darkGridColor="rgba(255,255,255,0.03)"
          className="absolute inset-0 h-full"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="fade-up delay-1" variant="secondary">
              <span className="w-2.5 h-2.5 bg-green-400 mr-2 rounded-full animate-pulse" />
              {HERO_CONTENT.badge}
            </Badge>
            <h1 className="text-5xl mx-auto text-center md:text-left md:text-6xl lg:text-7xl font-extrabold leading-tight mt-5 fade-up delay-2">
              <span className="block">{HERO_CONTENT.title}</span>
              <span className="block mt-2 hero-name-text">{HERO_CONTENT.name}</span>
            </h1>
            <p className="mt-6 mx-auto md:mx-0 text-white/55 text-lg leading-relaxed fade-up delay-3 max-w-md text-justify">
              {HERO_CONTENT.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 fade-up delay-4 justify-center md:justify-start">
              <MagneticButton
                onClick={() => router.push("/projects")}
                variant="primary"
                className="bg-[#173eff] hover:bg-[#3758f9]"
              >
                View Projects
              </MagneticButton>
              <MagneticButton
                onClick={() => window.open("/z3ru180.pdf", "_blank")}
                variant="outline"
                className="border-white/10 hover:bg-white/5"
              >
                Download CV
              </MagneticButton>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex gap-10 fade-up delay-4 justify-center md:justify-start">
              {STATS.map(({ value, suffix, label }) => (
                <div key={label}>
                  <div
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    <CountUp
                      value={value}
                      suffix={suffix}
                      duration={2}
                      className="inline"
                    />
                  </div>
                  <p className="text-sm text-white/40 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar / visual */}
          <div className="flex justify-center md:justify-end fade-up delay-2">
            <div className="relative">
              <div
                className="w-80 h-80 md:w-128 md:h-128 rounded-3xl overflow-hidden"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 0 60px rgba(23,62,255,0.15)",
                }}
              >
                <img
                  src={HERO_CONTENT.heroImage}
                  alt="Profile photo"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    // Fallback if image not found
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement!;
                    parent.style.background =
                      "linear-gradient(135deg, rgba(23,62,255,0.1), rgba(55,88,249,0.2))";
                    parent.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-8xl select-none">👨‍💻</span></div>`;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ FEATURED PROJECTS ━━━ */}
      <section className="relative py-24 bg-[#13161f]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="mb-12 text-center">
            <Badge variant="secondary" className="mx-auto block w-fit">
              Portfolio
            </Badge>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4 text-center"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Selected <span className="gradient-text">Work</span>
            </h2>
          </FadeUp>
          <div className="w-full h-[600px] mt-12 overflow-x-hidden ">
            <ThreeDImageCarousel
              slides={PROJECTS.map((p) => ({
                id: p.id,
                src: p.imageUrl,
                href: getProjectPath(p.id),
                title: p.title,
                description: p.description,
                tags: p.tags,
              }))}
              itemCount={3}
              className="h-full w-full"
              autoplay={true}
              delay={4}
            />
          </div>
        </div>
      </section>

      {/* ━━━ SKILLS ━━━ */}
      <section className="relative py-24 bg-[#11131B] overflow-hidden">
        {/* Sparkle particle background */}
        <SparkleParticles
          className="absolute inset-0 w-full h-full"
          particleColor="#173eff"
          backgroundColor="transparent"
          baseDensity={120}
          maxParticleSize={2}
          maxOpacity={0.5}
          maxSpeed={0.4}
          opacityAnimationSpeed={1.5}
          enableHoverGrab={false}
          clickEffect={false}
          zIndexLevel={0}
        />
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="mb-12 text-center">
            <Badge variant="secondary" className="mx-auto block w-fit">
              Expertise
            </Badge>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4 text-center"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              My <span className="gradient-text">Skills</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {SKILLS.map((category, idx) => (
                <div key={category.category} className="flex flex-col gap-6">
                  <h3 className="text-xl font-bold text-white/90 border-l-4 border-[#173eff] pl-4 mb-2">
                    {category.category}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {category.items.map((skill, i) => {
                      const Icon = SKILL_ICONS[(idx + i) % SKILL_ICONS.length];
                      return (
                        <InteractiveGradient
                          key={skill.name}
                          color="#173eff"
                          glowColor="rgba(23,62,255,0.2)"
                          backgroundColor="#0d0f19"
                          borderRadius="1rem"
                          width="100%"
                          followMouse={true}
                          hoverOnly={true}
                          intensity={0}
                          className="p-5 text-left items-start! border-transparent"
                        >
                          <div className="flex flex-col gap-4 w-[300px]">
                            <div className="flex items-center gap-3">
                              <div className="p-2.5 bg-[#173eff]/15 rounded-xl text-[#173eff]">
                                <Icon size={20} />
                              </div>
                              <span className="font-bold text-white text-lg">
                                {skill.name}
                              </span>
                            </div>
                            <div className="w-full">
                              <div className="flex justify-between text-xs text-white/40 mb-1.5">
                                <span>Proficiency</span>
                                <span className="text-[#173eff] font-semibold">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full rounded-full"
                                  style={{
                                    background:
                                      "linear-gradient(90deg, #173eff, #3758f9)",
                                  }}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  transition={{
                                    duration: 1.2,
                                    delay: i * 0.1,
                                    ease: "easeOut",
                                  }}
                                  viewport={{ once: true }}
                                />
                              </div>
                            </div>
                          </div>
                        </InteractiveGradient>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ━━━ TOOLS MARQUEE ━━━ */}
      <section className="relative py-20 bg-[#13161f] overflow-hidden border-y border-white/5">
        <TextScrollMarquee
          baseVelocity={2}
          className="text-[#173eff] font-extrabold uppercase tracking-widest text-4xl md:text-6xl mx-4 opacity-80"
        >
          {TOOLS.join(" • ") + " • "}
        </TextScrollMarquee>
        <div className="mt-8">
          <TextScrollMarquee
            baseVelocity={-1.5}
            className="text-white font-extrabold uppercase tracking-widest text-4xl md:text-6xl mx-4 opacity-20"
          >
            {TOOLS.slice().reverse().join(" • ") + " • "}
          </TextScrollMarquee>
        </div>
      </section>

      {/* ━━━ ABOUT ME ━━━ */}
      <section className="relative py-24 bg-[#11131B]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="mb-12 flex justify-center md:justify-start">
            <Badge variant="secondary" className="mb-6 mx-auto">
              Who I Am
            </Badge>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* FIRST COLUMN: PHOTO */}
            <div className="flex justify-center md:justify-end">
              <FadeUp
                delay={0.1}
                className="relative w-64 h-64 md:w-80 md:h-[400px] rounded-3xl overflow-hidden group border border-white/10 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#173eff]/40 to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                <img
                  src={HERO_CONTENT.aboutImage}
                  alt="About me photo"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </FadeUp>
            </div>

            {/* SECOND COLUMN: DESCRIPTION */}
            <FadeUp
              delay={0.2}
              className="text-center flex flex-col items-center md:items-start md:text-left justify-center"
            >
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium text-justify">
                {ABOUT_ME}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ━━━ OFFERS ━━━ */}
      <section className="relative py-24 bg-[#13161f]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="mb-16 text-center">
            <h3
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              What I <span className="gradient-text">Offer</span>
            </h3>
          </FadeUp>
          <GlowingCards gap="2rem" glowOpacity={1.5} glowRadius={35}>
            {OFFERS.map((offer, i) => (
              <GlowingCard
                key={i}
                glowColor="#173eff"
                className="bg-[#11131b] border-white/5 shadow-xl hover:shadow-[0_0_30px_rgba(23,62,255,0.2)]"
              >
                <div className="p-4 flex flex-col gap-4 h-full">
                  <div className="p-4 bg-[#173eff]/10 rounded-2xl text-[#173eff] w-fit shadow-[0_0_20px_rgba(23,62,255,0.15)]">
                    {
                      [<Code key="c" />, <Layers key="l" />, <Zap key="z" />][
                        i % 3
                      ]
                    }
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">
                      {offer.title}
                    </h4>
                    <p className="text-white/60 text-lg leading-relaxed">
                      {offer.description}
                    </p>
                  </div>
                </div>
              </GlowingCard>
            ))}
          </GlowingCards>
        </div>
      </section>

      {/* ━━━ JOURNEY (TIMELINE) ━━━ */}
      <section className="relative py-24 bg-black border-t border-white/5 overflow-hidden">
        <FallBeamBackground beamColorClass="blue-400" className="opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeUp>
            <ScrollTimeline
              title="My Journey"
              subtitle="Education, Certifications & Awards"
              darkMode={true}
              cardVariant="outlined"
              lineColor="bg-[#173eff]/30"
              activeColor="bg-[#173eff]"
              progressIndicator={true}
              events={TIMELINE.map((item) => ({
                year: item.date,
                title: item.title,
                subtitle: `${item.type} • ${item.institution}`,
                description: item.description || "",
              }))}
            />
          </FadeUp>
        </div>
      </section>

      {/* ━━━ QUESTIONS ANSWERED ━━━ */}
      <section className="relative py-24 bg-black border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <FadeUp className="lg:sticky lg:top-32">
            <Badge
              variant="secondary"
              className="mb-6 bg-white/5 border-white/10 text-white/70"
            >
              FAQ
            </Badge>
            <h2
              className="text-5xl md:text-6xl font-bold leading-tight text-white"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Your Questions <br />
              <span className="text-white/40 italic font-normal">Answered</span>
            </h2>
            <p className="text-white/40 mt-6 text-lg max-w-sm leading-relaxed">
              Find the answers to our most common questions here, but if you
              still need help, feel free to contact me.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="w-full">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {FAQS.filter((faq) => faq.question !== "Who is Zeru?").map(
                (faq, i) => (
                  <Collapsible
                    key={i}
                    className="group w-full transition-all duration-300"
                  >
                    <CollapsibleTrigger className="flex w-full items-center gap-4 py-5 text-left outline-none">
                      <span className="flex-1 text-base md:text-lg font-medium text-white/80 group-hover:text-white tracking-tight transition-colors">
                        {faq.question}
                      </span>
                      <span className="flex w-6 shrink-0 items-center justify-center">
                        <Plus className="w-4 h-4 text-white/30 group-hover:text-white/70 group-data-[state=open]:rotate-45 group-data-[state=open]:text-white transition-all duration-300" />
                      </span>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <div className="flex px-12">
                        <p className="flex-1 min-w-0 text-white/50 text-base leading-relaxed">
                          {faq.answer}
                        </p>
                        <span className="w-6 shrink-0" aria-hidden="true" />
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ),
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ━━━ CONTACT CTA ━━━ */}
      <section className="relative py-32 bg-[#11131B] text-center overflow-hidden">
        <GridBackground
          gridSize={40}
          darkGridColor="rgba(23,62,255,0.05)"
          className="absolute inset-0"
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <FadeUp className="text-center">
            <h2
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Let's work <span className="gradient-text">together.</span>
            </h2>
            <p className="text-lg text-white/60 mb-10">
              I'm currently available for freelance work and open to full-time
              opportunities. Drop me a line and let's talk about your project!
            </p>
            <a href="/contact" className="inline-block">
              <MagneticButton
                variant="primary"
                size="lg"
                className="bg-[#173eff] hover:bg-[#3758f9] h-14 px-12"
              >
                Get in touch
              </MagneticButton>
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <Footer />
    </div>
  );
}
