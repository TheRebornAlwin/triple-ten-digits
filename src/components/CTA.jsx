import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden grain-texture">
      <div className="absolute inset-0 bg-luxury-black" />

      {/* Dramatic Gold Gradient Background */}
      <div className="absolute inset-0 bg-gold-gradient opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-hero font-bold mb-8 leading-tight">
            Ready to Stop Wondering
            <br />
            <span className="text-gradient luxury-glow">
              And Start Growing?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-luxury-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            Book a no-pressure strategy call. We'll dig into your business, share honest feedback,
            and if we're the right fit, we'll show you exactly how we'll drive your growth.
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://calendly.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-14 py-6 bg-gold-gradient rounded-full font-bold text-xl text-luxury-black transition-all duration-300 hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] mb-8"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Your Strategy Call
          </motion.a>

          {/* Trust Signals */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-luxury-gray">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-minute call</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
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
