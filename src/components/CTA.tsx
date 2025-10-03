import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
          Ready to build the future of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
            fintech in Ghana?
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Join leading fintechs building on Ferracore's platform. Start with our sandbox or schedule a demo with our team.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 py-4 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
            Get API Access
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-navy hover:bg-navy-light text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Schedule Demo
          </button>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company) => (
              <div key={company} className="text-gray-400 font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
