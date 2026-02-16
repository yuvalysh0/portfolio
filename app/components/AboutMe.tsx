"use client";
import React from "react";
import { aboutMe } from "../../utils/aboutMe";
import { playfair } from "../../utils/fonts";
import { techStack } from "../../utils/techStack";
import TechIcon from "./TechIcon";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import AnimatedSection from "./layout/AnimatedSection";
import StaggerContainer from "./layout/StaggerContainer";
import StaggerItem from "./layout/StaggerItem";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutMe = () => {
  const iconStyle =
    "transform transition-transform w-10 h-10 hover:text-primary";
  
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
        className="text-lg md:text-xl font-light mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {aboutMe.description}
      </motion.p>

      <motion.h2 
        className="text-lg md:text-xl font-medium mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {`Technologies I've worked with:`}
      </motion.h2>
      
      <StaggerContainer 
        className="grid grid-cols-4 md:flex md:flex-wrap gap-4"
        staggerDelay={0.08}
        initialDelay={0.4}
      >
        {techStack.map(({ name, iconName }) => (
          <StaggerItem key={name} variant="scale">
            <TechIcon
              iconName={iconName as IconName}
              name={name}
              style={iconStyle}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
      
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
