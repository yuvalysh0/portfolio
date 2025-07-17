"use client";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "../SocialIcon";
import { Toaster, toast } from "react-hot-toast";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { socialItems } from "@/utils/socialItems";
import AnimatedSection from "./AnimatedSection";

const ImageSection = () => {
  const iconsStyle =
    "text-white text-4xl md:text-3xl transform transition-transform duration-300 md:hover:scale-125 md:hover:rotate-12 md:hover:-translate-x-2";

  return (
    <section className="relative w-screen h-[50vh] flex flex-col md:flex-row md:fixed md:right-0 md:top-0 md:h-full items-center justify-center bg-primary md:w-5/12">
      <AnimatedSection className="flex md:flex-col gap-4 mb-8 md:mb-0 md:absolute md:right-4 xl:right-8 2xl:right-12 md:top-1/2 md:-translate-y-1/2">
        {socialItems.map(({ link, icon }) => (
          <SocialIcon
            key={link}
            link={link}
            icon={icon as IconName}
            style={iconsStyle}
          />
        ))}
      </AnimatedSection>
      <AnimatedSection className="flex items-center justify-center">
        <Image
          onClick={() =>
            toast(`I Know I'm cute but don't push me`, {
              icon: "🤪",
              duration: 2500,
              style: {
                zIndex: 1000,
                border: "1px solid #A45C5D",
                padding: "12px",
                color: "#A45C5D",
              },
            })
          }
          className="md:sticky object-cover rounded-full overflow-hidden w-[65%] aspect-square md:w-56 lg:w-80 drop-shadow-2xl shadow-slate-400 md:hover:border-2 md:hover:border-[#A45C5D] md:transition-all md:duration-200 md:hover:scale-105 z-10"
          src="/assets/images/profile-picture.jpg"
          alt="Profile Picture"
          width={800}
          height={800}
        />
      </AnimatedSection>

      <Toaster />
    </section>
  );
};

export default ImageSection;
