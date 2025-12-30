import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "They didn't just run our ads—they transformed how we think about growth. We went from struggling to get bookings to being fully booked within two months.",
      author: "Sarah Mitchell",
      company: "Rejuvenating Touch",
      result: "6 bookings in first month, fully booked in 8 weeks",
    },
    {
      quote: "Finally, an agency that tells you what you need to hear, not what you want to hear. The ROI speaks for itself—£13.8k in the first month alone.",
      author: "David Chen",
      company: "Fake Plastic Chairs",
      result: "£13,800 revenue, 387% ROAS",
    },
    {
      quote: "We were skeptical about investing heavily in digital marketing, but they proved us wrong fast. £89k in new contracts and we're booked months ahead now.",
      author: "Chris Evans",
      company: "C&M Evans Concrete",
      result: "£89k in contracts, pipeline booked 4 months ahead",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-luxury-dark" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-display font-bold mb-6">
            Don't Take Our Word For It
          </h2>
          <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
            Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl bg-luxury-charcoal/40 border border-luxury-gray-dark/20 hover:border-luxury-gold/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-luxury-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="mt-6 mb-6">
                <p className="text-white/90 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="border-t border-luxury-gold/20 pt-4">
                <p className="font-bold text-white mb-1">{testimonial.author}</p>
                <p className="text-sm text-luxury-gray mb-3">{testimonial.company}</p>
                <p className="text-sm text-luxury-gold font-semibold">
                  {testimonial.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
