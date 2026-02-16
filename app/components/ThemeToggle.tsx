"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"portfolio-light" | "portfolio-dark">("portfolio-light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem("theme") as "portfolio-light" | "portfolio-dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = savedTheme || (prefersDark ? "portfolio-dark" : "portfolio-light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "portfolio-light" ? "portfolio-dark" : "portfolio-light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="w-14 h-7 rounded-full bg-base-300" />
    );
  }

  const isDark = theme === "portfolio-dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-base-300 flex items-center cursor-pointer border-2 border-base-content/10 hover:border-primary/50 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Toggle track */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          backgroundColor: isDark 
            ? "oklch(15% 0.03 280)" 
            : "oklch(95% 0.015 285)"
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Toggle thumb */}
      <motion.div
        className="relative w-6 h-6 rounded-full bg-gradient-to-br shadow-lg flex items-center justify-center z-10"
        animate={{
          x: isDark ? 26 : 2,
          background: isDark
            ? "linear-gradient(135deg, oklch(70% 0.28 285), oklch(75% 0.28 330))"
            : "linear-gradient(135deg, oklch(55% 0.24 285), oklch(65% 0.25 330))",
          rotate: isDark ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {isDark ? (
          <HiMoon className="w-4 h-4 text-white" />
        ) : (
          <HiSun className="w-4 h-4 text-white" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-md opacity-50 -z-10"
        animate={{
          background: isDark
            ? "radial-gradient(circle, oklch(70% 0.28 285) 0%, transparent 70%)"
            : "radial-gradient(circle, oklch(55% 0.24 285) 0%, transparent 70%)",
        }}
      />
    </motion.button>
  );
}
