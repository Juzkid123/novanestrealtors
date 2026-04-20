import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import LeadForm from '@/components/lead-form'
import WhatsAppButton from '@/components/whatsapp-button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have questions about investing in Ghana&apos;s real estate? Our expert team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="flex-1 py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Phone */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+233200000000"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      +233 (0) 20 000 0000
                    </a>
                    <p className="text-xs text-muted-foreground mt-2">
                      Available Mon-Fri, 9am-6pm GMT
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:info@novanest.com"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      info@novanest.com
                    </a>
                    <p className="text-xs text-muted-foreground mt-2">
                      Response within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-foreground/80 text-sm">
                      East Legon<br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Business Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday:</span>
                        <span className="text-foreground">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday:</span>
                        <span className="text-foreground">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday:</span>
                        <span className="text-foreground">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/233200000000?text=Hello%20NovaNest%2C%20I%20want%20to%20discuss%20real%20estate%20opportunities"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors text-center block"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <LeadForm
                title="Send us a Message"
                description="Fill out the form below and our team will get back to you as soon as possible."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Visit Our Office
          </h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden h-96">
            <img
              src="https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=1200&q=80"
              alt="NovaNest Office"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-muted-foreground mt-6">
            Visit our office in East Legon to discuss your real estate investment plans in person.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: 'How long does the property purchase process take?',
                answer:
                  'Typically, the entire process takes 4-8 weeks from property selection to closing, depending on legal clearance requirements and documentation.',
              },
              {
                question: 'Can non-residents invest in Ghanaian real estate?',
                answer:
                  'Yes, non-residents and diaspora investors can invest in Ghanaian real estate. We handle all the legal requirements and compliance for you.',
              },
              {
                question: 'What is the typical ROI for real estate investments in Ghana?',
                answer:
                  'Property investments typically offer 8-15% annual appreciation with potential 12-25% ROI depending on location and property type.',
              },
              {
                question: 'Do you offer property management services?',
                answer:
                  'Yes, we offer comprehensive property management services including tenant screening, rent collection, and maintenance.',
              },
              {
                question: 'What are the costs involved in buying a property?',
                answer:
                  'Costs typically include purchase price, legal fees (1-2%), stamp duty, and registration fees. We provide a detailed breakdown before you proceed.',
              },
              {
                question: 'Are there tax implications for diaspora investors?',
                answer:
                  'Ghana offers tax incentives for diaspora investors. We recommend consulting with a tax professional for your specific situation.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}
