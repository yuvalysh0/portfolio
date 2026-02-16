"use client";
import React from "react";
import { playfair } from "../../utils/fonts";
import ContactCards from "./ContactCards";
import AnimatedSection from "./layout/AnimatedSection";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <AnimatedSection
      className="flex flex-col justify-center items-center min-h-[70vh] lg:min-h-[80vh] p-10 pb-32"
      id="contact"
      variant="fadeUp"
    >
      <div className="max-w-4xl w-full">
        <motion.h1
          className={`text-5xl md:text-6xl font-bold mb-4 text-center ${playfair.className}`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s Connect.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-light mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <ContactCards />
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
