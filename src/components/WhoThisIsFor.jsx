import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhoThisIsFor = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const painPoints = [
    {
      icon: '😤',
      pain: "You're brilliant at what you do",
      description: "You've built a business doing amazing work. Your clients love you. But getting NEW clients? That's a different story.",
    },
    {
      icon: '🤯',
      pain: "Marketing feels like a foreign language",
      description: "Facebook Ads? SEO? Funnels? You didn't start a business to become a marketing expert—you just want customers.",
    },
    {
      icon: '💸',
      pain: "You've wasted money on agencies before",
      description: "Fancy reports, big promises, zero results. You're done throwing money at people who don't understand your business.",
    },
    {
      icon: '⏰',
      pain: "You don't have time to figure this out",
      description: "Between running your business and serving clients, you don't have 40 hours to learn Google Ads or build a website.",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-pure-black" />

      {/* Subtle background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-8 lg:px-20 max-w-8xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark border border-liquid-gold/30 mb-8">
            <span className="text-xs text-white/60 uppercase tracking-[0.25em]">Sound Familiar?</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight mb-6">
            You're Great at Your Business.
            <br />
            <span className="text-white/40">Just Not the Marketing Part.</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
            And that's exactly why we exist. You don't need to become a marketer—
            <span className="text-liquid-gold"> you need a partner who gets it</span>.
          </p>
        </motion.div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group glass-card rounded-3xl p-10 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-liquid-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-3xl border border-white/5 group-hover:border-liquid-gold/40 transition-all duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-6 opacity-80">{point.icon}</div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-serif font-light text-white mb-4 leading-tight">
                  {point.pain}
                </h3>

                {/* Description */}
                <p className="text-base lg:text-lg text-white/60 leading-relaxed font-light">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-12 border border-liquid-gold/20">
            <p className="text-3xl md:text-4xl font-serif font-light text-white mb-6 leading-tight">
              Here's the truth:
            </p>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-8">
              You shouldn't have to learn marketing. You should focus on being exceptional at what you do,
              while someone else handles getting you customers.
            </p>
            <p className="text-2xl text-liquid-gold font-light">
              That's us.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
