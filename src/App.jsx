import SmoothScroll from './components/SmoothScroll';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import HowWereDifferent from './components/HowWereDifferent';
import Portfolio from './components/Portfolio';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <SmoothScroll>
      <div className="relative">
        <Header />
        <main>
          <Hero />
          <WhatWeDo />
          <HowWereDifferent />
          <Portfolio />
          <WhoWeWorkWith />
          <Testimonials />
          <Process />
          <About />
          <CTA />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
