import { ShieldCheck } from 'lucide-react';

export default function Compliance() {
  return (
    <section id="compliance" className="py-20 md:py-32 bg-gradient-to-br from-navy via-navy-dark to-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/20 backdrop-blur-sm rounded-2xl mb-8">
              <ShieldCheck className="text-gold" size={40} />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
              Built in line with Bank of Ghana's PFTSP framework
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Compliance by design. Every feature is architected to meet regulatory requirements while maintaining flexibility and innovation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-gold mb-2">AML/CFT</div>
                <div className="text-sm text-gray-300">Anti-Money Laundering & Counter-Terrorist Financing</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-gold mb-2">KYC/CDD</div>
                <div className="text-sm text-gray-300">Know Your Customer & Customer Due Diligence</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-gold mb-2">Data Protection</div>
                <div className="text-sm text-gray-300">DPA 2012 Compliant Data Handling</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
