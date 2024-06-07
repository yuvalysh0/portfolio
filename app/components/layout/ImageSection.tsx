import Image from 'next/image';
import React from 'react';
import profilePic from '../../assets/images/profile-picture.jpg';

const ImageSection = () => {
  return (
    <section className="w-screen h-[50vh] flex md:fixed md:right-0 md:top-0 md:h-full items-center justify-center bg-primary md:w-5/12">
      <Image
        className="md:sticky object-cover rounded-3xl overflow-hidden w-44 md:w-64 drop-shadow-2xl shadow-slate-400 md:hover:border-2 md:hover:border-rose-400 md:transition-all md:duration-200 md:hover:scale-105"
        src={profilePic}
        alt="Profile Picture"
      />
    </section>
  );
};

export default ImageSection;
