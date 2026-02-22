import { motion } from 'framer-motion';

const TrustBar = () => {
  const badges = [
    'Google Partner',
    'Meta Business Partner',
    'TikTok Certified',
    '4.9/5 Rating',
    '100+ Five-Star Reviews',
    '£1.9M+ Revenue Generated',
    '387% Average ROAS',
    '47 Active Clients',
  ];

  // Double the items for seamless loop
  const items = [...badges, ...badges];

  return (
    <section className="relative py-6 border-y border-white/5 bg-pure-black overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-liquid-gold/5 via-transparent to-liquid-gold/5" />

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-pure-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-pure-black to-transparent z-10" />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {items.map((badge, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-white/40 text-sm font-light uppercase tracking-widest">
              {badge}
            </span>
            <span className="text-liquid-gold/30 text-lg">&bull;</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TrustBar;
