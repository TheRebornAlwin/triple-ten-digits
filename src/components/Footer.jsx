import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-pure-black border-t border-white/5 py-16">
      <div className="container mx-auto px-8 lg:px-20 max-w-8xl">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Logo */}
          <img
            src="https://ffjq345kpi.ufs.sh/f/wcvmaciXvbR7YmffiRCcEHeAW8xQk5DXTBuzJL7pNwGvVd2C"
            alt="Agency Logo"
            className="h-12 w-auto opacity-40 transition-opacity hover:opacity-70"
          />

          {/* Tagline */}
          <p className="text-white/40 text-lg max-w-2xl font-light leading-relaxed">
            Strategic marketing partners for ambitious businesses.
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-10 text-sm text-white/40 font-light">
            <a href="#services" className="hover:text-white transition-colors duration-300">
              What We Do
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors duration-300">
              Case Studies
            </a>
            <a href="#process" className="hover:text-white transition-colors duration-300">
              Our Process
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); Calendly.initPopupWidget({ url: 'https://calendly.com/alwinchen-business/discovery-call' }); }} className="hover:text-white transition-colors duration-300 cursor-pointer">
              Book a Call
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Contact */}
          <a
            href="mailto:hello@tripletendigits.com"
            className="text-white/40 hover:text-white transition-colors duration-300 text-sm font-light"
          >
            hello@tripletendigits.com
          </a>

          {/* Legal links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/30 font-light">
            <Link to="/privacy" className="hover:text-white/60 transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link to="/terms" className="hover:text-white/60 transition-colors duration-300">
              Terms of Service
            </Link>
            <span className="text-white/10">|</span>
            <Link to="/cookies" className="hover:text-white/60 transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-white/20 text-xs font-light">
            © {currentYear} Triple Ten Digits. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
