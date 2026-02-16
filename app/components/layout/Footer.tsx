"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="footer footer-center p-4 py-20 bg-base-200 text-base-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.aside
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.p
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Copyright © {new Date().getFullYear()} - Crafted by{" "}
          <motion.span
            className="text-primary font-semibold"
            whileHover={{ color: "oklch(70% 0.114 19.571)" }}
          >
            Yuval Shalom
          </motion.span>
        </motion.p>
      </motion.aside>
    </motion.footer>
  );
};

export default Footer;
