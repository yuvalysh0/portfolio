"use client";
import React from "react";
import { playfair } from "../../utils/fonts";
import ContactForm from "./ContactForm";
import AnimatedSection from "./layout/AnimatedSection";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <AnimatedSection
      className="flex flex-col justify-center min-h-[70vh] lg:min-h-[80vh] p-10 pb-32"
      id="contact"
      variant="fadeUp"
    >
      <motion.h1
        className={`text-5xl md:text-6xl font-bold mb-4 ${playfair.className}`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Keep in touch.
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl font-light mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        If you have any questions or just want to say hi, feel free to reach out
        to me.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <ContactForm />
      </motion.div>
    </AnimatedSection>
  );
};

export default Contact;
