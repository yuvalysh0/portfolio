"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
library.add(fab);

interface ITechIcon {
  iconName: IconName;
  name: string;
  style?: string;
}

const TechIcon = ({ iconName, name, style = "" }: ITechIcon) => (
  <motion.div 
    className="relative group"
    whileHover={{ 
      scale: 1.15,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.3 }
    }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="relative"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <FontAwesomeIcon
        icon={["fab", `${iconName}`]}
        className={`text-3xl transition-colors duration-300 ${style}`}
      />
      <motion.span 
        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs text-primary-content bg-primary rounded-lg whitespace-nowrap z-10 pointer-events-none"
        initial={{ opacity: 0, y: -5 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {name}
      </motion.span>
    </motion.div>
    
    {/* Animated glow effect on hover */}
    <motion.div
      className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10 bg-gradient-to-r from-primary to-secondary"
    />
  </motion.div>
);

export default TechIcon;
