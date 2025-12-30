import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-luxury-charcoal border-t border-luxury-gray-dark/20">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <img
              src="https://ffjq345kpi.ufs.sh/f/wcvmaciXvbR7YmffiRCcEHeAW8xQk5DXTBuzJL7pNwGvVd2C"
              alt="Agency Logo"
              className="h-10 w-auto mb-4"
            />
            <p className="text-luxury-gray text-sm leading-relaxed">
              Strategic marketing partners obsessed with driving real, measurable growth for ambitious businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-luxury-gray hover:text-luxury-gold transition-colors duration-200 text-sm">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-luxury-gray hover:text-luxury-gold transition-colors duration-200 text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#process" className="text-luxury-gray hover:text-luxury-gold transition-colors duration-200 text-sm">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-luxury-gray hover:text-luxury-gold transition-colors duration-200 text-sm">
                  Book a Call
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@youragency.com"
                  className="text-luxury-gray hover:text-luxury-gold transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@youragency.com
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold-gradient rounded-full font-semibold text-sm text-luxury-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  Book a Strategy Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-luxury-gray-dark/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-luxury-gray text-sm">
            © {currentYear} Your Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="/privacy" className="text-luxury-gray hover:text-luxury-gold transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-luxury-gray hover:text-luxury-gold transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
