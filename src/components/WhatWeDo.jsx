import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const cardsRef = useRef([]);

  useEffect(() => {
    // Initialize tilt effect on cards
    cardsRef.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 15,
          speed: 400,
          glare: true,
          'max-glare': 0.3,
        });
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card && card.vanillaTilt) {
          card.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  const services = [
    {
      title: 'Google Ads That Actually Convert',
      description: "We don't just drive clicks—we drive revenue. Every campaign is obsessively optimized for your bottom line.",
      gradient: 'from-liquid-gold/20 to-transparent',
      size: 'large',
    },
    {
      title: 'Meta Ads That Cut Through',
      description: 'Your audience is bombarded. We create campaigns that stop the scroll and turn attention into action.',
      gradient: 'from-mocha-mousse/20 to-transparent',
      size: 'medium',
    },
    {
      title: 'Websites That Work',
      description: "Not a digital brochure—a sales machine that converts visitors while you sleep.",
      gradient: 'from-liquid-gold/15 to-transparent',
      size: 'medium',
    },
    {
      title: 'Strategy That Moves Needles',
      description: "Sometimes you need a complete rethink. We tell you what you need to hear, not want to hear.",
      gradient: 'from-mocha-mousse/15 to-transparent',
      size: 'large',
    },
  ];

  return (
    <section ref={ref} className="relative py-50 overflow-hidden">
      <div className="absolute inset-0 bg-pure-black" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-display font-serif font-bold mb-6">
            What We Do
            <span className="text-gradient-flow"> (When It Makes Sense)</span>
          </h2>
          <p className="text-xl md:text-2xl text-chrome-silver/70 max-w-4xl mx-auto leading-relaxed">
            We're not boxed into services. Strategic partners who do whatever your business needs to grow.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`group relative glass-card rounded-3xl p-10 lg:p-12 overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                service.size === 'large' ? 'md:row-span-1' : ''
              }`}
              style={{
                minHeight: service.size === 'large' ? '420px' : '380px'
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Gold Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-liquid-gold/0 group-hover:border-liquid-gold/40 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-white group-hover:text-gradient-flow transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-lg text-chrome-silver/80 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Number Badge */}
              <div className="absolute top-8 right-8 text-[8rem] font-mono font-bold text-liquid-gold/5 group-hover:text-liquid-gold/10 transition-all duration-500">
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
