import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OrbitalClock from './OrbitalClock';

const TimeRunningOut = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const lines = [
    { text: "How long has it been?", style: "text-white/40 text-lg", delay: 0 },
    { text: "Months of trying to figure out marketing yourself.", style: "text-white/60 text-xl", delay: 0.1 },
    { text: "Thousands spent on agencies that ghosted you after cashing the check.", style: "text-white/60 text-xl", delay: 0.2 },
    { text: "Late nights staring at ad dashboards that make zero sense.", style: "text-white/60 text-xl", delay: 0.3 },
    { text: "Meanwhile, your competitors are booked out.", style: "text-white/80 text-2xl", delay: 0.45 },
    { text: "Every week you wait is revenue you'll never get back.", style: "text-liquid-gold text-2xl md:text-3xl font-serif", delay: 0.6 },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-deep-charcoal" />

      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-20 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1fr,auto] gap-16 lg:gap-24 items-center">
          {/* Left - Personal copy */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-dark border border-liquid-gold/30"
            >
              <div className="w-2 h-2 rounded-full bg-liquid-gold animate-pulse" />
              <span className="text-xs text-white/50 uppercase tracking-[0.2em]">Real Talk</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
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
                  transition={{ duration: 0.5, delay: 0.3 + line.delay, ease: [0.16, 1, 0.3, 1] }}
                  className={`font-light leading-relaxed ${line.style}`}
                >
                  {line.text}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="pt-6"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); Calendly.initPopupWidget({ url: 'https://calendly.com/alwinchen-business/discovery-call' }); }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-liquid-gold text-pure-black text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-glow-gold hover:bg-liquid-gold/90 cursor-pointer"
              >
                Stop Waiting. Let's Talk.
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right - Orbital clock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <OrbitalClock />
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="text-white/20 text-xs font-mono uppercase tracking-[0.3em]"
            >
              Right now. Not next quarter.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeRunningOut;
