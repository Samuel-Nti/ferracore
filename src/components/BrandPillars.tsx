import { Shield, Network, Blocks, Code, CreditCard, Users } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Regulatory Trust',
    description: "Built in alignment with Bank of Ghana's PFTSP framework. Compliance is embedded in every layer.",
  },
  {
    icon: Network,
    title: 'Infrastructure Strength',
    description: 'Enterprise-grade reliability with 99.9% uptime. Scalable architecture ready for growth.',
  },
  {
    icon: Blocks,
    title: 'Interoperability',
    description: 'Seamless integration with mobile money, banks, and payment networks across Ghana.',
  },
  {
    icon: Code,
    title: 'Developer Focus',
    description: 'Clean APIs, comprehensive docs, and SDKs. Build faster with tools designed for developers.',
  },
  {
    icon: CreditCard,
    title: 'Digital Credit',
    description: 'Flexible lending infrastructure with risk management and automated decisioning capabilities.',
  },
  {
    icon: Users,
    title: 'Inclusive Access',
    description: 'Empowering agents, merchants, and SMEs with accessible financial technology solutions.',
  },
];

export default function BrandPillars() {
  return (
    <section  id="features" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            Why Choose Ferracore
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Built on pillars of trust, innovation, and accessibility for Ghana's financial ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:border-gold/50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-navy to-navy-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-gold" size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
