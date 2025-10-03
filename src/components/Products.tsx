import { CreditCard, Wallet, Store, FileCheck, Terminal } from 'lucide-react';

const products = [
  {
    icon: CreditCard,
    title: 'Digital Credit',
    description: 'Launch credit products with embedded risk scoring, automated decisioning, and flexible repayment tracking. From micro-loans to SME financing.',
    features: ['Risk Assessment', 'Automated Underwriting', 'Repayment Tracking', 'Collections Management'],
    align: 'left',
  },
  {
    icon: Wallet,
    title: 'Wallets & Payments',
    description: 'White-label wallet infrastructure with instant transfers, mobile money integration, and multi-currency support built for the Ghanaian market.',
    features: ['Instant Transfers', 'MoMo Integration', 'Multi-Currency', 'Real-time Settlements'],
    align: 'right',
  },
  {
    icon: Store,
    title: 'Agent Enablement',
    description: 'Empower agent networks with robust KYC, transaction management, float monitoring, and commission tracking. Scale your distribution confidently.',
    features: ['Agent KYC', 'Float Management', 'Commission Tracking', 'Performance Analytics'],
    align: 'left',
  },
  {
    icon: FileCheck,
    title: 'Compliance Tools',
    description: 'Stay compliant with automated AML screening, transaction monitoring, regulatory reporting, and audit trails built for Bank of Ghana requirements.',
    features: ['AML Screening', 'Transaction Monitoring', 'Regulatory Reporting', 'Audit Trails'],
    align: 'right',
  },
  {
    icon: Terminal,
    title: 'Developer Platform',
    description: 'RESTful APIs, webhooks, SDKs, and comprehensive documentation. Sandbox environment for testing. Build and deploy with confidence.',
    features: ['REST APIs', 'Webhooks', 'SDKs', 'Sandbox Environment'],
    align: 'left',
  },
];

export default function Products() {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            Comprehensive Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
           Our API- driven modules cover the full spectrum of digitalfinacial services, enabling 
           rapid deployment and seamless integration.
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isLeft = product.align === 'left';

            return (
              <div
                key={index}
                className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-navy to-navy-light rounded-2xl">
                    <Icon className="text-gold" size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-navy">
                    {product.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                        <span className="text-sm font-medium text-navy-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="bg-gradient-to-br from-navy via-navy-light to-navy-dark rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl"></div>

                    <div className="relative space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="flex items-center justify-between mb-3">
                          <div className="h-2 w-24 bg-gold rounded"></div>
                          <div className="h-2 w-16 bg-white/30 rounded"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 w-full bg-white/20 rounded"></div>
                          <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="flex items-center justify-between mb-3">
                          <div className="h-2 w-32 bg-white/30 rounded"></div>
                          <div className="h-2 w-20 bg-gold rounded"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 w-full bg-white/20 rounded"></div>
                          <div className="h-2 w-2/3 bg-white/20 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
