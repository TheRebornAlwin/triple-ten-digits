import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const sublineRef = useRef(null);

  useEffect(() => {
    // Character-by-character text reveal
    if (headlineRef.current && sublineRef.current) {
      const headlineSplit = new SplitType(headlineRef.current, { types: 'chars' });
      const sublineSplit = new SplitType(sublineRef.current, { types: 'chars,words' });

      gsap.from(headlineSplit.chars, {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.02,
        duration: 1,
        ease: 'expo.out',
        delay: 0.3
      });

      gsap.from(sublineSplit.words, {
        opacity: 0,
        y: 30,
        stagger: 0.03,
        duration: 0.8,
        ease: 'expo.out',
        delay: 1.2
      });
    }

    // Mesh gradient animation
    gsap.to('.mesh-gradient-bg', {
      backgroundPosition: '100% 50%',
      duration: 20,
      ease: 'none',
      repeat: -1,
      yoyo: true
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture"
    >
      {/* Animated Mesh Gradient Background */}
      <div
        className="mesh-gradient-bg absolute inset-0"
        style={{
          background: 'radial-gradient(at 27% 37%, rgba(212, 175, 55, 0.3) 0px, transparent 50%), radial-gradient(at 97% 21%, rgba(164, 119, 100, 0.15) 0px, transparent 50%), radial-gradient(at 52% 99%, rgba(0, 0, 0, 1) 0px, transparent 50%), radial-gradient(at 10% 29%, rgba(212, 175, 55, 0.2) 0px, transparent 50%)',
          backgroundSize: '400% 400%'
        }}
      />

      {/* Floating Gold Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(164, 119, 100, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-serif font-bold mb-8 leading-[0.95]"
          >
            <span className="text-white">We Don't Just Run Ads.</span>
            <br />
            <span className="text-gradient-flow luxury-glow-strong">
              We Build Growth Machines.
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            ref={sublineRef}
            className="text-xl md:text-2xl lg:text-3xl text-chrome-silver/80 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Strategic marketing partners for ambitious businesses. We do whatever it takes to drive real,
            measurable growth—not just check boxes on a service list.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6, ease: 'backOut' }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-14 py-6 rounded-full bg-liquid-gold text-pure-black text-lg md:text-xl font-bold transition-all duration-300 hover:shadow-glow-gold hover:scale-105"
            >
              Let's Talk Growth
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-32 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span className="text-sm text-chrome-silver/60 uppercase tracking-[0.3em] font-mono">
              Scroll to explore
            </span>
            <motion.div
              className="w-7 h-12 border-2 border-liquid-gold rounded-full flex items-start justify-center p-2"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <motion.div
                className="w-2 h-2 bg-liquid-gold rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #000000, transparent)'
        }}
      />
    </section>
  );
};

export default Hero;
