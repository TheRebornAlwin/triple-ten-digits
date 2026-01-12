import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-pure-black" />

      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-liquid-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-liquid-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-8 text-white leading-tight">
            Why We Built This
            <br />
            <span className="text-liquid-gold">For People Like You</span>
          </h2>
        </motion.div>

        <div className="space-y-8 text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 font-light text-xl"
          >
            We started this because we kept meeting brilliant business owners—people exceptional at their craft—
            who were getting absolutely screwed by marketing agencies. Paying thousands for "strategies" that
            were just templates. Getting reports full of metrics that meant nothing.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white font-light text-2xl"
          >
            These business owners didn't need another vendor. They needed a partner who actually gave a damn
            about their success. Someone who would tell them the truth, even when it's uncomfortable.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 font-light text-xl"
          >
            So we built this agency differently. No long-term contracts trapping you. No jargon hiding
            incompetence. No taking every client who can pay. Just honest partnership with businesses
            we believe we can genuinely transform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-card border border-liquid-gold/30 p-12 rounded-3xl mt-12"
          >
            <p className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
              Here's our promise:
            </p>
            <p className="text-white/80 text-xl font-light leading-relaxed">
              We only succeed when you succeed. If you're not getting customers, not seeing ROI, not growing—
              we've failed. That's why we're selective about who we work with. Your success literally becomes our portfolio.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white font-light text-2xl text-center pt-12"
          >
            If you're ready to stop struggling with marketing and start growing,
            <span className="text-liquid-gold"> let's talk</span>.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
