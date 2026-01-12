import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Process = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: "We dig deep into your business, goals, and challenges. No sales pitch—just genuine conversation.",
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description: "Custom growth strategy tailored to your business. Not a template—a plan designed for you.",
    },
    {
      number: '03',
      title: 'Execution',
      description: 'We handle everything. You focus on your business while we obsess over driving results.',
    },
    {
      number: '04',
      title: 'Growth & Optimization',
      description: "Continuously test, optimize, and scale what works. Your growth doesn't plateau.",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-deep-charcoal" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-white leading-tight">
            How We Work
            <br />
            <span className="text-white/40">(Without Making You a Marketer)</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/50 max-w-4xl mx-auto font-light leading-relaxed">
            Simple, transparent, designed to get you results while you focus on your business.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative flex gap-8 items-start"
            >
              {index < steps.length - 1 && (
                <div className="absolute left-14 top-28 w-0.5 h-full bg-liquid-gold/20" />
              )}

              <div className="relative z-10 w-28 h-28 rounded-full bg-liquid-gold flex items-center justify-center flex-shrink-0">
                <span className="text-4xl font-bold font-mono text-pure-black">{step.number}</span>
              </div>

              <div className="flex-1 glass-card rounded-3xl p-8 lg:p-10 hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-3xl font-serif font-bold mb-4 text-gradient-flow">
                  {step.title}
                </h3>
                <p className="text-chrome-silver/80 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-10 rounded-3xl glass-gold max-w-4xl mx-auto"
        >
          <p className="text-2xl font-semibold text-white mb-2">
            You won't have to become a marketing expert.
          </p>
          <p className="text-lg text-chrome-silver/90">
            We handle everything so you can focus on what you do best.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
