import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      quote: "They didn't just run our ads—they transformed how we think about growth. Fully booked within two months.",
      author: "Sarah Mitchell",
      company: "Rejuvenating Touch",
      result: "6 bookings in first month",
    },
    {
      quote: "Finally, an agency that tells you what you need to hear. The ROI speaks for itself—£13.8k in the first month alone.",
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
    <section ref={ref} className="relative py-50 overflow-hidden">
      <div className="absolute inset-0 bg-pure-black" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-display font-serif font-bold mb-6">
            Don't Take Our Word For It
          </h2>
          <p className="text-xl md:text-2xl text-chrome-silver/70 max-w-4xl mx-auto">
            Here's what our clients have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-liquid-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-3xl border border-liquid-gold/0 group-hover:border-liquid-gold/40 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-liquid-gold rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-pure-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
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
