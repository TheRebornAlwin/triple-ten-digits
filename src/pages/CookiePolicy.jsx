import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
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
            Cookie Policy
          </h1>

          <p className="text-white/40 text-sm mb-12">Last updated: February 2026</p>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-white mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and understand how you use the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">How We Use Cookies</h2>
              <p className="mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Essential Cookies:</strong> Required for the website to function properly, including navigation and access to secure areas.</li>
                <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information about page views and user behavior.</li>
                <li><strong className="text-white">Functional Cookies:</strong> Remember your preferences and settings to provide a more personalized experience.</li>
                <li><strong className="text-white">Marketing Cookies:</strong> Track your activity across websites to deliver relevant advertising and measure ad effectiveness.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Third-Party Cookies</h2>
              <p className="mb-4">We may use third-party services that set their own cookies, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Google Analytics:</strong> For website analytics and performance tracking</li>
                <li><strong className="text-white">Calendly:</strong> For scheduling consultations</li>
                <li><strong className="text-white">Meta Pixel:</strong> For advertising measurement and optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Managing Cookies</h2>
              <p className="mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings. Note that disabling cookies may affect website functionality.</li>
                <li><strong className="text-white">Opt-Out Tools:</strong> For analytics cookies, you can use tools like the Google Analytics opt-out browser add-on.</li>
                <li><strong className="text-white">Ad Preferences:</strong> You can manage advertising preferences through platforms like the Digital Advertising Alliance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Cookie Retention</h2>
              <p>
                Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them. The retention period varies depending on the cookie's purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at{' '}
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

export default CookiePolicy;
