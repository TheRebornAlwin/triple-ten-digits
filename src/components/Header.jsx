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

  const navLinks = [
    { label: 'What We Do', href: '#services' },
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Process', href: '#process' },
  ];

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
        {/* Logo */}
        <motion.a
          href="/"
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

        {/* Nav links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/50 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); Calendly.initPopupWidget({ url: 'https://calendly.com/alwinchen-business/discovery-call' }); }}
          className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-pure-black bg-liquid-gold rounded-full transition-all duration-300 hover:shadow-[0_8px_24px_rgba(212,175,55,0.4)] hover:bg-liquid-gold/90 cursor-pointer"
        >
          Book a Call
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
