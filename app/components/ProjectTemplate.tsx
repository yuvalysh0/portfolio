"use client";
import React, { useState } from "react";
import { playfair } from "@/utils/fonts";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/app/components/layout/AnimatedSection";
import StaggerContainer from "@/app/components/layout/StaggerContainer";
import StaggerItem from "@/app/components/layout/StaggerItem";
import ImageModal from "@/app/components/ImageModal";
import { motion } from "framer-motion";

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, children }) => (
  <motion.section 
    className="mb-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </motion.section>
);

interface ProjectImageProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, onClick }) => (
  <motion.div
    className="flex items-center justify-center w-full cursor-pointer mb-8 overflow-hidden rounded-lg"
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    <Image
      src={src}
      alt={alt}
      width={600}
      height={600}
      className="rounded-lg"
    />
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
    <>
      <motion.nav 
        className="sticky navbar top-0 w-screen md:w-full flex justify-between items-center py-4 px-8 bg-base-100 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className={playfair.className}>
          Y.Shalom;
        </Link>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="btn btn-outline btn-sm">
            Go back to Home
          </Link>
        </motion.div>
      </motion.nav>
      
      <AnimatedSection
        className="flex flex-col justify-center items-center min-h-[70vh] lg:min-h-[80vh] p-12"
        id="projects"
        variant="fadeUp"
      >
        <div className="max-w-4xl">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.title}
          </motion.h1>
          
          <motion.p 
            className="text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {project.description}
          </motion.p>

          <StaggerContainer
            className="flex flex-col"
            staggerDelay={0.2}
            initialDelay={0.6}
          >
            {project.images.map((img, idx) => (
              <StaggerItem key={idx} variant="fadeUp">
                <ProjectImage
                  src={img.src}
                  alt={img.alt}
                  onClick={() => openImageModal(img.src, img.alt)}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {project.sections.map((section, idx) => (
            <ProjectSection key={idx} title={section.title}>
              <StaggerContainer
                className="list-disc pl-5 mb-8 text-lg"
                staggerDelay={0.1}
              >
                {section.content.map((item, itemIdx) => (
                  <StaggerItem key={itemIdx} variant="fadeUp">
                    <li dangerouslySetInnerHTML={{ __html: item }} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ProjectSection>
          ))}
        </div>
      </AnimatedSection>
      
      <ImageModal
        image={image}
        isOpen={isImageModalOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default ProjectTemplate;
