import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import ScrollToTop from './components/ScrollToTop';
import { initLayoutDebugger } from './utils/layoutDebugger';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <TrustBar />
        <WhoThisIsFor />
        <WhatWeDo />
        <HowWereDifferent />
        <Portfolio />
        <Founders />
        <Testimonials />
        <WhatToExpect />
        <TimeRunningOut />
        <Process />
        <About />
        <CTA />
      </main>
    </>
  );
}

function App() {
  useEffect(() => {
    initLayoutDebugger();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
