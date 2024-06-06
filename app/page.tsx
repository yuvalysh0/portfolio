import AboutMe from './components/AboutMe';
import NavBar from './components/layout/NavBar';
import profilePic from './assets/images/profile-picture.jpg';
import Image from 'next/image';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="flex">
      <section className="w-7/12 flex flex-col">
        <NavBar />
        <Hero />
        <AboutMe />
      </section>
      <section className="fixed right-0 top-0 h-full flex items-center justify-center bg-rose-300 w-5/12">
        <Image
          className="sticky object-cover rounded-3xl overflow-hidden w-64 drop-shadow-2xl shadow-slate-400 hover:border-2 hover:border-rose-400 transition-all duration-200 hover:scale-105"
          src={profilePic}
          alt="Profile Picture"
        />
      </section>
    </main>
  );
}
