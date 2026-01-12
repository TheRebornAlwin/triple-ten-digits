import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Paid Advertising',
    description: 'Meta, Google, TikTok—we run campaigns that actually convert, not just generate clicks.'
  },
  {
    title: 'Content & Creative',
    description: 'Scroll-stopping visuals and copy that makes people stop, think, and buy.'
  },
  {
    title: 'Email & SMS',
    description: 'Automated flows that turn subscribers into customers while you sleep.'
  },
  {
    title: 'Strategy & Analytics',
    description: 'Data-driven decisions. No guesswork. Just growth.'
  }
];

const WhatWeDo = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-32 bg-pure-black border-t border-white/5">
      <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <div className="text-xs text-white/40 uppercase tracking-widest mb-4">What We Do</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-white leading-tight">
            Everything you need
            <br />
            to scale.
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-pure-black p-12 group hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-white">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
