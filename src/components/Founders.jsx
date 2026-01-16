import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Founders = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

        {/* Main content - Images on left, Content on right */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Staggered images */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {/* Alwin - Top left, larger */}
                <div className="col-span-2 md:col-span-1 md:pt-0">
                  <div className="group glass-card rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 aspect-[3/4]">
                    <div className="relative w-full h-full bg-gradient-to-br from-liquid-gold/10 via-liquid-gold/5 to-transparent">
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-liquid-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Placeholder */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                        <div className="w-24 h-24 rounded-full border-2 border-liquid-gold/30 flex items-center justify-center mb-4">
                          <svg className="w-12 h-12 text-liquid-gold/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                        <p className="text-liquid-gold text-2xl font-serif font-light mb-1">Alwin</p>
                        <p className="text-white/30 text-xs uppercase tracking-wider text-center">Image Placeholder</p>
                      </div>

                      {/* Border */}
                      <div className="absolute inset-0 border-2 border-white/5 group-hover:border-liquid-gold/40 transition-all duration-500 rounded-3xl" />
                    </div>
                  </div>
                </div>

                {/* Connor - Bottom right, offset */}
                <div className="col-span-2 md:col-span-1 md:mt-12">
                  <div className="group glass-card rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 aspect-[3/4]">
                    <div className="relative w-full h-full bg-gradient-to-br from-liquid-gold/10 via-liquid-gold/5 to-transparent">
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-liquid-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Placeholder */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                        <div className="w-24 h-24 rounded-full border-2 border-liquid-gold/30 flex items-center justify-center mb-4">
                          <svg className="w-12 h-12 text-liquid-gold/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                        <p className="text-liquid-gold text-2xl font-serif font-light mb-1">Connor</p>
                        <p className="text-white/30 text-xs uppercase tracking-wider text-center">Image Placeholder</p>
                      </div>

                      {/* Border */}
                      <div className="absolute inset-0 border-2 border-white/5 group-hover:border-liquid-gold/40 transition-all duration-500 rounded-3xl" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10"
            >
              {/* Heading */}
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-serif font-light text-white leading-tight">
                  Two Founders.
                  <br />
                  <span className="text-liquid-gold">One Mission.</span>
                </h3>
                <p className="text-xl text-white/60 font-light leading-relaxed">
                  To build the marketing agency we wish existed when we were building our first businesses.
                </p>
              </div>

              {/* Founders info */}
              <div className="space-y-8">
                {/* Alwin */}
                <div className="glass-card rounded-2xl p-8 border border-white/5 hover:border-liquid-gold/20 transition-all duration-300">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-serif font-light text-white mb-1">Alwin</h4>
                      <p className="text-liquid-gold/80 text-sm uppercase tracking-wider">Co-Founder & Growth Strategist</p>
                    </div>
                    <p className="text-white/60 leading-relaxed">
                      Former performance marketing lead at multiple 7-figure brands. Alwin obsesses over one thing: measurable results. He's the strategist who'll tell you what you need to hear, not what you want to hear.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-liquid-gold/10 border border-liquid-gold/20 text-xs text-liquid-gold">Paid Ads</span>
                      <span className="px-3 py-1 rounded-full bg-liquid-gold/10 border border-liquid-gold/20 text-xs text-liquid-gold">Growth Strategy</span>
                      <span className="px-3 py-1 rounded-full bg-liquid-gold/10 border border-liquid-gold/20 text-xs text-liquid-gold">Analytics</span>
                    </div>
                  </div>
                </div>

                {/* Connor */}
                <div className="glass-card rounded-2xl p-8 border border-white/5 hover:border-liquid-gold/20 transition-all duration-300">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-serif font-light text-white mb-1">Connor</h4>
                      <p className="text-liquid-gold/80 text-sm uppercase tracking-wider">Co-Founder & Creative Director</p>
                    </div>
                    <p className="text-white/60 leading-relaxed">
                      Built his first 6-figure business at 19. Connor understands what makes people stop scrolling and start buying. He combines data-driven strategy with creative that actually converts.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-liquid-gold/10 border border-liquid-gold/20 text-xs text-liquid-gold">Creative Direction</span>
                      <span className="px-3 py-1 rounded-full bg-liquid-gold/10 border border-liquid-gold/20 text-xs text-liquid-gold">Brand Strategy</span>
                      <span className="px-3 py-1 rounded-full bg-liquid-gold/10 border border-liquid-gold/20 text-xs text-liquid-gold">Conversion Optimization</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom statement */}
              <div className="glass-card rounded-2xl p-8 border border-liquid-gold/20">
                <p className="text-xl md:text-2xl font-serif font-light text-white leading-tight">
                  We're not your typical agency owners.
                </p>
                <p className="text-white/70 mt-4 leading-relaxed">
                  We're operators who've built businesses, failed, learned, and come back stronger. We know what it's like to pour everything into a business and watch marketing budgets disappear into the void.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
