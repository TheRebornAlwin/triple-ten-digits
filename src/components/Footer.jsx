const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-pure-black border-t border-white/5 py-20">
      <div className="container mx-auto px-8 lg:px-20 max-w-8xl">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Logo */}
          <img
            src="https://ffjq345kpi.ufs.sh/f/wcvmaciXvbR7YmffiRCcEHeAW8xQk5DXTBuzJL7pNwGvVd2C"
            alt="Agency Logo"
            className="h-12 w-auto opacity-40 transition-opacity hover:opacity-70"
          />

          {/* Tagline */}
          <p className="text-white/30 text-lg max-w-2xl font-light leading-relaxed">
            Strategic marketing partners obsessed with driving real, measurable growth for ambitious businesses.
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-10 text-sm text-white/30 font-light">
            <a href="#services" className="hover:text-white transition-colors duration-300">
              What We Do
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors duration-300">
              Case Studies
            </a>
            <a href="#process" className="hover:text-white transition-colors duration-300">
              Our Process
            </a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">
              Book a Call
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Contact */}
          <a
            href="mailto:hello@youragency.com"
            className="text-white/30 hover:text-white transition-colors duration-300 text-sm font-light"
          >
            hello@youragency.com
          </a>

          {/* Copyright */}
          <p className="text-white/20 text-xs pt-4 font-light">
            © {currentYear} Your Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
