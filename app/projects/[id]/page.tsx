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

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { id } = params;
  const project = projects.find((proj) => proj.id.toString() === id);

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

const ProjectPage = ({ params }: { params: any }) => {
  const { id } = params;
  const project = projects.find((proj) => proj.id.toString() === id);

  if (!project) {
    notFound();
  }

  if (!project.projectPage) {
    return (
      <div className="flex items-center justify-center">
        Project page not found
      </div>
    );
  }

  return <ProjectTemplate project={project.projectPage} />;
};

export default ProjectPage;
