import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: "We dig deep into your business, goals, and challenges. No sales pitch—just genuine conversation about whether we're the right fit.",
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description: "We build a custom growth strategy tailored to your business. Not a template, not a package—a plan designed specifically for you.",
    },
    {
      number: '03',
      title: 'Execution',
      description: 'We handle everything. You focus on running your business while we obsess over driving results. Weekly updates, full transparency.',
    },
    {
      number: '04',
      title: 'Growth & Optimization',
      description: "We continuously test, optimize, and scale what works. Your growth doesn't plateau—we push harder when things start working.",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden grain-texture">
      <div className="absolute inset-0 bg-luxury-black" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-display font-bold mb-6">
            How We Work
          </h2>
          <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
            Simple, transparent, and designed to get you results as fast as possible.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex gap-8 mb-12 last:mb-0"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[2.75rem] top-24 w-0.5 h-full bg-luxury-gold/20" />
              )}

              {/* Number Circle */}
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gold-gradient flex items-center justify-center relative z-10">
                <span className="text-3xl font-bold text-luxury-black">{step.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-4 pb-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gradient">
                  {step.title}
                </h3>
                <p className="text-luxury-gray text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 p-8 rounded-2xl bg-luxury-dark/50 border border-luxury-gold/20 max-w-3xl mx-auto"
        >
          <p className="text-xl font-semibold text-white mb-2">
            You won't have to become a marketing expert.
          </p>
          <p className="text-luxury-gray">
            We handle everything so you can focus on what you do best—running your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
