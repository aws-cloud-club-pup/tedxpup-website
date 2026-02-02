import Navbar from '../components/features/Navbar';
import Hero from '../components/features/Hero';
import About from '../components/features/About';
import Location from '../components/features/Location';
import Speakers from '../components/features/Speakers';
import ProgramFlow from '../components/features/ProgramFlow';
import CreativeWriting from '../components/features/CreativeWriting';
import Partners from '../components/features/Partners';
import FAQs from '../components/features/FAQs';
import Footer from '../components/features/Footer';
import TitoWidget from '../components/features/TitoWidget';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LandingPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Location />
        <Speakers />
        <ProgramFlow />
        <CreativeWriting />
        <Partners />
        <section id="tickets" className="py-12 bg-black">
           <TitoWidget /> 
        </section>
        <FAQs />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
