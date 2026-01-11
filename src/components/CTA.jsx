import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="relative py-50 overflow-hidden grain-texture">
      <div className="absolute inset-0 bg-pure-black" />

      {/* Animated Gold Gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-serif font-bold mb-8 leading-tight">
            Ready to Stop Wondering
            <br />
            <span className="text-gradient-flow luxury-glow-strong">
              And Start Growing?
            </span>
          </h2>

          <p className="text-xl md:text-2xl lg:text-3xl text-chrome-silver/80 mb-16 max-w-3xl mx-auto leading-relaxed">
            Book a no-pressure strategy call. We'll dig into your business, share honest feedback,
            and if we're the right fit, show you exactly how we'll drive your growth.
          </p>

          {/* CTA Button */}
          <a
            href="https://calendly.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-16 py-7 bg-liquid-gold rounded-full font-bold text-2xl text-pure-black transition-all duration-300 hover:shadow-glow-gold-lg hover:scale-105 mb-12"
          >
            Book Your Strategy Call
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Trust Signals */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-chrome-silver/60 font-mono text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-liquid-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-liquid-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-minute call</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-liquid-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Honest feedback guaranteed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
