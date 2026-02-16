"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeIn" | "scale" | "slideLeft" | "slideRight";
  as?: keyof typeof motion;
}

const itemVariants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4 }
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
    },
  },
};

const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className,
  variant = "fadeUp",
  as = "div",
}) => {
  const MotionComponent = motion[as] as any;

  return (
    <MotionComponent
      variants={itemVariants[variant]}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default StaggerItem;
