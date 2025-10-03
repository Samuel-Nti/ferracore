import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1120] via-[#101c3a] to-[#0B1120] px-6 sm:px-10 lg:px-16 pt-24 pb-32">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-15%] w-[500px] h-[500px] bg-gradient-to-tr from-gold/20 via-amber-400/10 to-yellow-200/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-amber-500/20 via-gold/10 to-yellow-300/10 rounded-full blur-[180px]" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-md"
        >
          <Sparkles size={16} className="text-gold" />
          <span className="text-gold text-xs sm:text-sm font-medium tracking-widest uppercase">
            Digital Backbone of Ghanaian Financial Services
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight"
        >
          Strength at the Core of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-300 to-yellow-200">
          Digital Finance
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          ferraCore provides Banking-as-a-Service solutions
          that helps financial and non-financial institutions offer financial solutions with speed, flexibility
          and iron- clad reliability.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(245,166,35,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 bg-gradient-to-r from-gold via-amber-500 to-yellow-400 text-navy font-semibold rounded-2xl shadow-md flex items-center gap-2"
          >
            Get Started
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 border border-white/30 text-white font-medium rounded-2xl hover:bg-white/10 backdrop-blur-sm"
          >
            Learn More
          </motion.button>
        </motion.div>

       
      </div>
    </section>
  );
}
