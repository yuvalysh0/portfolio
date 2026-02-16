"use client";
import React from "react";
import { aboutMe } from "../../utils/aboutMe";
import { playfair } from "../../utils/fonts";
import { techStack } from "../../utils/techStack";
import SkillProgress from "./SkillProgress";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import AnimatedSection from "./layout/AnimatedSection";
import { FaChevronDown } from "react-icons/fa";
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
        className="text-lg md:text-xl font-medium mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {`Technologies & Skills:`}
      </motion.h2>
      
      <div className="space-y-4 mb-8">
        {techStack.map(({ name, iconName, level }, index) => (
          <SkillProgress
            key={name}
            name={name}
            iconName={iconName as IconName}
            level={level}
            index={index}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Link
          href="https://drive.google.com/file/d/149B5bTah7nQV3ir3-l-6wIT4dG5sRlCQ/view?usp=sharing"
          target="_blank"
          className="btn md:btn-wide btn-primary text-primary-content font-normal mx-auto mt-8 md:mt-14"
        >
          <motion.span
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaChevronDown />
            </motion.span>
          </motion.span>
        </Link>
      </motion.div>
    </AnimatedSection>
  );
};

export default AboutMe;
