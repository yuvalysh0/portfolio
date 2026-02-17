"use client";
import React from "react";
import { playfair } from "../../utils/fonts";
import { experience } from "../../utils/experience";
import { BsCheckCircleFill } from "react-icons/bs";
import AnimatedSection from "./layout/AnimatedSection";
import StaggerContainer from "./layout/StaggerContainer";
import StaggerItem from "./layout/StaggerItem";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <AnimatedSection
      className="flex flex-col justify-center min-h-[70vh] lg:min-h-[80vh] p-10 mb-24"
      id="experience"
      variant="fadeUp"
    >
      <motion.h1
        className={`text-5xl md:text-6xl font-bold mb-8 md:mb-12 ${playfair.className}`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px", amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        Experience.
      </motion.h1>

      <StaggerContainer
        as="ul"
        className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
        staggerDelay={0.15}
        initialDelay={0.2}
      >
        {experience.map((exp, index) => (
          <StaggerItem key={index} as="li" variant="fadeUp">
            <motion.div
              className="timeline-middle"
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <BsCheckCircleFill />
            </motion.div>

            <motion.div
              className={
                index % 2 === 0
                  ? "timeline-start md:text-end mb-8"
                  : "timeline-end mb-8"
              }
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.time
                className="font-mono italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {exp.date}
              </motion.time>

              <motion.div
                className="text-xl font-bold text-primary"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {exp.position}
              </motion.div>

              <motion.div
                className="text-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {exp.company}
              </motion.div>

              {exp.description.map((desc, descIndex) => (
                <motion.p
                  key={descIndex}
                  className="text-base-content text-sm font-light mb-2"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + descIndex * 0.1 }}
                >
                  {desc}
                </motion.p>
              ))}
            </motion.div>

            <motion.hr
              className="bg-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default Experience;
