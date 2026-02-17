import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Footer from "./components/layout/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yuval Shalom",
    jobTitle: "Frontend Developer",
    description:
      "Frontend Developer with 4 years of experience building sports data dashboards, payment systems, and web applications.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yuvalshalom.com",
    image: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://yuvalshalom.com"
    }/assets/images/profile-picture.jpg`,
    sameAs: [
      "https://www.linkedin.com/in/yuvalshalom/",
      "https://x.com/yuvalysh0",
      "https://github.com/yuvalysh0",
    ],
    knowsAbout: [
      "Frontend Development",
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "Sports Data Visualization",
      "Web Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "LSports",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <AboutMe />
      <Statistics />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
