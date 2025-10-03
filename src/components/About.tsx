import { motion, Variants } from "framer-motion";
import { Layers, Shield, Zap } from "lucide-react";

export default function About() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-10"
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-navy"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
              ferraCore
            </span>
          </motion.h2>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-lg text-gray-700 leading-relaxed"
          >
            <p>
              <span className="font-semibold text-gold">ferraCore</span> blends
              the flexibility of fabric and the strength of iron to integrate
              financial ecosystems seamlessly. Our API-driven platform is the
              foundation for rapid, secure deployment of digital financial
              solutions.
            </p>
            <p>
              Built for the modern financial landscape, we empower institutions
              to innovate faster while maintaining the highest standards of
              security and compliance.
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-3 gap-8 pt-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-3">
                <Layers size={24} className="text-gold" />
              </div>
              <h3 className="font-semibold text-navy mb-1">
                Seamless Integration
              </h3>
              <p className="text-sm text-gray-600">API-first architecture</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-3">
                <Shield size={24} className="text-gold" />
              </div>
              <h3 className="font-semibold text-navy mb-1">
                Secure & Compliant
              </h3>
              <p className="text-sm text-gray-600">BoG certified platform</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-3">
                <Zap size={24} className="text-gold" />
              </div>
              <h3 className="font-semibold text-navy mb-1">
                Rapid Deployment
              </h3>
              <p className="text-sm text-gray-600">Launch in weeks</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
