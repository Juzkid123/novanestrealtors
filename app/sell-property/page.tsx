'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { motion } from 'framer-motion'
import { Home, Users, TrendingUp, DollarSign, CheckCircle, Clock, Search, BarChart3 } from 'lucide-react'
import Image from 'next/image'

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

export default function SellPropertyPage() {
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
            Sell Your Property
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            We help property owners connect with qualified buyers. Our expert team ensures smooth transactions and maximum value for your property.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <a href="/book-consultation" className="px-8 py-3 bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition-all inline-block">
              List Your Property
            </a>
            <a href="/contact" className="px-8 py-3 border border-accent text-accent font-semibold rounded hover:bg-accent/10 transition-all inline-block">
              Get Market Valuation
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHY SELL WITH US */}
      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        className="py-20 md:py-28"
        style={{ backgroundColor: '#111827' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Sell With NovaNest</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We connect property owners with qualified buyers through our extensive network and proven marketing strategies.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: 'Wide Buyer Network',
                description: 'Access to our extensive database of qualified buyers and investors.'
              },
              {
                icon: BarChart3,
                title: 'Expert Marketing',
                description: 'Professional marketing strategy to showcase your property to the right audience.'
              },
              {
                icon: DollarSign,
                title: 'Maximum Value',
                description: 'Competitive pricing strategy to ensure you get the best price for your property.'
              },
              {
                icon: Clock,
                title: 'Fast Process',
                description: 'Streamlined process from listing to closing to minimize time on market.'
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 rounded-lg bg-primary/50 hover:bg-primary/70 transition-colors"
              >
                <benefit.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* SELLING PROCESS */}
      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        className="py-20 md:py-28"
        style={{ backgroundColor: '#0F172A' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Selling Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to sell your property with confidence.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Property Assessment',
                description: 'We evaluate your property and conduct market analysis to determine optimal pricing.'
              },
              {
                step: '02',
                title: 'Strategic Marketing',
                description: 'Professional photography, virtual tours, and targeted marketing to attract buyers.'
              },
              {
                step: '03',
                title: 'Buyer Connections',
                description: 'We coordinate showings and connect you with serious, qualified buyers.'
              },
              {
                step: '04',
                title: 'Smooth Closing',
                description: 'Legal documentation, inspection coordination, and seamless transaction closing.'
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative"
              >
                <div className="text-accent text-6xl font-black opacity-10 absolute -top-8 left-0">{step.step}</div>
                <div className="relative p-6 pt-12 rounded-lg border border-border hover:border-accent transition-colors">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* BUYER MATCHING */}
      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        className="py-20 md:py-28"
        style={{ backgroundColor: '#111827' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">We Find Your Perfect Buyers</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our sophisticated buyer network includes investors, homeowners, and developers actively looking for properties like yours. We use data-driven strategies to connect you with serious, qualified buyers.
              </p>
              <ul className="space-y-4">
                {[
                  'Access to pre-qualified buyer pool',
                  'Professional property staging assistance',
                  'Competitive market analysis reports',
                  '24/7 buyer inquiry management',
                  'Flexible financing arrangements',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80"
                alt="Buyers viewing property"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        className="py-20 md:py-28"
        style={{ backgroundColor: '#0F172A' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Sell Your Property?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground mb-10"
          >
            Contact our team today for a free property evaluation and personalized selling strategy.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <a href="/book-consultation" className="px-8 py-3 bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition-all inline-block">
              Schedule Consultation
            </a>
            <a href="/contact" className="px-8 py-3 border border-accent text-accent font-semibold rounded hover:bg-accent/10 transition-all inline-block">
              Contact Us
            </a>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  )
}
