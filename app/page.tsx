import AboutMe from "./components/AboutMe";
import NavBar from "./components/layout/NavBar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Footer from "./components/layout/Footer";
import Contact from "./components/Contact";
import ImageSection from "./components/layout/ImageSection";
import Projects from "./components/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="fle flex-col md:flex-row relative">
      <section className="md:w-7/12 flex flex-col">
        <NavBar />
        <ImageSection />
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </main>
  );
}
