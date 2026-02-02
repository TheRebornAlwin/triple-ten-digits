import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ children, className = '', as: Tag = 'p', start = 'top 85%', end = 'top 65%' }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const split = new SplitType(el, { types: 'words' });

    gsap.set(split.words, { opacity: 0.12 });

    gsap.to(split.words, {
      opacity: 1,
      duration: 0.3,
      stagger: 0.02,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: el,
        start,
        end,
        scrub: 0.3,
      },
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [start, end]);

  return (
    <Tag ref={textRef} className={className}>
      {children}
    </Tag>
  );
};

export default TextReveal;
