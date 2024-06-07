import React from 'react';
import { playfair } from '../utils/fonts';
import { projects } from '../utils/projects';

const Projects = () => {
  return (
    <div
      className="flex flex-col justify-center min-h-[70vh] md:min-h-screen p-10 md:pe-56"
      id="projects"
    >
      <h1
        className={`text-4xl md:text-6xl font-bold mb-4 ${playfair.className}`}
      >
        Key Projects.
      </h1>
      {projects.map((project) => (
        <div className="flex flex-col mb-6">
          <h2 className="text-xl md:text-2xl font-semibold">{project.title}</h2>
          <p className="text-md md:text-lg font-light mb-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span className="text-sm md:text-base bg-primary text-white px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
