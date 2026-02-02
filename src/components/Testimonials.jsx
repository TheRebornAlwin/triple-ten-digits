import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TextReveal from './TextReveal';

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      quote: "They didn't just run our ads, they transformed how we think about growth. Fully booked within two months.",
      author: "Sarah Mitchell",
      company: "Rejuvenating Touch",
      result: "6 bookings in first month",
    },
    {
      quote: "Finally, an agency that tells you what you need to hear. The ROI speaks for itself, £13.8k in the first month alone.",
      author: "David Chen",
      company: "Fake Plastic Chairs",
      result: "£13,800 revenue, 387% ROAS",
    },
    {
      quote: "We were skeptical about investing heavily in digital, but they proved us wrong fast. £89k in new contracts.",
      author: "Chris Evans",
      company: "C&M Evans Concrete",
      result: "£89k in contracts",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-pure-black" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-white leading-tight">
            From Skeptical Business Owners
            <br />
            <span className="text-liquid-gold">To Our Biggest Advocates</span>
          </h2>
          <TextReveal className="text-xl md:text-2xl text-white/50 max-w-4xl mx-auto font-light leading-relaxed">
            They were drowning in marketing confusion. Now they're thriving.
          </TextReveal>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-liquid-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-3xl border border-liquid-gold/0 group-hover:border-liquid-gold/40 transition-all duration-500" />

              <div className="relative z-10">
                {/* Custom quote SVG */}
                <div className="w-14 h-14 bg-liquid-gold rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-pure-black" viewBox="0 0 24 24" fill="none">
                    <path d="M4 15C4 12 6 8 10 6L11 8C8 9.5 7 11.5 7 13H10V18H4V15Z" fill="currentColor" />
                    <path d="M14 15C14 12 16 8 20 6L21 8C18 9.5 17 11.5 17 13H20V18H14V15Z" fill="currentColor" />
                  </svg>
                </div>

                <p className="text-white/90 leading-relaxed italic mb-8 text-lg">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-liquid-gold/20 pt-6">
                  <p className="font-bold text-white mb-1">{testimonial.author}</p>
                  <p className="text-sm text-chrome-silver/70 mb-3">{testimonial.company}</p>
                  <p className="text-sm text-liquid-gold font-semibold font-mono">
                    {testimonial.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
