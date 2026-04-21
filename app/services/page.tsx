import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import Link from 'next/link'
import { Search, FileText, BarChart2, Home, TrendingUp, Users } from 'lucide-react'

export default function ServicesPage() {
  const serviceDetails = [
    {
      id: '1',
      title: 'Property Search & Advisory',
      description: 'Expert guidance to find the perfect property matching your investment criteria and budget.',
      icon: <Search className="w-10 h-10 text-accent" />,
      details: [
        'Personalized property recommendations based on your goals',
        'Market analysis and trend reports',
        'Site visits and property inspections',
        'Comparative market analysis',
      ],
    },
    {
      id: '2',
      title: 'Legal Documentation',
      description: 'Complete assistance with contracts, titles, and all legal requirements for secure transactions.',
      icon: <FileText className="w-10 h-10 text-accent" />,
      details: [
        'Contract review and negotiation',
        'Title verification and registration',
        'Property legal clearance',
        'Documentation and filing assistance',
      ],
    },
    {
      id: '3',
      title: 'Investment Analysis',
      description: 'Comprehensive ROI projections and market analysis for data-driven investment decisions.',
      icon: <BarChart2 className="w-10 h-10 text-accent" />,
      details: [
        'ROI and financial projections',
        'Market trend analysis',
        'Risk assessment',
        'Investment recommendations',
      ],
    },
    {
      id: '4',
      title: 'Property Management',
      description: 'Full property management services including maintenance, rentals, and tenant relations.',
      icon: <Home className="w-10 h-10 text-accent" />,
      details: [
        'Tenant screening and placement',
        'Rent collection and financial reporting',
        'Property maintenance and repairs',
        'Tenant dispute resolution',
      ],
    },
    {
      id: '5',
      title: 'Market Research',
      description: 'Stay updated with detailed market reports and emerging investment opportunities.',
      icon: <TrendingUp className="w-10 h-10 text-accent" />,
      details: [
        'Quarterly market reports',
        'Neighborhood analysis',
        'Development tracking',
        'Investment opportunity alerts',
      ],
    },
    {
      id: '6',
      title: 'Concierge Services',
      description: 'Personalized support for all your real estate needs and property-related inquiries.',
      icon: <Users className="w-10 h-10 text-accent" />,
      details: [
        '24/7 client support',
        'Property viewing coordination',
        'Travel and accommodation arrangements',
        'Lifestyle and location guidance',
      ],
    },
  ]

  const services = serviceDetails.map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description,
    icon: s.icon,
  }))

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive real estate solutions for investors at every stage of their journey.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            Service Details
          </h2>

          <div className="space-y-12">
            {serviceDetails.map((service) => (
              <div
                key={service.id}
                className="bg-card border border-border rounded-lg p-8 md:p-12"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">{service.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your goals, budget, and preferences' },
              { step: '02', title: 'Property Search', description: 'We identify properties that match your criteria' },
              { step: '03', title: 'Negotiation', description: 'We handle negotiations and documentation' },
              { step: '04', title: 'Closing', description: 'Finalize the transaction and take ownership' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-card border border-border rounded-lg p-6 text-center h-full flex flex-col justify-center">
                  <p className="text-4xl font-bold text-accent mb-3">{item.step}</p>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      →
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Let our expert team guide you through every step of your real estate investment journey.
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/233200000000?text=Hello%20NovaNest%2C%20I%20want%20to%20discuss%20real%20estate%20opportunities"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors text-center"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="block px-6 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&q=80"
              alt="Services"
              className="rounded-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}