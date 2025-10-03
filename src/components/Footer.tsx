import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const footerLinks = {
  Products: ['Digital Credit', 'Wallets & Payments', 'Agent Enablement', 'Compliance Tools', 'Developer Platform'],
  Developers: ['API Documentation', 'SDKs', 'Sandbox', 'Code Examples',],
  Compliance: ['Regulatory Framework', 'Security', 'Certifications', 'Privacy Policy', 'Terms of Service'],
  Company: ['About Us', 'Careers', 'Contact'],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-navy-light via-gold/20 to-gold rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
                <div className="relative w-6 h-6 grid grid-cols-2 gap-0.5">
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-gold rounded-sm"></div>
                  <div className="bg-gold rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                </div>
              </div>
              <span className="text-2xl font-bold">Ferracore</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Banking-as-a-Service infrastructure built for Ghana's fintech ecosystem. Compliant, scalable, and developer-friendly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gold transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ferracore. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
