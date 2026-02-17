"use client";
import React, { useState } from "react";
import { playfair } from "@/utils/fonts";
import Link from "next/link";
import Image from "next/image";
import ImageModal from "@/app/components/ImageModal";
import { motion } from "framer-motion";

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, children }) => (
  <motion.section
    className="mb-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px", amount: 0.1 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      {title}
    </h2>
    {children}
  </motion.section>
);

interface ProjectImageProps {
  src: string;
  alt: string;
  onClick: () => void;
  index: number;
}

const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  onClick,
  index,
}) => (
  <motion.div
    className="relative w-full cursor-pointer mb-8 overflow-hidden rounded-2xl group bg-base-200"
    onClick={onClick}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px", amount: 0.1 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <motion.div
      className="relative"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300 w-full h-auto"
        priority={index === 0}
        style={{ display: "block" }}
      />

      {/* Click to expand hint - positioned over image */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none">
        <div className="text-white text-center transform group-hover:scale-100 scale-95 transition-transform duration-300">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </motion.svg>
          <p className="text-lg font-semibold">Click to expand</p>
        </div>
      </div>
    </motion.div>

    {/* Gradient border effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl pointer-events-none" />
  </motion.div>
);

interface ProjectTemplateProps {
  project: {
    title: string;
    description: string;
    sections: { title: string; content: string[] }[];
    images: { src: string; alt: string }[];
  };
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ project }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [image, setImage] = useState({ src: "", alt: "" });

  const openImageModal = (src: string, alt: string) => {
    setImage({ src, alt });
    setIsImageModalOpen(true);
  };

  const handleClose = () => setIsImageModalOpen(false);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Animated Navigation */}
      <motion.nav
        className="sticky top-0 w-full backdrop-blur-lg bg-base-100/80 border-b border-base-300 z-50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className={`text-2xl font-bold ${playfair.className}`}>
            <motion.span
              className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Y.Shalom;
            </motion.span>
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="btn btn-outline btn-sm gap-2 hover:btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Project Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            className={`text-5xl md:text-6xl font-bold mb-6 ${playfair.className}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-base-content/70 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {project.description}
          </motion.p>
        </motion.div>

        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <div className="mb-16">
            {project.images.map((img, idx) => (
              <ProjectImage
                key={idx}
                src={img.src}
                alt={img.alt}
                index={idx}
                onClick={() => openImageModal(img.src, img.alt)}
              />
            ))}
          </div>
        )}

        {/* Project Sections */}
        {project.sections &&
          project.sections.map((section, idx) => (
            <ProjectSection key={idx} title={section.title}>
              <ul className="space-y-4">
                {section.content.map((item, itemIdx) => (
                  <motion.li
                    key={itemIdx}
                    className="flex items-start gap-3 text-lg leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: itemIdx * 0.05 }}
                  >
                    <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full mt-2" />
                    <span
                      dangerouslySetInnerHTML={{ __html: item }}
                      className="flex-1"
                    />
                  </motion.li>
                ))}
              </ul>
            </ProjectSection>
          ))}
      </div>

      <ImageModal
        image={image}
        isOpen={isImageModalOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default ProjectTemplate;
