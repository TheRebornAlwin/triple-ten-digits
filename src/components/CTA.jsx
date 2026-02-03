import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NeonOrbs from './NeonOrbs';

const CTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="relative py-40 overflow-hidden">
      {/* Neon orbs background */}
      <div className="absolute inset-0 bg-pure-black">
        <NeonOrbs />
      </div>

      <div className="container mx-auto px-8 lg:px-20 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center space-y-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-tight">
            Ready to Stop Wondering
            <br />
            And Start Growing?
          </h2>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Let's talk about your business and see if we're a good fit.
          </p>

          <div className="pt-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); Calendly.initPopupWidget({ url: 'https://calendly.com/alwinchen-business/discovery-call' }); }}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-liquid-gold text-pure-black text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-[0_8px_24px_rgba(212,175,55,0.4)] hover:bg-liquid-gold/90 cursor-pointer"
            >
              Book Your Strategy Call
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
