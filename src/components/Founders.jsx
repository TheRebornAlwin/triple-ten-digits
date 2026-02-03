import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Founders = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const founders = [
    {
      name: 'Alwin',
      image: 'https://ffjq345kpi.ufs.sh/f/wcvmaciXvbR7hX8LK1QSvR1n2zyUDY3OqoWsp6iNlkcHJEba',
      bio: "I've spent years in the trenches running ads for brands that actually needed results, not just pretty dashboards. I'll tell you what's wrong with your marketing even if you don't want to hear it — because that's what actually helps.",
    },
    {
      name: 'Connor',
      image: 'https://ffjq345kpi.ufs.sh/f/wcvmaciXvbR7Qe5cQbaRWwoO7k9p05F3YfmtNEgqrKAlZXn6',
      bio: "Started my first business at 19 and learned the hard way what works and what doesn't. Now I use that experience to help other businesses skip the expensive mistakes I made. I'm obsessed with stuff that actually converts.",
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-pure-black" />

      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-liquid-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-20 max-w-6xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark border border-liquid-gold/30 mb-8">
            <span className="text-xs text-white/60 uppercase tracking-[0.25em]">The Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-tight mb-6 px-4">
            Two Founders.
            <br />
            <span className="text-liquid-gold">One Mission.</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed px-4">
            We built the agency we wish existed when we were starting out.
          </p>
        </motion.div>

        {/* Founders grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              {/* Square image container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 glass-card">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pure-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-3xl md:text-4xl font-serif font-light text-white">
                    {founder.name}
                  </h3>
                </div>

                <div className="absolute inset-0 border-2 border-white/5 group-hover:border-liquid-gold/40 transition-all duration-500 rounded-3xl" />
              </div>

              {/* Bio */}
              <p className="text-white/70 leading-relaxed font-light text-base md:text-lg px-2">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card rounded-3xl p-8 md:p-12 border border-liquid-gold/20 text-center max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-serif font-light text-white leading-tight mb-4">
            We're not your typical agency owners.
          </p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We've built businesses, failed, learned, and come back stronger. We know what it's like to pour everything into a business and watch marketing budgets disappear into the void.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
