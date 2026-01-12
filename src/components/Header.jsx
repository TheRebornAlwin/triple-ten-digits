import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const ctaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Magnetic CTA effect
    const btn = ctaRef.current;
    if (btn) {
      const handleButtonHover = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.4,
          y: y * 0.4,
          duration: 0.3,
          ease: 'power2.out'
        });
      };

      const handleButtonLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)'
        });
      };

      btn.addEventListener('mousemove', handleButtonHover);
      btn.addEventListener('mouseleave', handleButtonLeave);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        btn.removeEventListener('mousemove', handleButtonHover);
        btn.removeEventListener('mouseleave', handleButtonLeave);
      };
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-pure-black/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-8 lg:px-20 py-6 flex items-center justify-between max-w-8xl">
        {/* Logo with subtle hover effect */}
        <motion.a
          href="#"
          className="relative z-10 group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src="https://ffjq345kpi.ufs.sh/f/wcvmaciXvbR7YmffiRCcEHeAW8xQk5DXTBuzJL7pNwGvVd2C"
            alt="Agency Logo"
            className="h-11 w-auto transition-opacity group-hover:opacity-80"
          />
        </motion.a>

        {/* Magnetic CTA */}
        <a
          ref={ctaRef}
          href="#contact"
          className="group relative px-7 py-3 text-sm font-semibold text-white border-2 border-liquid-gold/40 rounded-full transition-all duration-300 hover:bg-liquid-gold hover:text-pure-black hover:border-liquid-gold cursor-pointer overflow-hidden"
        >
          <span className="relative z-10">Book a Call</span>
          {/* Animated background */}
          <div className="absolute inset-0 bg-liquid-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
