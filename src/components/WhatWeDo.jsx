import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Paid Ads That Print Money',
    objection: 'Not another agency promising ROI...',
    description: "Meta, Google, TikTok—we obsessively optimize every campaign for revenue, not vanity metrics. Your bottom line is our only KPI.",
    metrics: ['387% ROAS', '£13.8k in 30 days'],
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Websites That Actually Sell',
    objection: 'My current site looks fine though...',
    description: "Not a digital brochure—a sales machine engineered with conversion psychology that works 24/7. Pretty doesn't pay the bills.",
    metrics: ['124% ↑ conversions', '3.2x transaction value'],
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Creative That Stops the Scroll',
    objection: 'I can just use Canva...',
    description: "Your audience is bombarded with 10,000 ads daily. We create thumb-stopping visuals and copy that make people stop, think, and buy.",
    metrics: ['6x engagement', '89% watch time'],
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Strategy That Actually Works',
    objection: 'Do I really need a strategist?',
    description: "Sometimes you need a complete rethink. We tell you what you NEED to hear, not what you want to hear. No fluff, just growth.",
    metrics: ['£89k new contracts', '4 months booked'],
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

const WhatWeDo = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const cardsRef = useRef([]);

  useEffect(() => {
    if (inView) {
      // Staggered card reveals with GSAP
      gsap.fromTo(
        cardsRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: 'top 80%',
          },
        }
      );
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 md:py-32 bg-pure-black overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-20 max-w-8xl relative z-10">
        {/* Section header with objection handling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-xs text-white/30 uppercase tracking-[0.3em]">What We Do</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-center mb-6 text-white leading-tight px-4">
            Everything You Need
            <br />
            <span className="text-white/40">(When It Makes Sense)</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-center text-white/50 max-w-3xl mx-auto font-light leading-relaxed px-4">
            We're not boxed into services. We're strategic partners who do whatever your business needs to{' '}
            <span className="text-liquid-gold">actually grow</span>.
          </p>
        </motion.div>

        {/* Dynamic card grid - breaking the standard grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative glass-card rounded-3xl p-10 lg:p-12 overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-liquid-gold/10 via-liquid-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Dynamic border glow */}
              <div className="absolute inset-0 rounded-3xl border border-white/5 group-hover:border-liquid-gold/40 transition-all duration-500" />

              {/* Floating icon */}
              <div className="absolute top-10 right-10 w-20 h-20 text-white opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Objection callout */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="text-xs text-white/40 italic">"{service.objection}"</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-serif font-light text-white leading-tight group-hover:text-liquid-gold transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base lg:text-lg text-white/60 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Metrics */}
                <div className="flex gap-4 pt-4">
                  {service.metrics.map((metric, i) => (
                    <div key={i} className="px-4 py-2 rounded-lg bg-liquid-gold/10 border border-liquid-gold/20">
                      <span className="text-sm font-medium text-liquid-gold">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                <svg className="w-6 h-6 text-liquid-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
