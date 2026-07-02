import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectById, PROJECTS } from "@/data/portfolio";
import ProjectDetailView from "./project-detail-view";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: String(project.id) }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(Number(id));

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Zeru Portfolio`,
      description: project.description,
      images: [{ url: project.imageUrl }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(Number(id));

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
