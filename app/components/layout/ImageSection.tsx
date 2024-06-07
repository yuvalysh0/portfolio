'use client';
import Image from 'next/image';
import React from 'react';
import profilePic from '../../assets/images/profile-picture.jpg';
import { SocialIcon } from '../SocialIcon';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';

export const socialItems = [
  {
    link: 'https://www.linkedin.com/in/yuvalshalom',
    icon: <FaLinkedin />,
  },
  { link: 'https://twitter.com/yuvalysh0', icon: <FaTwitter /> },
  { link: 'https://github.com/yuvalysh0', icon: <FaGithub /> },
];

const ImageSection = () => {
  const iconsStyle =
    'text-white text-xl md:text-2xl lg:text-3xl transform transition-transform duration-300 hover:scale-125 hover:rotate-12 md:hover:-translate-x-2';

  return (
    <section className="relative w-screen h-[50vh] flex md:fixed md:right-0 md:top-0 md:h-full items-center justify-center bg-primary md:w-5/12">
      <Image
        onClick={() =>
          toast(`I Know I'm cute but don't push me`, {
            icon: '🤪',
            duration: 2500,
            style: {
              border: '1px solid #D0C1D6',
              padding: '12px',
              color: '#D0C1D6',
            },
          })
        }
        className="md:sticky object-cover rounded-full overflow-hidden w-[65%] aspect-square md:w-56 lg:w-80 drop-shadow-2xl shadow-slate-400 md:hover:border-2 md:hover:border-rose-400 md:transition-all md:duration-200 md:hover:scale-105"
        src={profilePic}
        alt="Profile Picture"
      />
      <div className="hidden md:flex fixed right-0 top-1/2 transform -translate-y-1/2 flex-col space-y-4 pr-4">
        {socialItems.map((item) => (
          <SocialIcon
            key={item.link}
            link={item.link}
            icon={item.icon}
            style={iconsStyle}
          />
        ))}
      </div>
      <Toaster />
    </section>
  );
};

export default ImageSection;
