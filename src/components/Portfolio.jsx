import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const caseStudies = [
    {
      client: 'Fake Plastic Chairs',
      industry: 'E-commerce Furniture',
      challenge: 'Struggling to compete in saturated market',
      solution: 'Complete Google Ads overhaul + landing page optimization',
      results: ['£13,800 revenue in first month', '387% ROAS', 'Top seller in category'],
      gradient: 'from-liquid-gold/20',
    },
    {
      client: 'Rejuvenating Touch',
      industry: 'Wellness & Spa',
      challenge: 'Low booking rates despite high traffic',
      solution: 'Strategic Meta Ads + conversion-focused website redesign',
      results: ['6 bookings in first month', '124% increase in consultations', 'Fully booked in 8 weeks'],
      gradient: 'from-mocha-mousse/20',
    },
    {
      client: 'Rhi Aesthetics',
      industry: 'Medical Aesthetics',
      challenge: 'Premium service perception not matching pricing',
      solution: 'Brand repositioning + targeted ads + luxury web experience',
      results: ['£47k revenue in 90 days', '3.2x average transaction value', 'Waitlist for premium services'],
      gradient: 'from-liquid-gold/15',
    },
    {
      client: 'C&M Evans Concrete',
      industry: 'Construction Services',
      challenge: 'Relying on word-of-mouth, no digital presence',
      solution: 'Built digital infrastructure (website + Google Ads + Local SEO)',
      results: ['£89k in new contracts (6 months)', 'Ranked #1 for target keywords', 'Pipeline booked 4 months ahead'],
      gradient: 'from-mocha-mousse/15',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-deep-charcoal" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-white leading-tight">
            Real Businesses Like Yours.
            <br />
            <span className="text-liquid-gold">Real Results That Matter.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/50 max-w-4xl mx-auto font-light leading-relaxed">
            Not hypotheticals. Not projections. Actual revenue generated for businesses run by people
            <span className="text-white"> just like you</span>.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group glass-card rounded-3xl p-10 lg:p-12 hover:scale-[1.01] transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="absolute inset-0 rounded-3xl border border-liquid-gold/0 group-hover:border-liquid-gold/30 transition-all duration-500" />

              <div className="relative z-10 grid lg:grid-cols-[2fr,3fr] gap-8">
                <div>
                  <h3 className="text-4xl font-serif font-bold mb-2 group-hover:text-gradient-flow transition-all duration-300">
                    {study.client}
                  </h3>
                  <p className="text-liquid-gold text-sm uppercase tracking-widest font-mono mb-6">
                    {study.industry}
                  </p>

                  <div className="space-y-4 text-chrome-silver/80">
                    <div>
                      <p className="text-xs uppercase tracking-wide mb-1 font-mono">Challenge</p>
                      <p>{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide mb-1 font-mono">Solution</p>
                      <p>{study.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t lg:border-t-0 lg:border-l border-liquid-gold/20 pt-8 lg:pt-0 lg:pl-8">
                  <p className="text-xs text-liquid-gold uppercase tracking-wide mb-4 font-mono">Results</p>
                  <ul className="space-y-3">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-liquid-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white font-medium text-lg">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
