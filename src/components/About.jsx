import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-luxury-dark" />

      {/* Accent Shapes */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-display font-bold mb-8 text-center">
            Why We Do
            <span className="text-gradient"> This</span>
          </h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-luxury-gray"
            >
              We started this agency because we were tired of the typical marketing bullshit. The overpromises,
              the cookie-cutter strategies, the agencies that care more about their retainers than your results.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white font-medium"
            >
              We believe marketing should be simple: understand the business, build a strategy that works,
              execute relentlessly, and drive real, measurable growth. No fluff. No excuses.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-luxury-gray"
            >
              We're not here to be your biggest agency. We're here to be your best. We work with a select
              number of clients because we genuinely care about transforming their businesses—and you can't
              do that when you're stretched across 100 accounts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8 rounded-2xl bg-luxury-black/50 border border-luxury-gold/30 mt-12"
            >
              <p className="text-2xl font-bold text-gradient mb-4">
                Our Philosophy
              </p>
              <p className="text-luxury-gray">
                Your success is our success. We don't win unless you win. That's not marketing speak—it's
                how we operate. When you grow, we grow. When you hit your goals, we celebrate. And when
                something isn't working, we're the first to tell you and pivot fast.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white font-medium text-xl text-center pt-8"
            >
              If that resonates with you, let's talk.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
