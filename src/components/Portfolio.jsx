import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const caseStudies = [
    {
      client: 'Fake Plastic Chairs',
      industry: 'E-commerce Furniture',
      challenge: 'Struggling to compete in a saturated market',
      solution: 'Complete Google Ads overhaul + landing page optimization',
      results: [
        '£13,800 revenue in first month',
        '387% ROAS',
        'Became top seller in category',
      ],
    },
    {
      client: 'Rejuvenating Touch',
      industry: 'Wellness & Spa',
      challenge: 'Low booking rates despite high traffic',
      solution: 'Strategic Meta Ads + conversion-focused website redesign',
      results: [
        '6 bookings in first month',
        '124% increase in consultation requests',
        'Fully booked within 8 weeks',
      ],
    },
    {
      client: 'Rhi Aesthetics',
      industry: 'Medical Aesthetics',
      challenge: 'Premium service perception not matching pricing',
      solution: 'Brand repositioning + targeted ad strategy + luxury web experience',
      results: [
        '£47k revenue in 90 days',
        '3.2x average transaction value',
        'Waitlist created for premium services',
      ],
    },
    {
      client: 'C&M Evans Concrete',
      industry: 'Construction Services',
      challenge: 'Relying on word-of-mouth, no digital presence',
      solution: 'Built digital infrastructure from scratch (website + Google Ads + Local SEO)',
      results: [
        '£89k in new contracts within 6 months',
        'Ranked #1 for target keywords',
        'Pipeline booked 4 months ahead',
      ],
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
            Real Businesses.
            <span className="text-gradient"> Real Results.</span>
          </h2>
          <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
            We don't deal in promises. Here's what we've actually delivered for clients who trusted us with their growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 lg:p-10 rounded-2xl bg-luxury-charcoal/40 border border-luxury-gray-dark/20 hover:border-luxury-gold/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]"
            >
              {/* Gold Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-gradient opacity-5 rounded-bl-full" />

              <div className="relative">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                    {study.client}
                  </h3>
                  <p className="text-luxury-gold text-sm uppercase tracking-widest">
                    {study.industry}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs text-luxury-gray uppercase tracking-wide mb-1">Challenge</p>
                    <p className="text-white/80">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs text-luxury-gray uppercase tracking-wide mb-1">Solution</p>
                    <p className="text-white/80">{study.solution}</p>
                  </div>
                </div>

                <div className="border-t border-luxury-gold/20 pt-6">
                  <p className="text-xs text-luxury-gray uppercase tracking-wide mb-3">Results</p>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white font-medium">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
