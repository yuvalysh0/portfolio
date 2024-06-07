import React from 'react';
import { aboutMe } from '../utils/aboutMe';
import { playfair } from '../utils/fonts';

const AboutMe = () => {
  return (
    <div
      className="flex flex-col justify-center min-h-[70vh] md:min-h-screen p-10 md:pe-56"
      id="about"
    >
      <h1
        className={`text-4xl md:text-6xl font-bold mb-2 ${playfair.className}`}
      >
        About Me.
      </h1>
      <p className="text-lg md:text-xl font-light">{aboutMe.description}</p>
    </div>
  );
};

export default AboutMe;
