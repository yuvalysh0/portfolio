import React from "react";
import ProjectTemplate from "@/app/components/ProjectTemplate";
import { projects } from "@/utils/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamicParams = true;

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: project.title,
    description: project.description,
    keywords: [
      ...project.tags,
      "Frontend Development",
      "Web Development",
      "Yuval Shalom",
    ],
    openGraph: {
      title: `${project.title} | Yuval Shalom`,
      description: project.description,
      type: "article",
      url: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://yuvalshalom.com"
      }/projects/${project.id}`,
      images: [
        {
          url: "/assets/images/profile-picture.jpg",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Yuval Shalom`,
      description: project.description,
    },
  };
}

const ProjectPage = async ({ params }: Props) => {
  const { id } = await params;
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    notFound();
  }

  if (!project.projectPage) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 ">
            Project Page Not Available
          </h1>
          <p className="text-base-content/70 mb-6">
            This project doesn&apos;t have a dedicated page yet.
          </p>
          <a href="/" className="btn btn-primary">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return <ProjectTemplate project={project.projectPage} />;
};

export default ProjectPage;
