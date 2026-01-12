import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import HowWereDifferent from './components/HowWereDifferent';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { initLayoutDebugger } from './utils/layoutDebugger';

function App() {
  useEffect(() => {
    // Initialize comprehensive layout debugging
    initLayoutDebugger();
  }, []);

  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <HowWereDifferent />
        <Portfolio />
        <Testimonials />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
