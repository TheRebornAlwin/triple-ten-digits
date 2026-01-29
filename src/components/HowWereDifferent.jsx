import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowWereDifferent = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const differences = [
    {
      them: "Sell you a fixed package of services",
      us: "Do whatever your business actually needs to grow",
    },
    {
      them: "Optimize for clicks and impressions",
      us: "Obsess over revenue and real business outcomes",
    },
    {
      them: "Send monthly reports you don't understand",
      us: "Become strategic partners you can't imagine working without",
    },
    {
      them: "Take every client who can pay",
      us: "Work with businesses we genuinely believe we can transform",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-deep-charcoal" />

      {/* Gold gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-display font-serif font-bold mb-6">
            Typical Agencies vs.
            <span className="text-gradient-flow"> Us</span>
          </h2>
          <p className="text-xl md:text-2xl text-chrome-silver/70 max-w-4xl mx-auto">
            We're not your typical marketing agency. Here's exactly how we're different.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {differences.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-6 p-8 rounded-3xl glass-card hover:scale-[1.01] transition-all duration-300"
            >
              {/* Them */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-elevated-surface/50 border border-white/5">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-chrome-silver/60 uppercase tracking-wide mb-2 font-mono">Typical Agencies</p>
                  <p className="text-white/50 text-lg">{item.them}</p>
                </div>
              </div>

              {/* Us */}
              <div className="flex items-start gap-4 p-6 rounded-2xl glass-gold border border-liquid-gold/30">
                <div className="w-10 h-10 rounded-full bg-liquid-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-liquid-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gradient-gold uppercase tracking-wide mb-2 font-mono font-semibold">We</p>
                  <p className="text-white font-medium text-lg">{item.us}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20 p-12 rounded-3xl glass-gold max-w-4xl mx-auto"
        >
          <p className="text-3xl font-serif font-bold text-white mb-4">
            The bottom line?
          </p>
          <p className="text-xl text-chrome-silver/90 leading-relaxed">
            We're strategic partners, not vendors. We care about your business like it's our own, because your success is our success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWereDifferent;
