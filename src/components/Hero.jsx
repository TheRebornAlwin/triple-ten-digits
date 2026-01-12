import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const sublineRef = useRef(null);

  useEffect(() => {
    // Simple fade-in for headline
    if (headlineRef.current && sublineRef.current) {
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.2
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
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            <span className="text-white">We Don't Just Run Ads.</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            ref={sublineRef}
            className="text-lg md:text-xl lg:text-2xl text-chrome-silver/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Strategic marketing partners for ambitious businesses. We do whatever it takes to drive real,
            measurable growth—not just check boxes on a service list.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4, ease: 'backOut' }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-liquid-gold text-pure-black text-lg font-bold transition-all duration-300 hover:shadow-glow-gold hover:scale-105"
            >
              Let's Talk Growth
              <svg
                className="w-5 h-5"
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
            className="mt-20 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
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
