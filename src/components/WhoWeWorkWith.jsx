import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhoWeWorkWith = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const traits = [
    {
      title: "You're Serious About Growth",
      description: "You're not looking for quick hacks or magic bullets. You understand that real growth takes strategy, investment, and commitment.",
    },
    {
      title: 'You Value Results Over Reports',
      description: "You don't care about vanity metrics. You want to see real revenue, real bookings, real business transformation.",
    },
    {
      title: "You're Ready to Invest",
      description: "You have a medium to high budget and you're willing to invest in marketing that actually works. You see marketing as growth, not an expense.",
    },
    {
      title: 'You Trust Expertise',
      description: "You're looking for strategic partners, not order-takers. You value our experience and you're open to doing what works, even if it's not what you expected.",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden grain-texture">
      <div className="absolute inset-0 bg-luxury-black" />

      {/* Geometric Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-display font-bold mb-6">
            Who We Work With
          </h2>
          <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
            We work across industries, but our clients share common traits. If this sounds like you, we should talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-luxury-charcoal/30 border border-luxury-gold/20"
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gold-gradient rounded-lg opacity-20" />

              <h3 className="text-2xl font-bold mb-4 text-gradient">
                {trait.title}
              </h3>
              <p className="text-luxury-gray leading-relaxed">
                {trait.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center max-w-4xl mx-auto p-10 rounded-2xl bg-luxury-dark border border-luxury-gold/30"
        >
          <p className="text-2xl font-bold mb-4">
            We don't work with everyone.
          </p>
          <p className="text-lg text-luxury-gray mb-6">
            We're selective because we genuinely care about delivering transformational results. If we don't believe we can
            significantly move the needle for your business, we'll be the first to tell you.
          </p>
          <p className="text-luxury-gold font-semibold text-lg">
            But if we do take you on? You'll see exactly why we're worth it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
