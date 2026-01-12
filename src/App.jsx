import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
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
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
