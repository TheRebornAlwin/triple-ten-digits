import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const lines = [
    { text: "We kept seeing the same story.", style: "text-white/50" },
    { text: "Smart business owners. Great at what they do.", style: "text-white/70" },
    { text: "Getting ripped off by agencies who didn't give a damn.", style: "text-white" },
    { text: "Pretty reports. Zero results.", style: "text-white/70" },
    { text: "So we built something different.", style: "text-liquid-gold text-2xl md:text-3xl" },
    { text: "An agency that measures success by your revenue.", style: "text-white" },
    { text: "Not vanity metrics. Not impressions.", style: "text-white/70" },
    { text: "Your actual bank account.", style: "text-liquid-gold font-medium" },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-pure-black" />

      <div className="absolute top-1/2 -left-24 md:-left-48 w-48 md:w-96 h-48 md:h-96 bg-liquid-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-24 md:-right-48 w-48 md:w-96 h-48 md:h-96 bg-liquid-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 text-white leading-tight">
            Why We Built This
          </h2>
        </motion.div>

        {/* Line by line reveals */}
        <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto text-center">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.15 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`font-serif font-light text-lg sm:text-xl md:text-2xl leading-relaxed ${line.style}`}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        {/* Promise card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="glass-card border border-liquid-gold/30 p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl mt-12 md:mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-white mb-3 md:mb-4">
            We only win when you win.
          </p>
          <p className="text-base md:text-lg text-white/60 font-light">
            That's not marketing speak. That's how we run this.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
