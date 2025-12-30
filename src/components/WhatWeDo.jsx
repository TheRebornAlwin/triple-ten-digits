import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhatWeDo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const capabilities = [
    {
      title: 'Google Ads That Actually Convert',
      description: "We don't just drive clicks—we drive revenue. Every campaign is obsessively optimized for your bottom line, not vanity metrics.",
    },
    {
      title: 'Meta Ads That Cut Through the Noise',
      description: 'Your audience is bombarded with ads. We create campaigns that stop the scroll and turn attention into action.',
    },
    {
      title: 'Websites That Work for You',
      description: "Your website isn't a digital brochure—it's a sales machine. We build sites that convert visitors into customers while you sleep.",
    },
    {
      title: 'Strategy That Moves the Needle',
      description: "Sometimes you don't need more ads. Sometimes you need a complete rethink. We tell you what you need to hear, not what you want to hear.",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-luxury-dark" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-display font-bold mb-6">
            What We Do
            <span className="text-gradient"> (When It Makes Sense)</span>
          </h2>
          <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
            We're not boxed into services. We're strategic partners who do whatever your business needs to grow.
            Sometimes that's ads. Sometimes it's a complete overhaul. Always, it's about results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-luxury-charcoal/50 border border-luxury-gray-dark/20 hover:border-luxury-gold/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gold-gradient rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-luxury-gray leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
