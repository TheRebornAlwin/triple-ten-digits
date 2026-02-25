import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ASMRBackground from './ASMRBackground';

const Hero = () => {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 768
  );

  // Detect mobile for background swap
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  // Animated counters
  const [revenue, setRevenue] = useState(0);
  const [roas, setRoas] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const revenueTarget = 1.1;
    const roasTarget = 387;
    const clientsTarget = 23;

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
      {/* Background — ASMR particles on desktop, luxury gradient on mobile */}
      <div className="absolute inset-0">
        {isMobile ? (
          <>
            {/* Base gradient with warm black tones */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(165deg, #0d0a04 0%, #000000 35%, #080604 65%, #0a0702 100%)
                `,
              }}
            />
            {/* Top gold wash */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 100% 55% at 50% -5%, rgba(212, 175, 55, 0.28) 0%, rgba(212, 175, 55, 0.08) 40%, transparent 70%)
                `,
              }}
            />
            {/* Bottom-right warm glow */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 70% 50% at 90% 95%, rgba(212, 175, 55, 0.18) 0%, rgba(180, 140, 30, 0.05) 40%, transparent 70%)
                `,
              }}
            />
            {/* Left accent */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 45% 40% at 5% 55%, rgba(212, 175, 55, 0.10) 0%, transparent 60%)
                `,
              }}
            />
            {/* Center soft ambient glow */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 60% 35% at 50% 45%, rgba(212, 175, 55, 0.09) 0%, transparent 65%)
                `,
              }}
            />
          </>
        ) : (
          <>
            <ASMRBackground />
            <motion.div
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-liquid-gold/10 rounded-full blur-3xl pointer-events-none"
              style={{ x: mousePosition.x, y: mousePosition.y }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-liquid-gold/5 rounded-full blur-3xl pointer-events-none"
              style={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
            />
          </>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-20 max-w-7xl relative z-10">
        {/* Mobile-only: Rhi Aesthetics case study card */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="pt-24 pb-4 px-1"
          >
            <div className="relative glass-card rounded-2xl p-5 border border-liquid-gold/20">
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-liquid-gold/15 border border-liquid-gold/30">
                <span className="text-[9px] text-liquid-gold uppercase tracking-widest font-mono font-medium">Most Recent Case Study</span>
              </div>
              <h3 className="text-lg font-serif font-bold mb-1 text-white">Rhi Aesthetics</h3>
              <p className="text-liquid-gold text-[10px] uppercase tracking-widest font-mono mb-3">Medical Aesthetics</p>
              <ul className="space-y-1.5">
                {['£22k revenue in 90 days', '1.8x transaction value', 'Services waitlist built'].map((result, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-liquid-gold flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                      <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-white/80">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        <div className={`text-center space-y-6 sm:space-y-8 md:space-y-12 ${isMobile ? 'pt-4' : 'pt-24 sm:pt-32 md:pt-40'} pb-12 sm:pb-16 md:pb-24`}>
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mb-4"
          >
            <span className="block text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[120px] font-display font-light text-white leading-[0.95] tracking-tight">
              We Don't Just
            </span>
            <span className="block text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[120px] font-display font-light leading-[0.95] tracking-tight mt-2 sm:mt-4">
              <span className="text-white">Run </span>
              <span className="relative inline-block">
                <span className="text-liquid-gold">Ads.</span>
                <motion.span
                  className="absolute -bottom-1 sm:-bottom-2 md:-bottom-3 left-0 right-0 h-[2px] sm:h-[3px] md:h-[4px] bg-liquid-gold"
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
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/70 font-light leading-relaxed px-2 sm:px-4">
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
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-liquid-gold text-pure-black text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-[0_8px_24px_rgba(212,175,55,0.4)] hover:bg-liquid-gold/90 cursor-pointer"
            >
              <span>Book a Strategy Call</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
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
            className="pt-6 sm:pt-8 md:pt-12"
          >
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-12 max-w-3xl mx-auto border-t border-white/10 pt-6 sm:pt-8 md:pt-10">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-display text-liquid-gold mb-1 font-light">
                    {metric.value}
                  </div>
                  <div className="text-white/40 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider">
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
