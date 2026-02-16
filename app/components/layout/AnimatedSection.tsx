"use client";
import React from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";
  delay?: number;
  duration?: number;
  once?: boolean;
}

const animationVariants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  id,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once, 
    margin: "-100px",
    amount: 0.3 
  });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants[variant]}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
