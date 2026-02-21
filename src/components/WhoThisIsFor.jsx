import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhoThisIsFor = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const painPoints = [
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <defs>
            <linearGradient id="brilliantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path d="M24 4L6 18L24 44L42 18L24 4Z" stroke="currentColor" strokeWidth="1.5" fill="url(#brilliantGrad)" />
          <path d="M6 18H42" stroke="currentColor" strokeWidth="1.5" />
          <path d="M24 4L18 18L24 44L30 18L24 4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="8" cy="8" r="1.5" fill="currentColor" opacity="0.6" />
          <circle cx="40" cy="10" r="1" fill="currentColor" opacity="0.4" />
        </svg>
      ),
      pain: "You're great at what you do",
      description: "Your clients love you. But getting new ones? That's where it gets hard.",
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="8" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M10 26V32L18 26" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
          <rect x="20" y="18" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M38 36V42L30 36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
          <text x="12" y="20" fontSize="10" fill="currentColor" fontFamily="monospace">%</text>
          <circle cx="32" cy="27" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M32 25V28M32 30V30.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      pain: "Marketing feels confusing",
      description: "Facebook Ads? SEO? Funnels? You didn't start a business to learn this stuff.",
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="16" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="24" cy="26" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M24 23V29M22 25H26M22 27H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 16C14 12 16 8 18 6C17 10 19 12 19 12C19 12 18 8 20 4C20 8 23 10 23 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M28 16C28 13 29 10 31 8C30 11 31 12 31 12C31 12 31 10 33 7C33 10 35 12 34 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="38" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M35 7L41 13M41 7L35 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      pain: "You've been burned before",
      description: "Fancy reports, big promises, zero results. We get it.",
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <path d="M14 6H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 42H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 6V14C16 18 20 22 24 24C20 26 16 30 16 34V42" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M32 6V14C32 18 28 22 24 24C28 26 32 30 32 34V42" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="24" cy="24" r="1" fill="currentColor" />
          <circle cx="22" cy="36" r="1.5" fill="currentColor" opacity="0.6" />
          <circle cx="26" cy="38" r="1" fill="currentColor" opacity="0.4" />
        </svg>
      ),
      pain: "You don't have time",
      description: "Between running your business and serving clients, who has 40 hours to learn Google Ads?",
    },
  ];

  return (
    <section ref={ref} className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-pure-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 max-w-8xl relative z-10">
        <div className="text-center mb-10 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-dark border border-liquid-gold/30 mb-6 md:mb-8"
          >
            <span className="text-[10px] sm:text-xs text-white/60 uppercase tracking-[0.25em]">Sound Familiar?</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white leading-tight mb-4 md:mb-6 px-2">
            You're Great at Your Business.
            <br />
            <span className="text-liquid-gold">We Handle the Marketing.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed px-4">
            You don't need to become a marketer. You need a partner who gets it.
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-liquid-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/5 group-hover:border-liquid-gold/40 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 mb-4 md:mb-6 text-white opacity-80">{point.icon}</div>

                <h3 className="text-2xl md:text-2xl lg:text-3xl font-serif font-light text-white mb-2 md:mb-4 leading-tight">
                  {point.pain}
                </h3>

                <p className="text-sm md:text-base lg:text-lg text-white/60 leading-relaxed font-light">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 md:mt-16 lg:mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-liquid-gold/20">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-light text-white mb-4 md:mb-6 leading-tight">
              Here's the truth:
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 font-light leading-relaxed mb-4 md:mb-8">
              You shouldn't have to learn marketing. Focus on what you're great at. We'll handle getting you customers.
            </p>
            <p className="text-xl md:text-2xl text-liquid-gold font-light">
              That's us.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
