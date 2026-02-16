"use client";
import React from "react";
import { playfair } from "../../utils/fonts";
import { projects } from "../../utils/projects";
import AnimatedSection from "./layout/AnimatedSection";
import StaggerContainer from "./layout/StaggerContainer";
import StaggerItem from "./layout/StaggerItem";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <AnimatedSection
      className="flex flex-col justify-center min-h-[70vh] lg:min-h-[80vh] p-10 md:pe-56"
      id="projects"
      variant="fadeUp"
    >
      <motion.h1
        className={`text-4xl md:text-6xl font-bold mb-4 ${playfair.className}`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Key Projects.
      </motion.h1>
      
      <StaggerContainer
        className="flex flex-col"
        staggerDelay={0.15}
        initialDelay={0.2}
      >
        {projects.map((project, index) => (
          <StaggerItem key={project.title} variant="fadeUp">
            <motion.div 
              className="flex flex-col mb-6 p-4 rounded-lg transition-colors hover:bg-base-200"
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              initial={{ borderLeft: "4px solid transparent" }}
              whileInView={{ 
                borderLeft: "4px solid oklch(80% 0.114 19.571)",
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.h2 
                className="text-xl md:text-2xl font-semibold"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {project.title}
              </motion.h2>
              
              <motion.p 
                className="text-md md:text-lg font-light mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>
              
              <StaggerContainer 
                className="flex flex-wrap gap-2"
                staggerDelay={0.05}
                initialDelay={0.3}
              >
                {project.tags.map((tag) => (
                  <StaggerItem key={tag} variant="scale">
                    <motion.span
                      className="text-sm md:text-base bg-primary text-white px-2 py-1 rounded-md"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -2, 2, 0],
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {tag}
                    </motion.span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              
              <motion.div 
                className="flex gap-4 mt-4 items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {project.githubUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      GitHub
                    </Link>
                  </motion.div>
                )}
                {project.youtubeUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      Demo
                    </Link>
                  </motion.div>
                )}
                {project.url && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={project.url} className="btn btn-outline btn-sm">
                      View More
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default Projects;
