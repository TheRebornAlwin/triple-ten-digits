import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from './TextReveal';
import InfiniteGrid from './InfiniteGrid';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Paid Ads That Print Money',
    objection: 'Not another agency promising ROI...',
    description: "Meta, Google, TikTok. We obsessively optimize every campaign for revenue, not vanity metrics. Your bottom line is our only KPI.",
    metrics: ['218% ROAS', '£6.5k in 30 days'],
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        {/* Money printing/growth chart icon */}
        <defs>
          <linearGradient id="chartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {/* Rising bars with glow effect */}
        <rect x="6" y="30" width="8" height="14" rx="1" fill="url(#chartGrad)" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="22" width="8" height="22" rx="1" fill="url(#chartGrad)" stroke="currentColor" strokeWidth="1.5" />
        <rect x="30" y="12" width="8" height="32" rx="1" fill="url(#chartGrad)" stroke="currentColor" strokeWidth="1.5" />
        {/* Upward arrow */}
        <path d="M40 8L44 4L44 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M44 4L38 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 4L30 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
        {/* Currency symbol */}
        <circle cx="10" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M10 5V11M8 7H12M8 9H12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Websites That Actually Sell',
    objection: 'My current site looks fine though...',
    description: "Not a digital brochure, but a sales machine engineered with conversion psychology that works 24/7. Pretty doesn't pay the bills.",
    metrics: ['124% ↑ conversions', '3.2x transaction value'],
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        {/* Browser window with conversion funnel */}
        <rect x="4" y="6" width="40" height="36" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M4 14H44" stroke="currentColor" strokeWidth="1.5" />
        {/* Browser dots */}
        <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="16" cy="10" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="22" cy="10" r="1.5" fill="currentColor" opacity="0.5" />
        {/* Conversion funnel inside */}
        <path d="M14 20H34L30 30H18L14 20Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M18 30H30L26 38H22L18 30Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Arrow down showing conversion */}
        <path d="M24 32V36M22 34L24 36L26 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Sparkle */}
        <path d="M38 22L40 20L42 22L40 24L38 22Z" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Creative That Stops the Scroll',
    objection: 'I can just use Canva...',
    description: "Your audience is bombarded with 10,000 ads daily. We create thumb-stopping visuals and copy that make people stop, think, and buy.",
    metrics: ['6x engagement', '89% watch time'],
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        {/* Hand stopping scroll / thumb with phone */}
        <rect x="14" y="4" width="20" height="40" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M14 10H34" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path d="M14 38H34" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        {/* Eye/attention icon in center */}
        <ellipse cx="24" cy="24" rx="8" ry="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        {/* Radiating attention lines */}
        <path d="M10 18L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 30L6 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 18L42 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 30L42 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Sparkles */}
        <circle cx="8" cy="24" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="40" cy="24" r="1.5" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Strategy That Actually Works',
    objection: 'Do I really need a strategist?',
    description: "Sometimes you need a complete rethink. We tell you what you NEED to hear, not what you want to hear. No fluff, just growth.",
    metrics: ['£34k new contracts', '6 weeks booked'],
    icon: (
      <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
        {/* Chess knight / strategic thinking icon */}
        <defs>
          <linearGradient id="knightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* Chess knight silhouette */}
        <path d="M16 40H32V36C32 36 34 34 34 30C34 26 32 24 30 22L32 16C32 16 28 14 26 14C26 14 28 10 26 8C24 6 20 8 20 8L18 12C18 12 14 14 14 20C14 26 16 28 16 32V40Z"
          stroke="currentColor" strokeWidth="1.5" fill="url(#knightGrad)" strokeLinejoin="round" />
        {/* Eye */}
        <circle cx="22" cy="16" r="1.5" fill="currentColor" />
        {/* Base platform */}
        <rect x="12" y="40" width="24" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Strategic nodes/connections */}
        <circle cx="40" cy="12" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="42" cy="24" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M37 14L40 22" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
        <circle cx="8" cy="28" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
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
    <section ref={ref} className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-pure-black overflow-hidden">
      {/* Interactive infinite grid background */}
      <InfiniteGrid />
      <div className="absolute top-1/2 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 max-w-8xl relative z-10">
        {/* Section header with objection handling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-[10px] sm:text-xs text-white/30 uppercase tracking-[0.25em] sm:tracking-[0.3em]">What We Do</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-center mb-4 md:mb-6 text-white leading-tight px-2">
            Everything You Need
            <br />
            <span className="text-white/40">(When It Makes Sense)</span>
          </h2>

          <TextReveal className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-white/50 max-w-3xl mx-auto font-light leading-relaxed px-4">
            We're not boxed into services. We're strategic partners who do whatever your business needs to actually grow.
          </TextReveal>
        </motion.div>

        {/* Dynamic card grid - breaking the standard grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative glass-card rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-liquid-gold/10 via-liquid-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Dynamic border glow */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/5 group-hover:border-liquid-gold/40 transition-all duration-500" />

              {/* Floating icon */}
              <div className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-20 md:h-20 text-white opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4 md:space-y-6">
                {/* Objection callout */}
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="text-[10px] md:text-xs text-white/40 italic">"{service.objection}"</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-light text-white leading-tight group-hover:text-liquid-gold transition-colors duration-300 pr-8 md:pr-0">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base lg:text-lg text-white/60 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 md:gap-4 pt-2 md:pt-4">
                  {service.metrics.map((metric, i) => (
                    <div key={i} className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-liquid-gold/10 border border-liquid-gold/20">
                      <span className="text-xs md:text-sm font-medium text-liquid-gold">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-liquid-gold" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M14 6L20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="20" cy="12" r="2" fill="currentColor" opacity="0.3" />
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
