import { ArrowRight, Sparkles, Wallet, CreditCard, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-navy pt-20">
      {/* Background Glow Layers */}
      <div className="absolute inset-0">
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-gold/15 rounded-full blur-[220px]"></div>
        <div className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] bg-amber-400/15 rounded-full blur-[200px]"></div>
      </div>

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='90' height='90' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45 0 L90 90 H0 Z' fill='%23F5A623' fill-opacity='0.3'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Floating fintech icons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-28 left-20 text-gold/40"
      >
        <Wallet size={42} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-36 right-28 text-amber-300/40"
      >
        <CreditCard size={44} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-1/2 right-10 text-yellow-200/40"
      >
        <ShieldCheck size={46} />
      </motion.div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto relative"
        >
          {/* Glassmorphism Frame */}
          <div className="absolute -inset-x-6 -inset-y-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl z-[-1] shadow-[0_8px_40px_rgba(0,0,0,0.4)]"></div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 border border-gold/30 rounded-full mb-10 backdrop-blur-md shadow-lg"
          >
            <Sparkles size={18} className="text-gold" />
            <span className="text-gold text-sm font-semibold tracking-wide uppercase">
              Built for Ghana's Fintech Future
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl"
          >
            Banking-as-a-Service for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-300 to-yellow-200 animate-gradient-x">
              Ghana’s fintech future
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed"
          >
            Power your digital credit, wallets, and payments — compliantly. 
            Designed with regulatory trust, cultural resonance, and developer experience at the core.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 25px rgba(245,166,35,0.6)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-gold via-amber-500 to-yellow-400 text-navy font-semibold rounded-2xl transition-all shadow-lg flex items-center gap-2"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform z-10"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-200 to-amber-500 opacity-0 group-hover:opacity-20 transition-all"></div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl transition-all hover:bg-white/10 backdrop-blur-sm"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-3xl mx-auto"
          >
            {[
              { value: '99.9%', label: 'Uptime' },
              { value: '50ms', label: 'Avg Response' },
              { value: 'BoG', label: 'Compliant' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.07 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-lg"
              >
                <div className="text-4xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-32 text-navy"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L48,197.3C96,171,192,117,288,96C384,75,480,85,576,112C672,139,768,181,864,192C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128V320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
