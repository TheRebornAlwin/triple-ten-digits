import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Process = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: "We hop on a call and dig into your business. What's working, what's not, where you want to go. No sales pitch, just a real conversation.",
    },
    {
      number: '02',
      title: 'Strategy',
      description: "We put together a custom plan based on your situation. Not a template. You'll know exactly what we're doing and why.",
    },
    {
      number: '03',
      title: 'Execution',
      description: "We get to work. You focus on running your business while we handle the marketing. We keep you in the loop without drowning you in updates.",
    },
    {
      number: '04',
      title: 'Growth',
      description: "We track what's working, cut what's not, and keep pushing. Your growth doesn't plateau because we don't get complacent.",
    },
  ];

  return (
    <section id="process" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-deep-charcoal" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 md:mb-6 leading-tight">
            <span className="text-liquid-gold">How We Work</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed px-4">
            Simple and straightforward. No unnecessary complexity.
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-start"
            >
              {/* Connecting line - hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute left-10 md:left-14 top-20 md:top-28 w-0.5 h-[calc(100%-2rem)] bg-liquid-gold/20" />
              )}

              {/* Number circle */}
              <div className="relative z-10 w-20 h-20 md:w-28 md:h-28 rounded-full bg-liquid-gold flex items-center justify-center flex-shrink-0">
                <span className="text-2xl md:text-4xl font-bold font-mono text-pure-black">{step.number}</span>
              </div>

              {/* Content card */}
              <div className="flex-1 glass-card rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 hover:scale-[1.01] transition-all duration-300">
                <h3 className="text-2xl md:text-2xl lg:text-3xl font-serif font-bold mb-2 md:mb-4 text-liquid-gold">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
