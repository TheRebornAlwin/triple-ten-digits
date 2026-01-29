import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhoThisIsFor = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const painPoints = [
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      pain: "You're brilliant at what you do",
      description: "You've built a business doing amazing work. Your clients love you. But getting NEW clients? That's a different story.",
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      ),
      pain: "Marketing feels like a foreign language",
      description: "Facebook Ads? SEO? Funnels? You didn't start a business to become a marketing expert. You just want customers.",
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5L21 3" />
        </svg>
      ),
      pain: "You've wasted money on agencies before",
      description: "Fancy reports, big promises, zero results. You're done throwing money at people who don't understand your business.",
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      pain: "You don't have time to figure this out",
      description: "Between running your business and serving clients, you don't have 40 hours to learn Google Ads or build a website.",
    },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-pure-black" />

      {/* Subtle background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-20 max-w-8xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-dark border border-liquid-gold/30 mb-8">
            <span className="text-xs text-white/60 uppercase tracking-[0.25em]">Sound Familiar?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-white leading-tight mb-6 px-4">
            You're Great at Your Business.
            <br />
            <span className="text-white/40">We're Good At the Marketing Part.</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed px-4">
            And that's exactly why we exist. You don't need to become a marketer,
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
                <div className="w-16 h-16 mb-6 text-white opacity-80">{point.icon}</div>

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
