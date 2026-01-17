import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const ctaRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Magnetic button effect
    const btn = ctaRef.current;
    if (btn) {
      const handleButtonHover = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: 'power2.out'
        });
      };

      const handleButtonLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)'
        });
      };

      btn.addEventListener('mousemove', handleButtonHover);
      btn.addEventListener('mouseleave', handleButtonLeave);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        btn.removeEventListener('mousemove', handleButtonHover);
        btn.removeEventListener('mouseleave', handleButtonLeave);
      };
    }
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center bg-pure-black overflow-hidden">
      {/* Dynamic ambient background with parallax */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-liquid-gold/20 rounded-full blur-3xl"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-liquid-gold/10 rounded-full blur-3xl"
          style={{
            x: mousePosition.x * -0.5,
            y: mousePosition.y * -0.5,
          }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container mx-auto px-8 lg:px-20 max-w-7xl relative z-10">
        <div className="text-center space-y-12 md:space-y-14">
          {/* Dynamic headline with word stagger */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mb-8"
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-display font-light text-white leading-[0.95] tracking-tight">
              We Don't Just
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-display font-light leading-[0.95] tracking-tight mt-4">
              <span className="text-white">Run </span>
              <span className="relative inline-block">
                <span className="text-liquid-gold">Ads.</span>
                <motion.span
                  className="absolute -bottom-3 left-0 right-0 h-[4px] bg-liquid-gold"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
            </span>
          </motion.h1>

          {/* Objection-handling subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 font-light leading-relaxed px-4">
              Strategic marketing partners for ambitious businesses who are tired of pretty reports and want <span className="text-liquid-gold font-medium">massive, measurable results</span>.
            </p>
          </motion.div>

          {/* Magnetic CTA button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6"
          >
            <a
              ref={ctaRef}
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 sm:px-12 py-5 sm:py-6 bg-liquid-gold text-pure-black text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-[0_20px_60px_rgba(212,175,55,0.6)] hover:bg-liquid-gold/90 cursor-pointer"
            >
              <span>Book a Strategy Call</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-white/30 text-base mt-6 font-light">
              30-min call • No pressure • Honest feedback guaranteed
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
