import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src="https://ffjq345kpi.ufs.sh/f/wcvmaciXvbR7YmffiRCcEHeAW8xQk5DXTBuzJL7pNwGvVd2C"
            alt="Agency Logo"
            className="h-12 w-auto"
          />
        </motion.a>

        {/* CTA Button */}
        <a
          href="#contact"
          className="px-8 py-3 rounded-full bg-liquid-gold font-semibold text-pure-black transition-all duration-300 hover:shadow-glow-gold hover:scale-105"
        >
          Book a Strategy Call
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
