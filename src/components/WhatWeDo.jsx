import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Google Ads That Actually Convert',
    description: "We don't just drive clicks—we drive revenue. Every campaign is obsessively optimized for your bottom line.",
    size: 'large',
  },
  {
    title: 'Meta Ads That Cut Through',
    description: 'Your audience is bombarded. We create campaigns that stop the scroll and turn attention into action.',
    size: 'medium',
  },
  {
    title: 'Websites That Work',
    description: "Not a digital brochure—a sales machine that converts visitors while you sleep.",
    size: 'medium',
  },
  {
    title: 'Strategy That Moves Needles',
    description: "Sometimes you need a complete rethink. We tell you what you need to hear, not what you want to hear.",
    size: 'large',
  },
];

const WhatWeDo = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-40 bg-pure-black">
      <div className="container mx-auto px-8 lg:px-20 max-w-8xl">
        {/* Refined section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <div className="text-xs text-white/30 uppercase tracking-[0.3em] mb-6">What We Do</div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-8 text-white leading-tight">
            What We Do
            <span className="block mt-2 text-white/50">(When It Makes Sense)</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/40 max-w-4xl mx-auto font-light leading-relaxed">
            We're not boxed into services. Strategic partners who do whatever your business needs to grow.
          </p>
        </motion.div>

        {/* Glassmorphism cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`group relative glass-card rounded-2xl p-12 overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                service.size === 'large' ? 'md:row-span-1' : ''
              }`}
              style={{
                minHeight: service.size === 'large' ? '360px' : '340px'
              }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-liquid-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Refined border glow */}
              <div className="absolute inset-0 rounded-2xl border border-liquid-gold/0 group-hover:border-liquid-gold/20 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-serif font-light text-white leading-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-white/50 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Subtle number badge */}
              <div className="absolute bottom-8 right-8 text-7xl font-serif font-light text-white/5 group-hover:text-white/10 transition-all duration-500">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
