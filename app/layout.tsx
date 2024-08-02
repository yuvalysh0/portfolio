import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "../utils/fonts";
import NavBar from "./components/layout/NavBar";
import ImageSection from "./components/layout/ImageSection";
import LayoutWrapper from "./components/layout/LayoutWrapper";

export const metadata: Metadata = {
  title: "Yuval Shalom's Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="fle flex-col md:flex-row relative">
          <section className="md:w-7/12 flex flex-col">
            <LayoutWrapper>{children}</LayoutWrapper>
          </section>
        </main>
      </body>
    </html>
  );
}
