import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1120] via-[#101c3a] to-[#0B1120] px-6 sm:px-10 lg:px-16 pt-28 pb-32">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-15%] w-[500px] h-[500px] bg-gradient-to-tr from-gold/20 via-amber-400/10 to-yellow-200/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-amber-500/20 via-gold/10 to-yellow-300/10 rounded-full blur-[180px]" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md"
        >
          <Sparkles size={16} className="text-gold" />
          <span className="text-gold text-xs sm:text-sm font-medium tracking-widest uppercase">
            Built for Ghana’s Fintech Future
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
        >
          Banking-as-a-Service for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-300 to-yellow-200">
            Africa’s fintechs
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Launch secure wallets, payments, and credit products — with compliance, 
          trust, and developer-friendly APIs designed for speed.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(245,166,35,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-gradient-to-r from-gold via-amber-500 to-yellow-400 text-navy font-semibold rounded-xl shadow-md flex items-center gap-2"
          >
            Get Started
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 backdrop-blur-sm"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "50ms", label: "API Speed" },
            { value: "BoG", label: "Compliant" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-lg transition"
            >
              <div className="text-3xl font-bold text-gold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
