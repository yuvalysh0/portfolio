"use client";

import Link from "next/link";
import React, { useState } from "react";
import { playfair } from "../../utils/fonts";
import { Link as ScrollLink } from "react-scroll";
import { CgMenuRight, CgClose } from "react-icons/cg";

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

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

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
              label === isSelected && "text-primary font-bold"
            }`}
            onSetActive={() => setIsSelected(label)}>
            {label}
          </ScrollLink>
        ))}
      </div>
      <div className="md:hidden z-50">
        {isMenuOpen ? (
          <CgClose className="text-2xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <CgMenuRight
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>

      {isMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 bg-base-100 flex flex-col gap-6 items-center justify-center z-40 ${playfair.className}`}>
          {links.map(({ href, label }) => (
            <ScrollLink
              key={label}
              to={href}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className={`text-5xl ${
                label === isSelected
                  ? "font-bold text-primary"
                  : "text-primary-content"
              }`}
              onSetActive={() => setIsSelected(label)}
              onClick={toggleMenu}>
              {label}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
