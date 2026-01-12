import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-pure-black overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-liquid-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-liquid-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-8 lg:px-20 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-12"
        >
          {/* Refined badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-dark backdrop-blur-xl border border-white/10 text-xs text-white/70 uppercase tracking-[0.2em]">
            <div className="w-1.5 h-1.5 rounded-full bg-liquid-gold animate-pulse" />
            Strategic Growth Partners
          </div>

          {/* Elegant headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.05] tracking-tight">
            We Don't Just Run Ads.
          </h1>

          {/* Refined subtext with more breathing room */}
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
            Strategic marketing partners for ambitious businesses. We do whatever it takes
            <br className="hidden md:block" />
            to drive real, measurable growth—not just check boxes on a service list.
          </p>

          {/* Refined CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pt-8"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-pure-black text-base font-medium rounded-full transition-all duration-300 hover:bg-white/90 hover:gap-4 hover:shadow-2xl"
            >
              Book a Strategy Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-40">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-20 bg-gradient-to-b from-transparent via-white to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
