"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { playfair } from "../../utils/fonts";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-base-100 via-base-200 to-base-100"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Animated background circles */}
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Animated logo/name */}
            <motion.h1
              className={`text-6xl md:text-8xl font-bold ${playfair.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {["Y", ".", "S"].map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Loading bar */}
            <div className="w-64 h-1 bg-base-300 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-primary"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              className="text-base-content/60 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              Loading experience...
            </motion.p>
          </div>

          {/* Corner decorations */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-secondary/30 rounded-bl-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
