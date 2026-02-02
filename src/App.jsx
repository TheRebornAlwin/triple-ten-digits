import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import BigMarquee from './components/BigMarquee';
import WhoThisIsFor from './components/WhoThisIsFor';
import WhatWeDo from './components/WhatWeDo';
import HowWereDifferent from './components/HowWereDifferent';
import Portfolio from './components/Portfolio';
import Founders from './components/Founders';
import Testimonials from './components/Testimonials';
import WhatToExpect from './components/WhatToExpect';
import TimeRunningOut from './components/TimeRunningOut';
import Process from './components/Process';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { initLayoutDebugger } from './utils/layoutDebugger';

function App() {
  useEffect(() => {
    initLayoutDebugger();
  }, []);

  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhoThisIsFor />
        <BigMarquee text={"GROWTH \u2726 RESULTS \u2726 REVENUE"} direction="left" />
        <WhatWeDo />
        <HowWereDifferent />
        <Portfolio />
        <BigMarquee text={"REAL RESULTS FOR REAL BUSINESSES"} direction="right" />
        <Founders />
        <Testimonials />
        <WhatToExpect />
        <TimeRunningOut />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
