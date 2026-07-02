"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import SparkleNavbar from "@/components/lightswind/sparkle-navbar";
import { Badge } from "@/components/lightswind/badge";
import { Footer } from "@/components/layout";
import { MagneticButton } from "@/components/lightswind/magnetic-button";
import { GridBackground } from "@/components/lightswind/grid-dot-backgrounds";
import {
  NAV_LINKS,
  PROJECTS,
  type Project,
  getProjectPath,
} from "@/data/portfolio";

type ProjectDetailViewProps = {
  project: Project;
};

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const router = useRouter();

  const relatedProjects = PROJECTS.filter((item) => item.id !== project.id).slice(
    0,
    3,
  );

  return (
    <div
      className="dark min-h-screen text-white"
      style={{ background: "#11131B" }}
    >
      <SparkleNavbar
        items={NAV_LINKS.map((link) => link.label)}
        onSelect={(index) => router.push(NAV_LINKS[index].href)}
        defaultActiveIndex={1}
        color="#173eff"
      />

      <main className="relative pt-32 pb-24 overflow-hidden">
        <GridBackground
          gridSize={40}
          darkGridColor="rgba(255,255,255,0.02)"
          className="absolute inset-0 h-full"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full aspect-[16/10] object-cover"
              />
            </div>

            <div>
              <Badge variant="secondary" className="mb-4">
                {project.brand}
              </Badge>
              <h1
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {project.title}
              </h1>
              <p className="mt-5 text-white/55 text-lg leading-relaxed text-justify">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/50 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <MagneticButton
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      variant="primary"
                      className="bg-[#173eff] hover:bg-[#3758f9]"
                    >
                      View Live
                    </MagneticButton>
                  )}
                  {project.githubUrl && (
                    <MagneticButton
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      variant="outline"
                      className="border-white/10 hover:bg-white/5"
                    >
                      View Code
                    </MagneticButton>
                  )}
                </div>
              )}
            </div>
          </div>

          <section className="mt-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <div>
              <Badge variant="secondary">Overview</Badge>
              <h2
                className="text-3xl md:text-4xl font-bold mt-4"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Project <span className="gradient-text">Details</span>
              </h2>
              <p className="mt-5 text-white/50 leading-relaxed text-justify">
                {project.description}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold mb-6">Key Features</h3>
              <ul className="space-y-4">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#173eff] shrink-0 mt-0.5" />
                    <span className="text-white/70 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-24">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <Badge variant="secondary">More Work</Badge>
                <h2
                  className="text-3xl md:text-4xl font-bold mt-4"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Other <span className="gradient-text">Projects</span>
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-white/50 hover:text-white transition-colors text-sm"
              >
                View all
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((item) => (
                <Link
                  key={item.id}
                  href={getProjectPath(item.id)}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-[#173eff]/40 transition-colors"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold">{item.title}</p>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#173eff] transition-colors" />
                    </div>
                    <p className="mt-2 text-sm text-white/45 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
