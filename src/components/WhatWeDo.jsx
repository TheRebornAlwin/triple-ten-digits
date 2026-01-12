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
    icon: '📊',
  },
  {
    title: 'Websites That Actually Sell',
    objection: 'My current site looks fine though...',
    description: "Not a digital brochure—a sales machine engineered with conversion psychology that works 24/7. Pretty doesn't pay the bills.",
    metrics: ['124% ↑ conversions', '3.2x transaction value'],
    icon: '⚡',
  },
  {
    title: 'Creative That Stops the Scroll',
    objection: 'I can just use Canva...',
    description: "Your audience is bombarded with 10,000 ads daily. We create thumb-stopping visuals and copy that make people stop, think, and buy.",
    metrics: ['6x engagement', '89% watch time'],
    icon: '🎯',
  },
  {
    title: 'Strategy That Actually Works',
    objection: 'Do I really need a strategist?',
    description: "Sometimes you need a complete rethink. We tell you what you NEED to hear, not what you want to hear. No fluff, just growth.",
    metrics: ['£89k new contracts', '4 months booked'],
    icon: '🚀',
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
    <section ref={ref} className="relative py-48 bg-pure-black overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-8 lg:px-20 max-w-8xl relative z-10">
        {/* Section header with objection handling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-28"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-xs text-white/30 uppercase tracking-[0.3em]">What We Do</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-center mb-8 text-white leading-[0.95]">
            Everything You Need
            <br />
            <span className="text-white/40">(When It Makes Sense)</span>
          </h2>

          <p className="text-xl md:text-2xl text-center text-white/50 max-w-4xl mx-auto font-light leading-relaxed">
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
              <div className="absolute top-10 right-10 text-6xl opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
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
