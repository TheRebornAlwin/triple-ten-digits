import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OrbitalClock from './OrbitalClock';

const TimeRunningOut = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const lines = [
    { text: "How long has it been?", style: "text-white/40 text-base md:text-lg", delay: 0 },
    { text: "Months of trying to figure out marketing yourself.", style: "text-white/70 text-lg md:text-xl", delay: 0.1 },
    { text: "Thousands spent on agencies that ghosted you.", style: "text-white/70 text-lg md:text-xl", delay: 0.2 },
    { text: "Late nights staring at ad dashboards that make zero sense.", style: "text-white/70 text-lg md:text-xl", delay: 0.3 },
    { text: "Meanwhile, your competitors are booked out.", style: "text-white text-xl md:text-2xl", delay: 0.4 },
    { text: "Every week you wait is money you'll never see.", style: "text-liquid-gold text-xl md:text-2xl lg:text-3xl font-serif", delay: 0.5 },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-deep-charcoal" />
      <div className="absolute top-1/2 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-liquid-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1fr,auto] gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Left - Copy */}
          <div className="space-y-4 md:space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-tight"
            >
              Time You'll Never
              <br />
              <span className="text-liquid-gold">Get Back.</span>
            </motion.h2>

            <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
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
              className="pt-4 md:pt-6"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); Calendly.initPopupWidget({ url: 'https://calendly.com/alwinchen-business/discovery-call' }); }}
                className="group inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-liquid-gold text-pure-black text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-[0_8px_24px_rgba(212,175,55,0.4)] hover:bg-liquid-gold/90 cursor-pointer"
              >
                Stop Waiting. Let's Talk.
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right - Orbital clock (much bigger, shifted left on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center lg:-ml-16 xl:-ml-24"
          >
            <div className="scale-[1.0] sm:scale-[1.2] md:scale-[1.4] lg:scale-[1.8] xl:scale-[2.0]">
              <OrbitalClock />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeRunningOut;
