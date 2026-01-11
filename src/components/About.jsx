import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-50 overflow-hidden">
      <div className="absolute inset-0 bg-pure-black" />

      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-liquid-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-mocha-mousse/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-display font-serif font-bold mb-8">
            Why We Do
            <span className="text-gradient-flow"> This</span>
          </h2>
        </motion.div>

        <div className="space-y-8 text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-chrome-silver/80"
          >
            We started this agency because we were tired of the typical marketing bullshit. The overpromises,
            the cookie-cutter strategies, the agencies that care more about retainers than your results.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white font-medium text-xl"
          >
            We believe marketing should be simple: understand the business, build a strategy that works,
            execute relentlessly, and drive real, measurable growth. No fluff. No excuses.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-chrome-silver/80"
          >
            We're not here to be your biggest agency. We're here to be your best. We work with select
            clients because we genuinely care about transforming their businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-gold p-10 rounded-3xl mt-12"
          >
            <p className="text-3xl font-serif font-bold text-gradient-flow mb-4">
              Our Philosophy
            </p>
            <p className="text-chrome-silver/90 text-lg">
              Your success is our success. We don't win unless you win. That's not marketing speak—it's
              how we operate. When you grow, we grow. When you hit your goals, we celebrate.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white font-medium text-2xl text-center pt-12"
          >
            If that resonates with you, let's talk.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
