import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Founders = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const founders = [
    {
      name: 'Alwin',
      role: 'Co-Founder & Growth Strategist',
      bio: "Former performance marketing lead at multiple 7-figure brands. Alwin obsesses over one thing: measurable results. He's the strategist who'll tell you what you need to hear, not what you want to hear.",
      expertise: ['Paid Ads', 'Growth Strategy', 'Analytics'],
    },
    {
      name: 'Connor',
      role: 'Co-Founder & Creative Director',
      bio: 'Built his first 6-figure business at 19. Connor understands what makes people stop scrolling and start buying. He combines data-driven strategy with creative that actually converts.',
      expertise: ['Creative Direction', 'Brand Strategy', 'Conversion Optimization'],
    },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-pure-black" />

      {/* Elegant background accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-liquid-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-20 max-w-8xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark border border-liquid-gold/30 mb-8">
            <span className="text-xs text-white/60 uppercase tracking-[0.25em]">The Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-white leading-tight mb-6 px-4">
            Meet the Co-Founders
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Two entrepreneurs who got tired of seeing great businesses held back by mediocre marketing
          </p>
        </motion.div>

        {/* Founders grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
                {/* Image placeholder */}
                <div className="relative aspect-[4/5] bg-gradient-to-br from-liquid-gold/10 via-liquid-gold/5 to-transparent overflow-hidden">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-liquid-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 mx-auto rounded-full border-2 border-liquid-gold/30 flex items-center justify-center">
                        <svg className="w-16 h-16 text-liquid-gold/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                      <p className="text-white/30 text-sm uppercase tracking-wider">Image Placeholder</p>
                    </div>
                  </div>

                  {/* Border glow effect */}
                  <div className="absolute inset-0 border-2 border-white/5 group-hover:border-liquid-gold/40 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="p-10 space-y-6">
                  {/* Name & Role */}
                  <div>
                    <h3 className="text-4xl font-serif font-light text-white mb-2 group-hover:text-liquid-gold transition-colors duration-300">
                      {founder.name}
                    </h3>
                    <p className="text-liquid-gold/80 text-lg font-light tracking-wide">
                      {founder.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-white/60 text-lg font-light leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {founder.expertise.map((skill, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 rounded-full bg-liquid-gold/10 border border-liquid-gold/20"
                      >
                        <span className="text-sm text-liquid-gold font-light">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass-card border border-liquid-gold/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-serif font-light text-white mb-6 leading-tight">
              We're not your typical agency owners.
            </p>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              We're operators who've built businesses, failed, learned, and come back stronger.
              We know what it's like to pour everything into a business and watch marketing budgets disappear
              into the void. That's why we built something different.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
