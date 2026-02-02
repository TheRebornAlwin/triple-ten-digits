import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const lines = [
    { text: "Brilliant business owners were getting screwed by agencies.", style: "text-white/60" },
    { text: "Paying thousands for copy-paste templates.", style: "text-white/60" },
    { text: "Reports full of numbers that meant nothing.", style: "text-white/60" },
    { text: "We said: enough.", style: "text-liquid-gold text-3xl md:text-4xl" },
    { text: "No long-term contracts.", style: "text-white" },
    { text: "No jargon. No hiding.", style: "text-white" },
    { text: "If we can't transform your business, we'll tell you upfront.", style: "text-white" },
    { text: "Your growth is our portfolio.", style: "text-liquid-gold text-3xl md:text-4xl" },
  ];

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

        {/* Line-by-line punchy reveals */}
        <div className="space-y-6 max-w-3xl mx-auto text-center">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`font-serif font-light text-xl md:text-2xl leading-relaxed ${line.style}`}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        {/* Promise card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="glass-card border border-liquid-gold/30 p-12 rounded-3xl mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-3xl md:text-4xl font-serif font-light text-white mb-4">
            We only win when you win.
          </p>
          <p className="text-lg text-white/50 font-light">
            Period.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
