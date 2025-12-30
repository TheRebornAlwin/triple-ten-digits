import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-subtle-gradient" />

      {/* Geometric Shapes - Luxury Accent */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-6 lg:px-12 py-32 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-hero font-bold mb-8 leading-tight"
          >
            We Don't Just Run Ads.
            <br />
            <span className="text-gradient luxury-glow">
              We Build Growth Machines.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-luxury-gray mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Strategic marketing partners for ambitious businesses. We do whatever it takes to drive real,
            measurable growth—not just check boxes on a service list.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="#contact"
              className="inline-block px-12 py-5 bg-gold-gradient rounded-full font-bold text-lg text-luxury-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk Growth
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-24 flex flex-col items-center gap-3"
          >
            <span className="text-sm text-luxury-gray uppercase tracking-widest">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-luxury-gold rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
