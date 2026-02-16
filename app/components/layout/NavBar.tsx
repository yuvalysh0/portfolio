"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { playfair } from "../../../utils/fonts";
import { Link as ScrollLink } from "react-scroll";
import { CgMenuRight, CgClose } from "react-icons/cg";
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

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

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <motion.nav 
        className="sticky navbar top-0 w-full flex justify-between items-center py-4 px-4 md:px-8 bg-base-100/95 backdrop-blur-sm z-50 border-b border-base-300/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className={`text-xl md:text-2xl font-bold ${playfair.className}`}>
            Y.Shalom;
          </Link>
        </motion.div>
        
        <div className="hidden md:flex gap-4 items-center">
          {links.map(({ href, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ScrollLink
                to={href}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
                spyThrottle={100}
                className={`text-gray-500 hover:text-gray-600 cursor-pointer transition-colors relative ${
                  label === isSelected && "text-primary font-bold"
                }`}
                onSetActive={() => setIsSelected(label)}
              >
                {label}
                {label === isSelected && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </ScrollLink>
            </motion.div>
          ))}
          
          {/* Theme toggle for desktop */}
          <ThemeToggle />
        </div>
        
        <div className="md:hidden z-50 flex items-center gap-3">
          {/* Theme toggle for mobile */}
          <ThemeToggle />
          
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <CgClose
                  className="text-2xl cursor-pointer"
                  onClick={toggleMenu}
                />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <CgMenuRight
                  className="text-2xl cursor-pointer"
                  onClick={toggleMenu}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className={`md:hidden fixed inset-0 bg-base-100 flex flex-col gap-6 items-center justify-center z-40 ${playfair.className}`}
            >
              {links.map(({ href, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ScrollLink
                    to={href}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    activeClass="active"
                    spyThrottle={100}
                    className={`text-5xl cursor-pointer ${
                      label === isSelected
                        ? "font-bold text-primary"
                        : "text-primary-content"
                    }`}
                    onSetActive={() => setIsSelected(label)}
                    onClick={toggleMenu}
                  >
                    {label}
                  </ScrollLink>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default NavBar;
