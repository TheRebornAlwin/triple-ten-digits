import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const caseStudies = [
    {
      client: 'Fake Plastic Chairs',
      industry: 'E-commerce Furniture',
      results: ['$13,800 revenue in first month', '387% ROAS', 'Top seller in category'],
    },
    {
      client: 'Rejuvenating Touch',
      industry: 'Wellness & Spa',
      results: ['6 bookings in first month', '124% increase in consultations', 'Fully booked in 8 weeks'],
    },
    {
      client: 'Rhi Aesthetics',
      industry: 'Medical Aesthetics',
      results: ['$47k revenue in 90 days', '3.2x average transaction value', 'Waitlist for premium services'],
    },
    {
      client: 'C&M Evans Concrete',
      industry: 'Construction Services',
      results: ['$89k in new contracts', 'Ranked #1 for target keywords', 'Pipeline booked 4 months ahead'],
    },
    {
      client: 'Infinity Smart Homes',
      industry: 'Smart Home Automation',
      results: ['12x social engagement', '340% increase in inquiries', 'Became local market leader'],
    },
    {
      client: 'Electromain',
      industry: 'Luxury Electrical',
      results: ['$62k in new projects', '4.1x ROAS on Meta', 'Repositioned as premium brand'],
    },
    {
      client: 'Delston Roofing',
      industry: 'Roofing Services',
      results: ['47 qualified leads per month', '$120k+ pipeline value', '2.8x ROAS consistently'],
    },
    {
      client: 'Mack D Studios',
      industry: 'Barbering Education',
      results: ['Sold out next 3 cohorts', '67% decrease in cost per enrollment', '4.2x return on ad spend'],
    },
  ];

  return (
    <section id="portfolio" ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-deep-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <span className="text-xs text-liquid-gold uppercase tracking-[0.3em] font-mono">Case Studies</span>
            <div className="h-px flex-1 bg-gradient-to-r from-liquid-gold/30 to-transparent" />
          </div>
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-tight">
            Real Businesses.
            <br />
            <span className="text-liquid-gold">Real Results.</span>
          </h2>
        </motion.div>

        {/* Grid of case studies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group glass-card rounded-2xl p-5 md:p-6 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl border border-liquid-gold/0 group-hover:border-liquid-gold/30 transition-all duration-500" />

              <h3 className="text-lg md:text-xl font-serif font-bold mb-1 group-hover:text-liquid-gold transition-colors duration-300">
                {study.client}
              </h3>
              <p className="text-liquid-gold text-[10px] uppercase tracking-widest font-mono mb-4">
                {study.industry}
              </p>

              <ul className="space-y-2">
                {study.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-liquid-gold flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                      <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-white/80">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 md:mt-16 text-center"
        >
          <div className="glass-gold border border-liquid-gold/30 rounded-2xl md:rounded-3xl p-6 md:p-10 inline-block">
            <p className="text-xl md:text-2xl font-serif font-light text-white mb-4 md:mb-6">
              Your business <span className="text-liquid-gold">could be next.</span>
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); Calendly.initPopupWidget({ url: 'https://calendly.com/alwinchen-business/discovery-call' }); }}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-liquid-gold text-pure-black text-sm md:text-base font-semibold rounded-full hover:shadow-[0_8px_24px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer"
            >
              Book a Call
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
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

export default Portfolio;
