import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["About", "Solutions", "Features", "Developers", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-navy via-navy-light to-gold rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
              <div className="relative w-6 h-6 grid grid-cols-2 gap-0.5">
                <div className="bg-white rounded-sm"></div>
                <div className="bg-gold rounded-sm"></div>
                <div className="bg-gold rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
              </div>
            </div>
            <span className="text-xl md:text-2xl font-bold text-navy">
              ferraCore
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-navy-light hover:text-navy font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2.5 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Request a Demo
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-navy hover:text-gold transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-navy-light hover:text-navy font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-2.5 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              Request a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
