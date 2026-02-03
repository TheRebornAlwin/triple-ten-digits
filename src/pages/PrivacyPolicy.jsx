import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>

          <p className="text-white/40 text-sm mb-12">Last updated: February 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Introduction</h2>
              <p>
                Triple Ten Digits ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Personal Data:</strong> Name, email address, phone number, and business information you provide when contacting us or booking a call.</li>
                <li><strong className="text-white">Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and interactions.</li>
                <li><strong className="text-white">Device Data:</strong> Information about your device, browser type, IP address, and operating system.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Respond to your inquiries and schedule consultations</li>
                <li>Send you marketing and promotional communications (with your consent)</li>
                <li>Improve and optimize our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Sharing Your Information</h2>
              <p>
                We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our website and conducting our business (such as Calendly for scheduling), provided they agree to keep your information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
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

export default PrivacyPolicy;
