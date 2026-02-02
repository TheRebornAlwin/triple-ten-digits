import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BigMarquee = ({ text = 'RESULTS THAT MATTER', direction = 'left' }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    gsap.to(el, {
      xPercent: direction === 'left' ? -50 : 0,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [direction]);

  const repeatedText = Array(6).fill(text);

  return (
    <div className="relative py-6 md:py-10 overflow-hidden bg-pure-black border-y border-white/5">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap"
        style={{ transform: direction === 'left' ? 'translateX(0%)' : 'translateX(-50%)' }}
      >
        {repeatedText.map((t, i) => (
          <span key={i} className="flex items-center">
            <span
              className="text-6xl md:text-8xl lg:text-[10rem] font-display font-light uppercase tracking-wider mx-8"
              style={{
                WebkitTextStroke: '1px rgba(212, 175, 55, 0.25)',
                color: 'transparent',
              }}
            >
              {t}
            </span>
            <span className="text-liquid-gold/40 text-4xl md:text-6xl mx-4">{'\u2726'}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BigMarquee;
