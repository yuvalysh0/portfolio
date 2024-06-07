import AboutMe from './components/AboutMe';
import NavBar from './components/layout/NavBar';
import Image from 'next/image';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Footer from './components/layout/Footer';
import Contact from './components/Contact';
import ImageSection from './components/layout/ImageSection';

export default function Home() {
  return (
    <main className="fle flex-col md:flex-row relative">
      <section className="md:w-7/12 flex flex-col">
        <NavBar />
        <ImageSection />
        <Hero />
        <AboutMe />
        <Experience />
        <Contact />
        <Footer />
      </section>
    </main>
  );
}
