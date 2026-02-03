import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhatToExpect = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const expectations = [
    {
      title: "Honest Feedback",
      description: "We're not going to tell you what you want to hear. If your pricing is off, your offer needs work, or something isn't going to fly, we'll say so. That's how we actually help.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M6 6H26C27.1 6 28 6.9 28 8V20C28 21.1 27.1 22 26 22H18L12 28V22H6C4.9 22 4 21.1 4 20V8C4 6.9 4.9 6 6 6Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M16 18C16 18 11 14.5 11 12C11 10.5 12.5 9 14 9C15 9 15.7 9.5 16 10C16.3 9.5 17 9 18 9C19.5 9 21 10.5 21 12C21 14.5 16 18 16 18Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Plain English",
      description: "No confusing marketing speak, no acronyms thrown around to sound smart. We explain everything so you actually understand what's happening with your money.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="4" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M10 10H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 14H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <path d="M10 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <circle cx="22" cy="22" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M19 22L21 24L25 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Actual Partnership",
      description: "You're not a ticket number to us. We get invested in your business because when you grow, we grow. It's that simple.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M4 16L10 10L14 14L18 10L22 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M28 16L22 22L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M6 20C6 20 8 18 10 18C12 18 13 19 14 19C15 19 16 18 16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M26 20C26 20 24 18 22 18C20 18 19 19 18 19C17 19 16 18 16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <circle cx="16" cy="18" r="2" fill="currentColor" opacity="0.4" />
        </svg>
      ),
    },
    {
      title: "Results You Can See",
      description: "Revenue, bookings, leads, sales — the stuff that actually matters to your business. Not impressions and click-through rates that mean nothing to your bank account.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M8 20L12 16L16 18L20 12L24 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="16" r="1.5" fill="currentColor" />
          <circle cx="20" cy="12" r="1.5" fill="currentColor" />
          <circle cx="24" cy="10" r="3" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
          <circle cx="24" cy="10" r="1" fill="currentColor" opacity="0.6" />
        </svg>
      ),
    },
    {
      title: "Month-to-Month",
      description: "No long contracts locking you in. If we're not delivering, you can leave. We earn your business every single month — that's how it should be.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <rect x="8" y="14" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M12 14V10C12 7.8 13.8 6 16 6C18.2 6 20 7.8 20 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M16 20L14 22L16 24L18 22L16 20Z" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.4" />
          <path d="M24 8L26 6M26 8L24 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        </svg>
      ),
    },
    {
      title: "We Say No",
      description: "If we don't think we can genuinely help your business, we'll tell you upfront. We only take on clients we know we can get results for.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M10 6H22V12C22 15.3 19.3 18 16 18C12.7 18 10 15.3 10 12V6Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M10 8H8C6.9 8 6 8.9 6 10C6 11.1 6.9 12 8 12H10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M22 8H24C25.1 8 26 8.9 26 10C26 11.1 25.1 12 24 12H22" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M14 18V22H18V18" stroke="currentColor" strokeWidth="1.5" />
          <rect x="12" y="22" width="8" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M16 9L17 11L19 11L17.5 12.5L18 14.5L16 13L14 14.5L14.5 12.5L13 11L15 11L16 9Z" fill="currentColor" opacity="0.6" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-deep-charcoal" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-8 lg:px-20 max-w-8xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-tight mb-6">
            What Working With Us
            <br />
            <span className="text-liquid-gold">Actually Looks Like</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            You've probably been burned before. Here's what you can expect from us.
          </p>
        </motion.div>

        {/* Expectations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expectations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              className="group glass-card rounded-3xl p-8 lg:p-10 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-liquid-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-3xl border border-white/5 group-hover:border-liquid-gold/40 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-liquid-gold/10 flex items-center justify-center text-liquid-gold mb-6 group-hover:bg-liquid-gold/20 transition-colors duration-300">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-serif font-light text-white mb-4 leading-tight group-hover:text-liquid-gold transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-base text-white/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
