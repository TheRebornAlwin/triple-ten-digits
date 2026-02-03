import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowWereDifferent = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const comparisons = [
    { them: "Sell you a fixed package", us: "Do whatever actually grows your business" },
    { them: "Optimize for clicks and impressions", us: "Obsess over revenue and real outcomes" },
    { them: "Send reports you don't understand", us: "Become partners you can't work without" },
    { them: "Take every client who can pay", us: "Only work with businesses we can transform" },
    { them: "Disappear after you sign", us: "Stay in your corner, always pushing" },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-deep-charcoal" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-6 px-2">
            Typical Agencies vs.
            <span className="text-gradient-flow"> Us</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto px-4">
            Not all agencies are the same. Here's what's different.
          </p>
        </motion.div>

        {/* Side-by-side comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 max-w-5xl mx-auto"
        >
          {/* Them column */}
          <div className="rounded-2xl md:rounded-3xl glass-card p-5 sm:p-6 md:p-8 lg:p-10 border border-white/5">
            <div className="flex items-center gap-2 sm:gap-3 mb-5 md:mb-8">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-red-500" viewBox="0 0 24 24" fill="none">
                  <path d="M8 8L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 8L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-mono text-white/50 uppercase tracking-wide">Typical Agencies</h3>
            </div>
            <ul className="space-y-3 md:space-y-4 lg:space-y-5">
              {comparisons.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-2 md:gap-3"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-red-500/60 flex-shrink-0 mt-0.5 md:mt-1" viewBox="0 0 24 24" fill="none">
                    <path d="M8 8L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 8L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="text-white/50 text-sm md:text-base lg:text-lg leading-relaxed">{item.them}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Us column */}
          <div className="rounded-2xl md:rounded-3xl glass-gold p-5 sm:p-6 md:p-8 lg:p-10 border border-liquid-gold/30">
            <div className="flex items-center gap-2 sm:gap-3 mb-5 md:mb-8">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-liquid-gold/20 flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-liquid-gold" viewBox="0 0 24 24" fill="none">
                  <path d="M7 12L10.5 15.5L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-mono text-liquid-gold uppercase tracking-wide font-semibold">Us</h3>
            </div>
            <ul className="space-y-3 md:space-y-4 lg:space-y-5">
              {comparisons.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-2 md:gap-3"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-liquid-gold flex-shrink-0 mt-0.5 md:mt-1" viewBox="0 0 24 24" fill="none">
                    <path d="M7 12L10.5 15.5L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white font-medium text-sm md:text-base lg:text-lg leading-relaxed">{item.us}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10 md:mt-16 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl glass-gold max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white mb-3 md:mb-4">
            The bottom line?
          </p>
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
            We're partners, not vendors. Your success is our success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWereDifferent;
