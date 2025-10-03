import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Calendar } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', organization: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section  id="contact"  className="relative py-20 md:py-32 bg-gray-50 overflow-hidden">
      {/* Adinkra watermark pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-rule='evenodd'%3E%3Ccircle cx='50' cy='50' r='20'/%3E%3Ccircle cx='50' cy='10' r='5'/%3E%3Ccircle cx='50' cy='90' r='5'/%3E%3Ccircle cx='10' cy='50' r='5'/%3E%3Ccircle cx='90' cy='50' r='5'/%3E%3Cpath d='M30 30l40 40M70 30L30 70' stroke='%23000000' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your fintech vision into reality? Let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="John Mensah"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-navy mb-2">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="Your Company Ltd"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">Thanks! We'll be in touch shortly.</h3>
                <p className="text-gray-600 max-w-md">
                  Our team has received your message and will respond within 24 hours.
                </p>
              </div>
            )}
          </div>

          {/* Info Card */}
          <div className="bg-gradient-to-br from-navy via-navy-dark to-navy-light rounded-2xl shadow-xl p-8 md:p-10 text-white">
            <h3 className="text-3xl font-bold mb-8">Get Started Today</h3>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Clock size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Quick Response</h4>
                  <p className="text-gray-300">Our team responds within 24 hours.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Calendar size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Free Consultation</h4>
                  <p className="text-gray-300">Schedule a complimentary strategy session.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <CheckCircle2 size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Flexible Engagement</h4>
                  <p className="text-gray-300">From pilot projects to full-scale implementations.</p>
                </div>
              </div>
            </div>

            <button className="w-full px-8 py-4 bg-white hover:bg-gray-100 text-navy font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl mb-10">
              Schedule a Call
            </button>

            <div className="border-t border-white/10 pt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-gold" />
                <span>contact@ferracore.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={20} className="text-gold" />
                <span>+233 (0) 30 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={20} className="text-gold" />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
