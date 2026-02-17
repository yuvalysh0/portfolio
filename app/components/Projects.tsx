"use client";
import React, { useState } from "react";
import { playfair } from "../../utils/fonts";
import { projects } from "../../utils/projects";
import AnimatedSection from "./layout/AnimatedSection";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Extract unique tags
const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  
  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedFilter));

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
        viewport={{ once: true, margin: "-50px", amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        Key Projects.
      </motion.h1>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap gap-2 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px", amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {["All", ...allTags.slice(0, 6)].map((tag) => (
          <motion.button
            key={tag}
            onClick={() => setSelectedFilter(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedFilter === tag
                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                : "bg-base-200 text-base-content hover:bg-base-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects List with AnimatePresence for smooth filtering */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex flex-col p-4 rounded-lg transition-colors hover:bg-base-200 border-l-4 border-transparent hover:border-primary"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <motion.h2
                className="text-xl md:text-2xl font-semibold mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {project.title}
              </motion.h2>

              <p className="text-md md:text-lg font-light mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className={`text-sm md:text-base px-3 py-1 rounded-full ${
                      selectedFilter === tag
                        ? "bg-gradient-to-r from-primary to-secondary text-white"
                        : "bg-base-300 text-base-content"
                    }`}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -2, 2, 0],
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-4 items-center">
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <motion.p
          className="text-center text-base-content/60 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No projects found with selected filter.
        </motion.p>
      )}
    </AnimatedSection>
  );
};

export default Projects;
