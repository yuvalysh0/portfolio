import React from 'react';
import { heroText } from '../utils/heroText';
import { playfair } from '../utils/fonts';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen p-10 md:pe-56">
      <h1 className={`text-8xl font-bold mb-2 ${playfair.className}`}>
        {heroText.title}
      </h1>
      <h2 className="text-2xl mb-4">{heroText.subtitle}</h2>
      <p className="text-xl font-light">{heroText.description}</p>
    </div>
  );
};

export default Hero;
