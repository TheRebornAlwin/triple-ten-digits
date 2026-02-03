import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const testimonials = [
  {
    quote: "They didn't just run our ads. They changed how we think about growth. Fully booked within two months.",
    author: "Sarah Mitchell",
    role: "Owner",
    company: "Rejuvenating Touch",
    result: "6 bookings in first month",
  },
  {
    quote: "Finally, an agency that tells you what you need to hear. The ROI speaks for itself. $13.8k in the first month alone.",
    author: "David Chen",
    role: "Founder",
    company: "Fake Plastic Chairs",
    result: "$13,800 revenue, 387% ROAS",
  },
  {
    quote: "We were skeptical about digital. They proved us wrong fast. $89k in new contracts and we're booked 4 months ahead.",
    author: "Chris Evans",
    role: "Director",
    company: "C&M Evans Concrete",
    result: "$89k in contracts",
  },
  {
    quote: "Our social media was dead. Now we're the go-to smart home company in our area. The landing page they built converts like crazy.",
    author: "James Morrison",
    role: "Owner",
    company: "Infinity Smart Homes",
    result: "12x social engagement",
  },
  {
    quote: "They positioned us as the premium option in a crowded market. The Meta ads are printing money.",
    author: "Michael Torres",
    role: "Director",
    company: "Electromain",
    result: "$62k in new projects",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  const numberX = useTransform(x, [-200, 200], [-20, 20]);
  const numberY = useTransform(y, [-200, 200], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];
  const allCompanies = [...testimonials.map(t => t.company), 'Delston Roofing', 'Mack D Studios', 'Rhi Aesthetics'];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-pure-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 max-w-7xl relative z-10">
        <div
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto"
          onMouseMove={handleMouseMove}
        >
          {/* Oversized index number - hidden on small mobile */}
          <motion.div
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 text-[12rem] sm:text-[16rem] md:text-[20rem] lg:text-[28rem] font-bold text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter hidden sm:block"
            style={{ x: numberX, y: numberY }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {String(activeIndex + 1).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Main content */}
          <div className="relative flex">
            {/* Left column - vertical text - hidden on mobile */}
            <div className="hidden md:flex flex-col items-center justify-center pr-12 lg:pr-16 border-r border-white/10">
              <motion.span
                className="text-xs font-mono text-white/40 tracking-widest uppercase"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Testimonials
              </motion.span>

              {/* Vertical progress line */}
              <div className="relative h-24 lg:h-32 w-px bg-white/10 mt-8">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-liquid-gold origin-top"
                  animate={{ height: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Center - main content */}
            <div className="flex-1 md:pl-12 lg:pl-16 py-8 md:py-12">
              {/* Company badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6 md:mb-8"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-white/50 border border-white/10 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-liquid-gold" />
                    {current.company}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Quote */}
              <div className="relative mb-8 md:mb-12 min-h-[100px] md:min-h-[140px]">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeIndex}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-light text-white leading-[1.2] tracking-tight"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {current.quote.split(' ').map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-[0.25em]"
                        variants={{
                          hidden: { opacity: 0, y: 20, rotateX: 90 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            transition: { duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
                          },
                          exit: {
                            opacity: 0,
                            y: -10,
                            transition: { duration: 0.2, delay: i * 0.015 },
                          },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Result highlight */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="mb-6 md:mb-8"
                >
                  <span className="text-sm text-liquid-gold font-mono font-semibold">
                    {current.result}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Author row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      className="w-6 md:w-8 h-px bg-liquid-gold"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      style={{ originX: 0 }}
                    />
                    <div>
                      <p className="text-sm md:text-base font-medium text-white">{current.author}</p>
                      <p className="text-xs md:text-sm text-white/50">{current.role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <motion.button
                    onClick={goPrev}
                    className="group relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center overflow-hidden hover:border-liquid-gold/40 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="relative z-10 text-white/60 group-hover:text-liquid-gold transition-colors">
                      <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.button>

                  <motion.button
                    onClick={goNext}
                    className="group relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center overflow-hidden hover:border-liquid-gold/40 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="relative z-10 text-white/60 group-hover:text-liquid-gold transition-colors">
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom ticker */}
          <div className="absolute -bottom-12 md:-bottom-16 left-0 right-0 overflow-hidden opacity-[0.15] pointer-events-none">
            <motion.div
              className="flex whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/80"
              animate={{ x: [0, -1500] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {[...Array(6)].map((_, i) => (
                <span key={i} className="mx-6 md:mx-8">
                  {allCompanies.join(' \u2726 ')} \u2726
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
