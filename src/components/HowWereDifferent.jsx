import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowWereDifferent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const differences = [
    {
      them: 'Sell you a fixed package of services',
      us: 'Do whatever your business actually needs to grow',
    },
    {
      them: 'Optimize for clicks and impressions',
      us: 'Obsess over revenue and real business outcomes',
    },
    {
      them: "Send monthly reports you don't understand",
      us: "Become strategic partners you can't imagine working without",
    },
    {
      them: 'Take every client who can pay',
      us: 'Work with businesses we genuinely believe we can transform',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden grain-texture">
      <div className="absolute inset-0 bg-luxury-black" />

      {/* Accent Shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-display font-bold mb-6">
            Typical Agencies vs.
            <span className="text-gradient"> Us</span>
          </h2>
          <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
            We're not your typical marketing agency. Here's exactly how we're different.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {differences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 p-8 rounded-2xl bg-luxury-charcoal/30 border border-luxury-gray-dark/20 hover:border-luxury-gold/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-luxury-gray uppercase tracking-wide mb-2">Typical Agencies</p>
                  <p className="text-white/60">{item.them}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gradient uppercase tracking-wide mb-2 font-semibold">We</p>
                  <p className="text-white font-medium">{item.us}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-bold text-white mb-4">
            The bottom line?
          </p>
          <p className="text-xl text-luxury-gray max-w-2xl mx-auto">
            We're strategic partners, not vendors. We care about your business like it's our own—because your success is our success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWereDifferent;
