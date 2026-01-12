import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhatToExpect = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const expectations = [
    {
      title: "Honest Feedback (Even If It Hurts)",
      description: "We're not yes-men. If your pricing is wrong, your offer is weak, or your expectations are unrealistic—we'll tell you. Because real growth requires real honesty.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: "Zero Jargon Bullshit",
      description: "We explain everything in plain English. No hiding behind terms like 'synergy' or 'brand activation.' You'll understand exactly what we're doing and why.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Real Partnership, Not Just Service",
      description: "You're not a ticket number. We become invested in your success like it's our own business—because your growth is literally our business model.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Results You Can Actually Track",
      description: "Forget vanity metrics. We focus on what matters: revenue, bookings, leads, sales. The stuff that pays your bills, not makes pretty graphs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "No Long-Term Contracts",
      description: "Month-to-month. If we're not delivering, you can walk. We earn your business every single month—that's how it should be.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "We Only Win When You Win",
      description: "Your success is our portfolio. We don't take clients we can't help. If we don't think we can transform your business, we'll tell you upfront.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-deep-charcoal" />

      {/* Ambient background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-8 lg:px-20 max-w-8xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight mb-6">
            What Working With Us
            <br />
            <span className="text-liquid-gold">Actually Looks Like</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
            You've been burned before. Here's exactly what to expect from us—
            <span className="text-white"> no marketing fluff</span>.
          </p>
        </motion.div>

        {/* Expectations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expectations.map((item, index) => (
            <div
              key={index}
              className="group glass-card rounded-3xl p-8 lg:p-10 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-liquid-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-3xl border border-white/5 group-hover:border-liquid-gold/40 transition-all duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-liquid-gold/10 flex items-center justify-center text-liquid-gold mb-6 group-hover:bg-liquid-gold/20 transition-colors duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-light text-white mb-4 leading-tight group-hover:text-liquid-gold transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base text-white/60 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-liquid-gold/10 border border-liquid-gold/30">
            <div className="w-3 h-3 rounded-full bg-liquid-gold animate-pulse" />
            <span className="text-white font-light text-lg">
              No BS. No excuses. Just growth.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatToExpect;
