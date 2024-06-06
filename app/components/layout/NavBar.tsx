'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { playfair } from '../../utils/fonts';

const links = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const NavBar = () => {
  const [isSelected, setIsSelected] = useState('');
  return (
    <nav className="sticky top-0 flex justify-between items-center py-4 px-8 bg-base-100 z-50">
      <Link href="/" className={playfair.className}>
        Y.Shalom;
      </Link>
      <div className="flex gap-4">
        {links.map(({ href, label }) => (
          <Link
            key={label}
            className={`text-gray-500 hover:text-gray-600 ${
              label == isSelected ? 'text-gray-600 font-bold' : ''
            }`}
            href={href}
            onClick={() => setIsSelected(label)}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
