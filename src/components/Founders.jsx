import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Founders = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const founders = [
    {
      name: 'Connor',
      image: 'https://ffjq345kpi.ufs.sh/f/wcvmaciXvbR7Qe5cQbaRWwoO7k9p05F3YfmtNEgqrKAlZXn6',
      bio: "Built his first 6-figure business at 19. Connor understands what makes people stop scrolling and start buying. He combines data-driven strategy with creative that actually converts.",
    },
    {
      name: 'Alwin',
      image: 'https://ffjq345kpi.ufs.sh/f/wcvmaciXvbR76uNJRBYWJFM8gGvWQHxzqck3bwtKUN6IaVYp',
      bio: "Former performance marketing lead at multiple 7-figure brands. Alwin obsesses over one thing: measurable results. He's the strategist who'll tell you what you need to hear, not what you want to hear.",
    },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-pure-black" />

      {/* Elegant background accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-liquid-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-20 max-w-6xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
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

          <p className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed px-4">
            To build the marketing agency we wish existed when we were building our first businesses.
          </p>
        </motion.div>

        {/* Founders grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              {/* Square image container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 glass-card">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pure-black/60 via-transparent to-transparent" />

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-3xl md:text-4xl font-serif font-light text-white">
                    {founder.name}
                  </h3>
                </div>

                {/* Border */}
                <div className="absolute inset-0 border-2 border-white/5 group-hover:border-liquid-gold/40 transition-all duration-500 rounded-3xl" />
              </div>

              {/* Bio */}
              <p className="text-white/60 leading-relaxed font-light text-base md:text-lg px-2">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card rounded-3xl p-8 md:p-12 border border-liquid-gold/20 text-center max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-serif font-light text-white leading-tight mb-4">
            We're not your typical agency owners.
          </p>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We're operators who've built businesses, failed, learned, and come back stronger. We know what it's like to pour everything into a business and watch marketing budgets disappear into the void.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
