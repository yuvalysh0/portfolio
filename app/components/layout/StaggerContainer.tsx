"use client";
import React from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  once?: boolean;
  as?: keyof typeof motion;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0,
  once = true,
  as = "div",
}) => {
  const ref = useRef<any>(null);
  const isInView = useInView(ref, { 
    once, 
    margin: "-50px",
    amount: 0.2 
  });

  const customContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const MotionComponent = motion[as] as any;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customContainerVariants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default StaggerContainer;
