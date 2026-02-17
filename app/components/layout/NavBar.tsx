"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { playfair } from "../../../utils/fonts";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import ThemeToggle from "../ThemeToggle";

const links = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

const NavBar = () => {
  const [isSelected, setIsSelected] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <motion.nav 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-base-100/80 backdrop-blur-lg shadow-lg" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/" 
                className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ${playfair.className}`}
              >
                Y.Shalom
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {links.map(({ href, label }) => (
                <ScrollLink
                  key={label}
                  to={href}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="active"
                  spyThrottle={100}
                  className={`relative cursor-pointer text-sm font-medium transition-colors duration-200 ${
                    label === isSelected 
                      ? "text-primary" 
                      : "text-base-content/70 hover:text-base-content"
                  }`}
                  onSetActive={() => setIsSelected(label)}
                >
                  {label}
                  {label === isSelected && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      layoutId="navbar-underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </ScrollLink>
              ))}
              
              <ThemeToggle />
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              
              <motion.button
                onClick={toggleMenu}
                className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-base-200 transition-colors"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <motion.span
                    className="w-full h-0.5 bg-current rounded-full"
                    animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-current rounded-full"
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-current rounded-full"
                    animate={isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] md:hidden"
              onClick={toggleMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-base-100 shadow-2xl z-[70] md:hidden overflow-y-auto ${playfair.className}`}
            >
              <div className="p-6">
                {/* Close button */}
                <motion.button
                  onClick={toggleMenu}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-base-200 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>

                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-8 mb-12"
                >
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Y.Shalom
                  </h2>
                  <p className="text-sm text-base-content/60 mt-2">
                    Frontend Developer
                  </p>
                </motion.div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                  {links.map(({ href, label }, index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <ScrollLink
                        to={href}
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        activeClass="active"
                        className={`block px-4 py-3 rounded-lg text-xl font-medium transition-all duration-200 cursor-pointer ${
                          label === isSelected
                            ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
                            : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                        }`}
                        onSetActive={() => setIsSelected(label)}
                        onClick={toggleMenu}
                      >
                        {label}
                      </ScrollLink>
                    </motion.div>
                  ))}
                </nav>

                {/* Decorative gradient */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
