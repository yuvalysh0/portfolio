"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

interface TechCardProps {
  name: string;
  iconName: IconName;
  index: number;
  category?: string;
}

export default function TechCard({ name, iconName, index, category }: TechCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.23, 1, 0.32, 1],
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative bg-base-200/50 backdrop-blur-sm border border-base-300 rounded-2xl p-6 overflow-hidden cursor-pointer"
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          rotateX: -5,
        }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, oklch(var(--p)) 0%, oklch(var(--s)) 100%)",
            opacity: 0,
          }}
          animate={{
            opacity: isHovered ? 0.2 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating particles effect */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/60 rounded-full"
                initial={{
                  x: Math.random() * 100 - 50,
                  y: 50,
                  opacity: 0,
                }}
                animate={{
                  y: -50,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
                style={{
                  left: `${30 + i * 20}%`,
                }}
              />
            ))}
          </>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          {/* Icon with glow */}
          <motion.div
            className="relative"
            animate={{
              rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 blur-xl"
              animate={{
                opacity: isHovered ? 0.6 : 0,
                scale: isHovered ? 1.5 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon
                icon={["fab", iconName]}
                className="text-5xl text-primary"
              />
            </motion.div>

            {/* Main icon */}
            <FontAwesomeIcon
              icon={["fab", iconName]}
              className="text-5xl relative z-10 transition-colors duration-300 text-base-content group-hover:text-primary"
            />
          </motion.div>

          {/* Name with typing effect */}
          <motion.p
            className="font-semibold text-center text-base-content/90 group-hover:text-base-content"
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.p>

          {/* Category tag (if provided) */}
          {category && (
            <motion.span
              className="text-xs px-3 py-1 rounded-full bg-base-300/50 text-base-content/60"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.2 }}
            >
              {category}
            </motion.span>
          )}
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{
            background:
              "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 55%, transparent 100%)",
          }}
          animate={{
            x: isHovered ? ["-100%", "200%"] : "-100%",
            opacity: isHovered ? [0, 1, 0] : 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
