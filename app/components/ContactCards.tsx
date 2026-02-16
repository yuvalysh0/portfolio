"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

interface ContactCard {
  name: string;
  icon: React.ReactNode;
  href: string;
  color: string;
  hoverColor: string;
  description: string;
}

const contactCards: ContactCard[] = [
  {
    name: "Email",
    icon: <FaEnvelope className="w-8 h-8" />,
    href: "mailto:yuvalysh@gmail.com",
    color: "oklch(70% 0.28 285)", // Primary purple
    hoverColor: "oklch(75% 0.28 330)", // Pink
    description: "Drop me a message",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="w-8 h-8" />,
    href: "https://www.linkedin.com/in/yuvalshalom",
    color: "oklch(55% 0.19 240)", // LinkedIn blue
    hoverColor: "oklch(70% 0.28 285)", // Purple
    description: "Let's connect professionally",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="w-8 h-8" />,
    href: "https://github.com/yuvalysh0",
    color: "oklch(30% 0.02 280)", // Dark
    hoverColor: "oklch(70% 0.28 285)", // Purple
    description: "Check out my code",
  },
  {
    name: "X (Twitter)",
    icon: <FaXTwitter className="w-8 h-8" />,
    href: "https://twitter.com/yuvalysh0",
    color: "oklch(20% 0.02 280)", // Black
    hoverColor: "oklch(75% 0.28 330)", // Pink
    description: "Follow my updates",
  },
];

const ContactCard: React.FC<{ card: ContactCard; index: number }> = ({
  card,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={card.href} target="_blank" rel="noopener noreferrer">
        <motion.div
          className="relative group cursor-pointer p-6 rounded-2xl border-2 border-base-300 bg-base-100 overflow-hidden"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, ${card.color} 0%, ${card.hoverColor} 100%)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-3">
            <motion.div
              className="text-base-content group-hover:text-white transition-colors duration-300"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {card.icon}
            </motion.div>

            <div>
              <h3 className="text-xl font-bold text-base-content group-hover:text-white transition-colors duration-300">
                {card.name}
              </h3>
              <p className="text-sm text-base-content/70 group-hover:text-white/90 transition-colors duration-300">
                {card.description}
              </p>
            </div>
          </div>

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            style={{ transform: "skewX(-20deg)" }}
          />

          {/* Border glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
            style={{
              background: `linear-gradient(135deg, ${card.color} 0%, ${card.hoverColor} 100%)`,
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

const ContactCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
      {contactCards.map((card, index) => (
        <ContactCard key={card.name} card={card} index={index} />
      ))}
    </div>
  );
};

export default ContactCards;
