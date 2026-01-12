import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="relative py-40 bg-pure-black border-y border-white/5">
      <div className="container mx-auto px-8 lg:px-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-10"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white leading-tight">
            Ready to grow?
          </h2>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            Book a strategy call. No pressure, no pitch—just honest feedback about your business.
          </p>

          <div className="pt-4">
            <a
              href="https://calendly.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pure-black text-sm font-medium rounded-full transition-all duration-300 hover:bg-white/90 hover:gap-3"
            >
              Book a Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
