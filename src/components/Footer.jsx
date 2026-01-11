import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-pure-black border-t border-white/5 py-20">
      <div className="container mx-auto px-6 lg:px-20 max-w-8xl">
        {/* Centered Single Column */}
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Logo */}
          <motion.img
            src="https://ffjq345kpi.ufs.sh/f/wcvmaciXvbR7YmffiRCcEHeAW8xQk5DXTBuzJL7pNwGvVd2C"
            alt="Agency Logo"
            className="h-16 w-auto opacity-90"
            whileHover={{ scale: 1.05, opacity: 1 }}
          />

          {/* Tagline */}
          <p className="text-chrome-silver/60 text-lg max-w-2xl leading-relaxed">
            Strategic marketing partners obsessed with driving real, measurable growth for ambitious businesses.
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <a href="#services" className="magnetic text-chrome-silver hover:text-liquid-gold transition-colors duration-200">
              What We Do
            </a>
            <a href="#portfolio" className="magnetic text-chrome-silver hover:text-liquid-gold transition-colors duration-200">
              Case Studies
            </a>
            <a href="#process" className="magnetic text-chrome-silver hover:text-liquid-gold transition-colors duration-200">
              Our Process
            </a>
            <a href="#contact" className="magnetic text-chrome-silver hover:text-liquid-gold transition-colors duration-200">
              Book a Call
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Contact CTA */}
          <div className="space-y-4">
            <a
              href="mailto:hello@youragency.com"
              className="magnetic text-chrome-silver hover:text-liquid-gold transition-colors duration-200 flex items-center gap-2 text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@youragency.com
            </a>

            <a
              href="#contact"
              className="magnetic inline-flex items-center gap-2 px-8 py-3 bg-liquid-gold rounded-full font-semibold text-pure-black transition-all duration-300 hover:shadow-glow-gold"
            >
              Book a Strategy Call
            </a>
          </div>

          {/* Copyright */}
          <p className="text-chrome-silver/40 text-sm pt-8">
            © {currentYear} Your Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
