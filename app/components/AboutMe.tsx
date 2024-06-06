import React from 'react';
import { aboutMe } from '../utils/aboutMe';
import { playfair } from '../utils/fonts';

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen p-10 md:pe-56">
      <h1 className={`text-6xl font-bold mb-2 ${playfair.className}`}>
        About Me.
      </h1>
      <p className="text-xl font-light">{aboutMe.description}</p>
    </div>
  );
};

export default AboutMe;
