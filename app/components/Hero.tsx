"use client";
import React from "react";
import { heroText } from "../../utils/heroText";
import { playfair } from "../../utils/fonts";
import { motion } from "framer-motion";
import Wave from "./Wave";

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="relative flex flex-col md:justify-center min-h-[50vh] justify-center lg:min-h-hero p-10 md:pe-56 md:bg-inherit text-primary-contant text-center md:text-left"
      id="home"
      initial="hidden"
      animate="visible"
    >
      <Wave className="text-primary absolute -top-2 left-0 w-full md:hidden" />

      <motion.h1
        className={`text-5xl md:text-8xl font-bold mb-2 z-30 ${playfair.className}`}
        variants={titleVariants}
      >
        {heroText.title.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl mb-4"
        variants={subtitleVariants}
      >
        {heroText.subtitle}
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl font-light"
        variants={descriptionVariants}
      >
        {heroText.description}
      </motion.p>

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, oklch(70% 0.28 285) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, oklch(75% 0.28 330) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, oklch(70% 0.28 285) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.section>
  );
};

export default Hero;
