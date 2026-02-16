"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

interface SkillProgressProps {
  name: string;
  iconName: IconName;
  level: number; // 0-100
  index: number;
}

const SkillProgress: React.FC<SkillProgressProps> = ({
  name,
  iconName,
  level,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-4 group"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      {/* Icon */}
      <motion.div
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon
          icon={["fab", `${iconName}`]}
          className="text-2xl text-base-content group-hover:text-primary transition-colors duration-300"
        />
      </motion.div>

      {/* Name and Progress Bar */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-base-content">{name}</span>
          <motion.span
            className="text-xs text-base-content/60 font-mono"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.08 + 0.5 }}
          >
            {level}%
          </motion.span>
        </div>

        {/* Progress bar container */}
        <div className="h-2 bg-base-300 rounded-full overflow-hidden">
          {/* Animated progress */}
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full relative overflow-hidden"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${level}%` } : {}}
            transition={{
              delay: index * 0.08 + 0.3,
              duration: 1,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillProgress;
