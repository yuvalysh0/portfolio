"use client";
import React from "react";
import NavBar from "./NavBar";
import ImageSection from "./ImageSection";
import { usePathname } from "next/navigation";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" && <NavBar />}
      {pathname === "/" && <ImageSection />}
      {children}
    </>
  );
};

export default LayoutWrapper;
