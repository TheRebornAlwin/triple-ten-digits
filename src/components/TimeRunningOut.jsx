import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OrbitalClock from './OrbitalClock';

const TimeRunningOut = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const lines = [
    { text: "How long has it been?", style: "text-white/40 text-lg", delay: 0 },
    { text: "Months of trying to figure out marketing yourself.", style: "text-white/70 text-xl", delay: 0.1 },
    { text: "Thousands spent on agencies that ghosted you after cashing the check.", style: "text-white/70 text-xl", delay: 0.2 },
    { text: "Late nights staring at ad dashboards that make zero sense.", style: "text-white/70 text-xl", delay: 0.3 },
    { text: "Meanwhile, your competitors are booked out.", style: "text-white text-2xl", delay: 0.4 },
    { text: "Every week you wait is revenue you'll never get back.", style: "text-liquid-gold text-2xl md:text-3xl font-serif", delay: 0.5 },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-deep-charcoal" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-20 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1fr,auto] gap-16 lg:gap-24 items-center">
          {/* Left - Personal copy */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-tight"
            >
              Time You'll Never
              <br />
              <span className="text-liquid-gold">Get Back.</span>
            </motion.h2>

            <div className="space-y-4 pt-4">
              {lines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + line.delay * 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`font-light leading-relaxed ${line.style}`}
                >
                  {line.text}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-6"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); Calendly.initPopupWidget({ url: 'https://calendly.com/alwinchen-business/discovery-call' }); }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-liquid-gold text-pure-black text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-[0_8px_24px_rgba(212,175,55,0.4)] hover:bg-liquid-gold/90 cursor-pointer"
              >
                Stop Waiting. Let's Talk.
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right - Orbital clock (bigger) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
            style={{ transform: 'scale(1.3)' }}
          >
            <OrbitalClock />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeRunningOut;
