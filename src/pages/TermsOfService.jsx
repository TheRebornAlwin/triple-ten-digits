import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <section className="relative min-h-screen py-32 bg-pure-black">
      <div className="container mx-auto px-8 lg:px-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M11 18L5 12L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
            Terms of Service
          </h1>

          <p className="text-white/40 text-sm mb-12">Last updated: February 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using the Triple Ten Digits website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Services</h2>
              <p>
                Triple Ten Digits provides digital marketing services including, but not limited to, paid advertising management, website design and development, creative services, and strategic consulting. The specific services provided will be outlined in individual client agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Client Responsibilities</h2>
              <p className="mb-4">As a client, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information about your business</li>
                <li>Grant necessary access to advertising accounts and platforms</li>
                <li>Respond to communications in a timely manner</li>
                <li>Pay for services as agreed in your service agreement</li>
                <li>Comply with all applicable laws and platform policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Payment Terms</h2>
              <p>
                Payment terms, including fees, billing cycles, and payment methods, will be specified in individual client agreements. Late payments may result in service suspension. Ad spend budgets are separate from service fees and are paid directly to advertising platforms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Intellectual Property</h2>
              <p>
                Upon full payment, clients receive ownership of creative assets specifically produced for their campaigns. Triple Ten Digits retains the right to showcase work in our portfolio unless otherwise agreed. Our proprietary methods, strategies, and tools remain our intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Limitation of Liability</h2>
              <p>
                While we strive to deliver exceptional results, marketing outcomes are influenced by many factors beyond our control. We do not guarantee specific results such as revenue amounts, conversion rates, or rankings. Our liability is limited to the fees paid for our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Termination</h2>
              <p>
                Either party may terminate services in accordance with the terms specified in individual client agreements. Upon termination, you will retain access to your advertising accounts and any assets created for you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify clients of significant changes. Continued use of our services constitutes acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Contact Us</h2>
              <p>
                For questions about these Terms of Service, contact us at{' '}
                <a href="mailto:hello@tripletendigits.com" className="text-liquid-gold hover:underline">
                  hello@tripletendigits.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;
