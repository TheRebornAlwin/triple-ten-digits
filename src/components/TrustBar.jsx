import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TrustBar = () => {
  const [revenue, setRevenue] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    // Animate revenue counter
    const revenueTarget = 2.3;
    const revenueInterval = setInterval(() => {
      setRevenue((prev) => {
        if (prev >= revenueTarget) {
          clearInterval(revenueInterval);
          return revenueTarget;
        }
        return Math.min(prev + 0.1, revenueTarget);
      });
    }, 50);

    // Animate clients counter
    const clientsTarget = 47;
    const clientsInterval = setInterval(() => {
      setClients((prev) => {
        if (prev >= clientsTarget) {
          clearInterval(clientsInterval);
          return clientsTarget;
        }
        return Math.min(prev + 2, clientsTarget);
      });
    }, 40);

    return () => {
      clearInterval(revenueInterval);
      clearInterval(clientsInterval);
    };
  }, []);

  return (
    <section className="relative py-20 border-y border-white/5 bg-pure-black overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-liquid-gold/5 via-transparent to-liquid-gold/5" />

      <div className="container mx-auto px-8 lg:px-20 max-w-8xl relative z-10">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-display text-liquid-gold mb-2 font-light">
              £{revenue.toFixed(1)}M+
            </div>
            <div className="text-white/50 text-sm uppercase tracking-wider">Revenue Generated</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-display text-liquid-gold mb-2 font-light">
              387%
            </div>
            <div className="text-white/50 text-sm uppercase tracking-wider">Average ROAS</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-display text-liquid-gold mb-2 font-light">
              {clients}
            </div>
            <div className="text-white/50 text-sm uppercase tracking-wider">Active Clients</div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="text-white/30 text-xs uppercase tracking-widest">Trusted By</div>

          {/* Client logos - placeholder for now */}
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-40">
            <div className="text-white/60 text-sm font-medium">Google Partner</div>
            <div className="text-white/60 text-sm font-medium">Meta Business Partner</div>
            <div className="text-white/60 text-sm font-medium">TikTok Certified</div>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <svg className="w-4 h-4 text-liquid-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>4.9/5</span>
            <span className="mx-2">•</span>
            <span>100+ Five-Star Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
