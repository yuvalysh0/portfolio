"use client";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "../SocialIcon";
import { Toaster, toast } from "react-hot-toast";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { socialItems } from "@/utils/socialItems";
import { motion } from "framer-motion";
import StaggerContainer from "./StaggerContainer";
import StaggerItem from "./StaggerItem";

const ImageSection = () => {
  const iconsStyle =
    "text-white text-4xl md:text-3xl transform transition-transform duration-300";

  return (
    <section className="relative w-full h-[50vh] flex flex-col md:fixed md:right-0 md:top-0 md:h-full items-center justify-center bg-primary md:w-5/12">
      <StaggerContainer
        className="flex md:flex-col gap-4 mb-8 md:mb-0 md:absolute md:right-4 xl:right-8 2xl:right-12 md:top-1/2 md:-translate-y-1/2"
        staggerDelay={0.1}
        initialDelay={0.3}
      >
        {socialItems.map(({ link, icon }) => (
          <StaggerItem key={link} variant="scale">
            <motion.div
              whileHover={{
                scale: 1.25,
                rotate: 12,
                x: -8,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <SocialIcon
                link={link}
                icon={icon as IconName}
                style={iconsStyle}
              />
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        <motion.div
          className="relative"
          whileHover={{
            scale: 1.05,
            rotate: [0, -2, 2, -2, 0],
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            onClick={() =>
              toast(`I Know I'm cute but don't push me`, {
                icon: "🤪",
                duration: 2500,
                style: {
                  zIndex: 9999,
                  border: "2px solid oklch(70% 0.28 285)",
                  padding: "12px",
                  color: "oklch(70% 0.28 285)",
                  background: "oklch(98% 0.01 280)",
                },
              })
            }
            className="object-cover rounded-full overflow-hidden w-[65vw] max-w-[320px] aspect-square md:w-56 lg:w-80 drop-shadow-2xl shadow-slate-400 cursor-pointer hover:shadow-[#A45C5D] transition-shadow duration-300 relative z-10"
            src="/assets/images/profile-picture.jpg"
            alt="Profile Picture"
            width={800}
            height={800}
          />

          {/* Animated ring around the image - positioned relative to image */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30 pointer-events-none"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      <Toaster />
    </section>
  );
};

export default ImageSection;
