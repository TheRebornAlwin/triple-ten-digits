import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-pure-black" />

      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-liquid-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-liquid-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 text-white leading-tight">
            Why We Built This
          </h2>
        </motion.div>

        {/* Story content */}
        <div className="space-y-8 max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-white/80 font-light leading-relaxed"
          >
            We kept seeing the same thing over and over — smart business owners getting ripped off by agencies that didn't care about results, just about collecting their monthly retainer.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 font-light leading-relaxed"
          >
            Reports full of numbers that meant nothing. Copy-paste strategies. Excuses instead of outcomes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl text-liquid-gold font-serif font-light leading-relaxed"
          >
            So we built something different.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-white font-light leading-relaxed"
          >
            An agency that actually gives a damn. That measures success by <em className="text-liquid-gold not-italic font-medium">your</em> revenue, not vanity metrics. That earns your trust every month instead of locking you into contracts.
          </motion.p>
        </div>

        {/* Promise card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card border border-liquid-gold/30 p-10 md:p-12 rounded-3xl mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-serif font-light text-white mb-4">
            We only win when you win.
          </p>
          <p className="text-lg text-white/60 font-light">
            That's not a tagline — it's how we run this business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
