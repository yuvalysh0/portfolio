import "./globals.css";
import { poppins } from "../utils/fonts";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import LoadingScreen from "./components/LoadingScreen";
import BackToTop from "./components/BackToTop";
import EasterEggs from "./components/EasterEggs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Yuval Shalom - Frontend Developer",
    template: "%s | Yuval Shalom",
  },
  description:
    "Frontend Developer with 4 years of experience building sports data dashboards, payment systems, and web applications. Specialized in Angular, React, and modern web technologies.",
  keywords: [
    "Frontend Developer",
    "Angular Developer",
    "React Developer",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Sports Data Visualization",
  ],
  authors: [{ name: "Yuval Shalom" }],
  creator: "Yuval Shalom",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yuvalshalom.com",
    title: "Yuval Shalom - Frontend Developer",
    description:
      "Frontend Developer specializing in Angular, React, and sports data visualization. Building high-performance web applications with modern technologies.",
    siteName: "Yuval Shalom Portfolio",
    images: [
      {
        url: "/assets/images/profile-picture.jpg",
        width: 1200,
        height: 630,
        alt: "Yuval Shalom - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuval Shalom - Frontend Developer",
    description:
      "Frontend Developer specializing in Angular, React, and sports data visualization.",
    images: ["/assets/images/profile-picture.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="portfolio-light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'portfolio-dark' : 'portfolio-light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className={poppins.className} suppressHydrationWarning>
        <LoadingScreen />
        <BackToTop />
        <EasterEggs />
        <main className="flex flex-col md:flex-row relative w-full min-h-screen">
          <section className="w-full md:w-7/12 flex flex-col">
            <LayoutWrapper>{children}</LayoutWrapper>
          </section>
        </main>
      </body>
    </html>
  );
}
