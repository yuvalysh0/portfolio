import React from "react";
import { heroText } from "../utils/heroText";
import { playfair } from "../utils/fonts";

const Hero = () => {
  return (
    <div
      className="flex flex-col md:justify-center min-h-[50vh] md:min-h-screen p-10 md:pe-56 bg-primary md:bg-inherit text-white md:text-inherit text-center md:text-left"
      id="home">
      <h1
        className={`text-5xl md:text-8xl font-bold mb-2 ${playfair.className}`}>
        {heroText.title}
      </h1>
      <h2 className="text-xl md:text-2xl mb-4">{heroText.subtitle}</h2>
      <p className="text-lg md:text-xl font-light">{heroText.description}</p>
    </div>
  );
};

export default Hero;
