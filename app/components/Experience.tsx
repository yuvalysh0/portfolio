import React from 'react';
import { playfair } from '../utils/fonts';
import { experience } from '../utils/experience';
import { BsCheckCircleFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <div
      className="flex flex-col justify-center min-h-screen p-10 my-24"
      id="experience"
    >
      <h1
        className={`text-6xl text-primary-content font-bold mb-12 ${playfair.className}`}
      >
        Experience.
      </h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {experience.map((exp, index) => (
          <li key={index}>
            <div className="timeline-middle">
              <BsCheckCircleFill />
            </div>
            <div
              className={
                index % 2 == 0
                  ? `timeline-start md:text-end mb-8`
                  : `timeline-end mb-8`
              }
            >
              <time className="font-mono italic">{exp.date}</time>
              <div className="text-xl font-bold text-primary">
                {exp.position}
              </div>
              <div className="text-lg text-secondary-content">
                {exp.company}
              </div>
              {exp.description.map((desc, index) => (
                <p
                  key={index}
                  className="text-gray-500 text-sm font-light mb-2"
                >
                  {desc}
                </p>
              ))}
            </div>
            <hr className="bg-primary" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
