import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-pure-black">
      {/* Ultra-minimal content */}
      <div className="container mx-auto px-8 lg:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-8"
        >
          {/* Minimal badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs text-white/60 uppercase tracking-wider">
            <div className="w-1.5 h-1.5 rounded-full bg-liquid-gold animate-pulse" />
            Strategic Growth Partners
          </div>

          {/* Clean, powerful headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-white leading-[1.1] tracking-tight">
            We Don't Just
            <br />
            Run Ads.
          </h1>

          {/* Minimal subtext */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Strategic marketing partners for ambitious businesses.
            <br />
            We do whatever it takes to drive real, measurable growth.
          </p>

          {/* Single, elegant CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="pt-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pure-black text-sm font-medium rounded-full transition-all duration-300 hover:bg-white/90 hover:gap-3"
            >
              Book a Strategy Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
