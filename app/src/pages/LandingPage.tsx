import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Location from '../components/Location';
import Speakers from '../components/Speakers';
import ProgramFlow from '../components/ProgramFlow';
import CreativeWriting from '../components/CreativeWriting';
import Partners from '../components/Partners';
import FAQs from '../components/FAQs';

const LandingPage = () => {
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
        <FAQs />
      </main>
    </>
  );
};

export default LandingPage;
