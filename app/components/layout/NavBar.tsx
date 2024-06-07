'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { playfair } from '../../utils/fonts';
import { Link as ScrollLink } from 'react-scroll';

const links = [
  { href: 'home', label: 'Home' },
  { href: 'about', label: 'About' },
  { href: 'experience', label: 'Experience' },
  { href: 'projects', label: 'Projects' },
  { href: 'contact', label: 'Contact' },
];

const NavBar = () => {
  const [isSelected, setIsSelected] = useState('Home');

  return (
    <nav className="sticky navbar top-0 w-screen md:w-full flex justify-between items-center py-4 px-8 bg-base-100 z-50">
      <Link href="/" className={playfair.className}>
        Y.Shalom;
      </Link>
      <div className="hidden md:flex gap-4">
        {links.map(({ href, label }) => (
          <ScrollLink
            key={label}
            to={href}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className={`text-gray-500 hover:text-gray-600 cursor-pointer ${
              label === isSelected ? 'text-primary font-bold' : ''
            }`}
            onSetActive={() => setIsSelected(label)}
          >
            {label}
          </ScrollLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
