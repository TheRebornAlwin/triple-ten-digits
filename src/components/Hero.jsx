import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ASMRBackground from './ASMRBackground';

const Hero = () => {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animated counters
  const [revenue, setRevenue] = useState(0);
  const [roas, setRoas] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const revenueTarget = 2.3;
    const roasTarget = 387;
    const clientsTarget = 47;

    const revenueInterval = setInterval(() => {
      setRevenue((prev) => {
        if (prev >= revenueTarget) { clearInterval(revenueInterval); return revenueTarget; }
        return Math.min(prev + 0.05, revenueTarget);
      });
    }, 30);

    const roasInterval = setInterval(() => {
      setRoas((prev) => {
        if (prev >= roasTarget) { clearInterval(roasInterval); return roasTarget; }
        return Math.min(prev + 8, roasTarget);
      });
    }, 30);

    const clientsInterval = setInterval(() => {
      setClients((prev) => {
        if (prev >= clientsTarget) { clearInterval(clientsInterval); return clientsTarget; }
        return Math.min(prev + 1, clientsTarget);
      });
    }, 40);

    return () => {
      clearInterval(revenueInterval);
      clearInterval(roasInterval);
      clearInterval(clientsInterval);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const metrics = [
    { value: `£${revenue.toFixed(1)}M+`, label: 'Revenue Generated' },
    { value: `${roas}%`, label: 'Average ROAS' },
    { value: `${clients}`, label: 'Active Clients' },
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center bg-pure-black overflow-hidden">
      {/* ASMR interactive particle background */}
      <div className="absolute inset-0">
        <ASMRBackground />
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-liquid-gold/10 rounded-full blur-3xl pointer-events-none"
          style={{ x: mousePosition.x, y: mousePosition.y }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-liquid-gold/5 rounded-full blur-3xl pointer-events-none"
          style={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
        />
      </div>

      <div className="container mx-auto px-8 lg:px-20 max-w-7xl relative z-10">
        <div className="text-center space-y-10 md:space-y-12 pt-32 md:pt-40 pb-16 md:pb-24">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mb-4"
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
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 font-light leading-relaxed px-4">
              Strategic marketing for ambitious businesses who want <span className="text-liquid-gold font-medium">massive, measurable results</span>.
            </p>
          </motion.div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-2"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); Calendly.initPopupWidget({ url: 'https://calendly.com/alwinchen-business/discovery-call' }); }}
              className="group inline-flex items-center gap-3 px-8 sm:px-12 py-5 sm:py-6 bg-liquid-gold text-pure-black text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-[0_8px_24px_rgba(212,175,55,0.4)] hover:bg-liquid-gold/90 cursor-pointer"
            >
              <span>Book a Strategy Call</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M14 6L20 12L14 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-8 md:pt-12"
          >
            <div className="grid grid-cols-3 gap-4 md:gap-12 max-w-3xl mx-auto border-t border-white/10 pt-10">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl md:text-5xl font-display text-liquid-gold mb-1 font-light">
                    {metric.value}
                  </div>
                  <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
