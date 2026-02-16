"use client";
import React from "react";
import { aboutMe } from "../../utils/aboutMe";
import { playfair } from "../../utils/fonts";
import { techStack } from "../../utils/techStack";
import TechCard from "./TechCard";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import AnimatedSection from "./layout/AnimatedSection";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <AnimatedSection
      className="flex flex-col justify-center min-h-[70vh] lg:min-h-[80vh] p-10 md:pe-56"
      id="about"
      variant="fadeUp"
    >
      <motion.h1
        className={`text-4xl md:text-6xl font-bold mb-2 ${playfair.className}`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        About Me.
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl font-light mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {aboutMe.description}
      </motion.p>

      <motion.h2 
        className="text-lg md:text-xl font-medium mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {`Technologies & Tools:`}
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {techStack.map(({ name, iconName, category }, index) => (
          <TechCard
            key={name}
            name={name}
            iconName={iconName as IconName}
            category={category}
            index={index}
          />
        ))}
      </div>
      
      <motion.div
        className="relative mt-8 md:mt-14 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* Animated glow background */}
        <motion.div
          className="absolute inset-0 blur-2xl opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
        </motion.div>

        <Link
          href="https://drive.google.com/file/d/149B5bTah7nQV3ir3-l-6wIT4dG5sRlCQ/view?usp=sharing"
          target="_blank"
          className="relative group"
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] px-8 py-4 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
              }}
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-3 text-primary-content font-semibold text-lg">
              {/* Download icon with animation */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </motion.svg>

              <span>Download CV</span>

              {/* Arrow with bounce */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </div>

            {/* Particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary-content/60 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  left: `${20 + i * 15}%`,
                  top: "50%",
                }}
                animate={{
                  y: [-20, -40],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
            ))}
          </motion.div>

          {/* Floating text hint */}
          <motion.p
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-base-content/50 whitespace-nowrap opacity-0 group-hover:opacity-100"
            initial={{ y: -10 }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Opens in new tab ✨
          </motion.p>
        </Link>
      </motion.div>
    </AnimatedSection>
  );
};

export default AboutMe;
