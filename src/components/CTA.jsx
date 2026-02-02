import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="relative py-48 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-pure-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-liquid-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-8 lg:px-20 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center space-y-12"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight">
            Ready to Stop Wondering
            <br />
            And Start Growing?
          </h2>

          <p className="text-xl md:text-2xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed">
            Book a no-pressure strategy call. We'll dig into your business, share honest feedback,
            and if we're the right fit, show you exactly how we'll drive your growth.
          </p>

          <div className="pt-8">
            <a
              href="https://calendly.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-6 bg-white text-pure-black text-base font-medium rounded-full transition-all duration-300 hover:bg-white/90 hover:gap-4 hover:shadow-2xl"
            >
              Book Your Strategy Call
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-8 text-white/30 text-sm font-light">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M10 5V10L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>30-minute call</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M10 6V10M10 14V14.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7 8C7.5 7 8.5 6.5 10 6.5C12 6.5 13 7.5 13 9C13 10.5 11.5 11 10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
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
