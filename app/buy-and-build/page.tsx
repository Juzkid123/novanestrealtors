'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { motion } from 'framer-motion'
import { Building2, Home, Hammer, CheckCircle, MapPin, DollarSign, Users, TrendingUp } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.8 }
}

export default function BuyAndBuildPage() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800 }}
          >
            Buy a Property
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Invest in land today, build your dream property tomorrow. Complete guidance from acquisition to construction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <a href="#process" className="px-8 py-3 bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition-all">
              Learn More
            </a>
            <a href="https://wa.me/233596805265?text=I%20am%20interested%20in%20buying%20land%20and%20building%20a%20property" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-accent text-accent font-semibold rounded hover:bg-accent/10 transition-all">
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Buy and Build?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete control over your investment from land selection to final construction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                title: 'Full Ownership',
                description: 'Own both land and the custom-built property of your dreams.'
              },
              {
                icon: DollarSign,
                title: 'Cost Control',
                description: 'Manage your budget from acquisition through every construction phase.'
              },
              {
                icon: Building2,
                title: 'Custom Design',
                description: 'Build exactly what you envision without compromise or limitations.'
              },
              {
                icon: TrendingUp,
                title: 'Value Growth',
                description: 'Maximize property value through strategic land selection and development.'
              }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  className="p-8 rounded-lg border border-border hover:border-accent/50 transition-colors group"
                  style={{ backgroundColor: '#0F172A' }}
                >
                  <Icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Buy & Build Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We guide you through every step of the journey.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Land Assessment',
                description: 'We identify and evaluate the perfect land that meets your needs, budget, and vision for the future.',
                icon: MapPin
              },
              {
                step: '02',
                title: 'Legal & Acquisition',
                description: 'Complete all legal requirements, title verification, and handle the land purchase seamlessly.',
                icon: CheckCircle
              },
              {
                step: '03',
                title: 'Planning & Design',
                description: 'Work with architects and planners to design your dream property according to your specifications.',
                icon: Building2
              },
              {
                step: '04',
                title: 'Construction Oversight',
                description: 'We manage all construction phases, ensuring quality, timeline compliance, and budget adherence.',
                icon: Hammer
              }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  className="flex gap-8 items-start group"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-accent/20 group-hover:bg-accent/40 transition-colors">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <div className="grow pt-2">
                    <div className="text-accent font-bold text-lg mb-2">{item.step}</div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-lg">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* INVESTMENT BENEFITS */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Investment Benefits</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Build wealth through strategic property development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="space-y-6"
            >
              {[
                'Long-term appreciation potential',
                'Portfolio diversification',
                'Rental income opportunity',
                'Tax benefits and deductions',
                'Legacy building for family',
                'Complete creative control'
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              style={{ backgroundColor: '#0F172A' }}
              className="p-10 rounded-lg border border-accent/20"
            >
              <h3 className="text-2xl font-bold mb-6">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-8">
                Our expert team is ready to help you find the perfect land and guide you through the entire building process.
              </p>
              <a href="https://wa.me/233596805265?text=I%20want%20to%20discuss%20a%20buy%20and%20build%20project" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition-all">
                Contact Our Team
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does the buy and build process take?',
                a: 'Typically 18-36 months depending on location, size, and complexity. We provide a detailed timeline for your specific project.'
              },
              {
                q: 'What is the minimum investment required?',
                a: 'It varies based on location and project scope. We work with clients across different budget ranges. Contact us for specifics.'
              },
              {
                q: 'Do you handle all legal requirements?',
                a: 'Yes, we manage all legal documentation, permits, approvals, and compliance throughout the entire process.'
              },
              {
                q: 'Can I visit the construction site regularly?',
                a: 'Absolutely. We encourage regular site visits and provide monthly progress reports with photos and updates.'
              },
              {
                q: 'What if I need to modify the design during construction?',
                a: 'Changes are possible but may affect timeline and budget. We discuss all modifications and their implications transparently.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                style={{ backgroundColor: '#111827' }}
                className="p-6 rounded-lg border border-border hover:border-accent/30 transition-colors group cursor-pointer"
              >
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{faq.q}</h3>
                <p className="text-muted-foreground mt-3">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
