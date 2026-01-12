import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-pure-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-8 lg:px-16 py-6 flex items-center justify-between max-w-8xl">
        {/* Logo */}
        <a href="#" className="relative z-10 transition-opacity hover:opacity-70">
          <img
            src="https://ffjq345kpi.ufs.sh/f/wcvmaciXvbR7YmffiRCcEHeAW8xQk5DXTBuzJL7pNwGvVd2C"
            alt="Agency Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Minimal CTA */}
        <a
          href="#contact"
          className="px-6 py-2.5 text-sm font-medium text-white border border-white/20 rounded-full transition-all duration-300 hover:bg-white hover:text-pure-black"
        >
          Get Started
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
