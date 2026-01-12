const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-pure-black border-t border-white/5 py-16">
      <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          <img
            src="https://ffjq345kpi.ufs.sh/f/wcvmaciXvbR7YmffiRCcEHeAW8xQk5DXTBuzJL7pNwGvVd2C"
            alt="Agency Logo"
            className="h-8 w-auto opacity-60"
          />

          {/* Links */}
          <div className="flex flex-wrap items-center gap-8 text-sm text-white/40">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a href="mailto:hello@youragency.com" className="hover:text-white transition-colors">
              hello@youragency.com
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-sm">
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
