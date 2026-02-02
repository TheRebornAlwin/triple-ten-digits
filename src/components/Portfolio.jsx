import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

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

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalScroll = track.scrollWidth - window.innerWidth;

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: () => `+=${totalScroll}`,
      pin: true,
      scrub: 1,
      animation: gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
      }),
    });

    return () => st.kill();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-deep-charcoal">
      <div ref={ref} className="min-h-screen flex flex-col justify-center">
        {/* Header - fixed during scroll */}
        <div className="px-6 lg:px-20 pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs text-liquid-gold uppercase tracking-[0.3em] font-mono">Case Studies</span>
              <div className="h-px flex-1 bg-gradient-to-r from-liquid-gold/30 to-transparent" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light text-white leading-tight">
              Real Businesses Like Yours.
              <br />
              <span className="text-liquid-gold">Real Results That Matter.</span>
            </h2>
          </motion.div>
        </div>

        {/* Horizontal scroll track */}
        <div ref={trackRef} className="flex gap-8 px-6 lg:px-20 pb-20 pt-4" style={{ width: 'max-content' }}>
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-3xl p-10 lg:p-12 overflow-hidden flex-shrink-0"
              style={{ width: 'min(600px, 80vw)' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-0 rounded-3xl border border-liquid-gold/0 group-hover:border-liquid-gold/30 transition-all duration-500" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-auto">
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-2 group-hover:text-gradient-flow transition-all duration-300">
                    {study.client}
                  </h3>
                  <p className="text-liquid-gold text-sm uppercase tracking-widest font-mono mb-8">
                    {study.industry}
                  </p>

                  <div className="space-y-4 text-chrome-silver/80 mb-8">
                    <div>
                      <p className="text-xs uppercase tracking-wide mb-1 font-mono text-white/40">Challenge</p>
                      <p>{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide mb-1 font-mono text-white/40">Solution</p>
                      <p>{study.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-liquid-gold/20 pt-6">
                  <p className="text-xs text-liquid-gold uppercase tracking-wide mb-4 font-mono">Results</p>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-liquid-gold flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-white font-medium">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* CTA card at end */}
          <div
            className="flex-shrink-0 rounded-3xl p-10 lg:p-12 flex items-center justify-center glass-gold border border-liquid-gold/30"
            style={{ width: 'min(400px, 70vw)' }}
          >
            <div className="text-center">
              <p className="text-3xl font-serif font-light text-white mb-6">
                Your business <br /><span className="text-liquid-gold">could be next.</span>
              </p>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); Calendly.initPopupWidget({ url: 'https://calendly.com/alwinchen-business/discovery-call' }); }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-liquid-gold text-pure-black text-sm font-semibold rounded-full hover:shadow-glow-gold transition-all duration-300 cursor-pointer"
              >
                Book a Call
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
