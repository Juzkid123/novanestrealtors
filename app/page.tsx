'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Building2,
  MapPin,
  Phone,
  Search,
  Banknote,
  BedDouble,
  Bath,
  Maximize2,
  TrendingUp,
  Award,
  Star,
  DollarSign,
  Layers,
  CheckCircle,
  BarChart2,
  PieChart,
  MessageSquare,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
} from 'lucide-react'

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.321 5.562a5.122 5.122 0 0 1-2.8.77 5.06 5.06 0 0 1-5.06-5.06V0h-3.15v15.46a3.06 3.06 0 1 1-3.06-3.06 3.06 3.06 0 0 1 .48.04v3.1a6.12 6.12 0 1 0 5.04 5.34v-9.85a7.67 7.67 0 0 0 5.06 1.87v-3.1a4.72 4.72 0 0 1-2.48-.78Z" />
  </svg>
)

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true },
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  viewport: { once: true },
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="NovaNest" width={100} height={60} className="h-14 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/listings" className="text-sm hover:text-accent transition-colors">
              Properties
            </Link>
            <Link href="/buy-and-build" className="text-sm hover:text-accent transition-colors">
              Buy
            </Link>
            <Link href="/sell-property" className="text-sm hover:text-accent transition-colors">
              Sell
            </Link>
            <Link href="/about" className="text-sm hover:text-accent transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm hover:text-accent transition-colors">
              Market Insights
            </Link>
            <Link href="/contact" className="text-sm hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          <button className="hidden md:flex items-center gap-2 px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-primary transition-all text-sm font-medium rounded">
            Book a Consultation
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-12 h-12 rounded-lg hover:bg-accent/10 transition-colors z-50 relative cursor-pointer"
          >
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: 'currentColor',
                borderRadius: '2px',
                transition: 'transform 0.25s, opacity 0.25s',
                transform: mobileOpen ? 'translateY(8px) rotate(45deg)' : 'none',
                color: '#C9A84C'
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: 'currentColor',
                borderRadius: '2px',
                transition: 'opacity 0.25s',
                opacity: mobileOpen ? 0 : 1,
                color: '#C9A84C'
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: 'currentColor',
                borderRadius: '2px',
                transition: 'transform 0.25s, opacity 0.25s',
                transform: mobileOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
                color: '#C9A84C'
              }}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-5 flex flex-col gap-4 absolute top-16 left-0 right-0 z-40">
            <Link href="/listings" className="text-sm font-semibold text-foreground hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
              Properties
            </Link>
            <Link href="/buy-and-build" className="text-sm font-semibold text-foreground hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
              Buy
            </Link>
            <Link href="/sell-property" className="text-sm font-semibold text-foreground hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
              Sell
            </Link>
            <Link href="/about" className="text-sm font-semibold text-foreground hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="#" className="text-sm font-semibold text-foreground hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
              Market Insights
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-foreground hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <a
              href="/book-consultation"
              className="px-4 py-3 bg-accent text-primary font-semibold rounded text-sm text-center hover:bg-accent/90 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Book a Consultation
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-primary via-primary to-background opacity-40" />

        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800 }}
          >
            Find Where You Belong.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Where Comfort Meets Prosperity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
          >
            <a href="/book-consultation" className="px-8 py-3 bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition-all inline-block">
              Book a Consultation
            </a>
            <a href="/buy-and-build" className="px-8 py-3 border border-accent text-accent font-semibold rounded hover:bg-accent/10 transition-all inline-block">
              Buy
            </a>
          </motion.div>

          {/* SEARCH BAR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-primary/50 backdrop-blur-md border border-border rounded-lg p-6 max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <MapPin size={18} className="absolute left-3 top-3 text-accent" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full bg-input border border-border rounded pl-10 pr-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                />
              </div>
              <div className="relative">
                <Building2 size={18} className="absolute left-3 top-3 text-accent" />
                <select className="w-full bg-input border border-border rounded pl-10 pr-3 py-2 text-sm text-foreground focus:outline-none focus:border-accent">
                  <option>Property Type</option>
                  <option>Studio</option>
                  <option>Apartment</option>
                  <option>Townhouse</option>
                  <option>Duplex</option>
                  <option>Penthouse</option>
                  <option>Villa</option>
                </select>
              </div>
              <div className="relative">
                <Banknote size={18} className="absolute left-3 top-3 text-accent" />
                <input
                  type="text"
                  placeholder="Price Range"
                  className="w-full bg-input border border-border rounded pl-10 pr-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                />
              </div>
              <div className="relative">
                <BedDouble size={18} className="absolute left-3 top-3 text-accent" />
                <input
                  type="number"
                  placeholder="Bedrooms"
                  className="w-full bg-input border border-border rounded pl-10 pr-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                />
              </div>
            </div>
            <button className="w-full md:w-auto px-6 py-2 bg-accent text-primary font-semibold rounded flex items-center justify-center gap-2 hover:bg-accent/90 transition-all">
              <Search size={18} /> Search Properties
            </button>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        className="py-16"
        style={{ backgroundColor: '#111827' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: TrendingUp, label: 'Properties Sold', value: '500+' },
              { icon: Star, label: 'Client Satisfaction', value: '98%' },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <Icon className="mx-auto mb-3 text-accent" size={32} />
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* FEATURED LISTINGS */}
      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        className="py-20 md:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Properties</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most exclusive listings curated for discerning investors
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-lg border border-border hover:border-accent transition-all duration-300 bg-card hover:shadow-2xl hover:shadow-accent/20"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={`https://images.unsplash.com/photo-${idx === 1 ? '1600585154340-be6161a56a0c' : idx === 2 ? '1502672260266-1c1ef2d93688' : '1512458406790-f49461f84460'}?w=600&q=80`}
                    alt={`Property ${idx}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {idx === 1 && (
                      <>
                        <span className="px-3 py-1 bg-accent text-primary text-xs font-semibold rounded-full">
                          New Listing
                        </span>
                        <span className="px-3 py-1 bg-primary/80 text-accent text-xs font-semibold rounded-full">
                          Luxury
                        </span>
                      </>
                    )}
                    {idx === 2 && (
                      <span className="px-3 py-1 bg-accent text-primary text-xs font-semibold rounded-full">
                        Price Reduced
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {idx === 1 ? 'Platinum Enclave' : idx === 2 ? 'Avalon Enclave' : 'Luxury Villa'}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin size={16} />
                    <span className="text-sm">
                      {idx === 1 || idx === 2 ? 'Afrimart Atlantic, Premium Great Location' : 'Premium Great Location'}
                    </span>
                  </div>

                  <div className="mb-4 pb-4 border-b border-border">
                    <p className="text-2xl font-bold text-accent">Contact for Price</p>
                  </div>

                  <div className="flex gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <BedDouble size={16} />
                      <span>-</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={16} />
                      <span>-</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize2 size={16} />
                      <span>-</span>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-primary transition-all font-semibold rounded">
                    View Property
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* HOW WE WORK */}
      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        className="py-20 md:py-28"
        style={{ backgroundColor: '#0F172A' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A seamless process designed for your success
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                step: '01',
                title: 'Discover',
                description: 'Tell us your vision and investment goals',
              },
              {
                icon: Layers,
                step: '02',
                title: 'Match',
                description: 'We find your perfect property and opportunity',
              },
              {
                icon: CheckCircle,
                step: '03',
                title: 'Close',
                description: 'Seamless transactions and exceptional outcomes',
              },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative">
                    <div className="text-5xl font-bold text-accent/30">{item.step}</div>
                    <item.icon size={40} className="absolute inset-0 m-auto text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>



      {/* MARKET INSIGHTS */}
      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        className="py-20 md:py-28"
        style={{ backgroundColor: '#111827' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Market Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with expert analysis and industry reports
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BarChart2, title: 'Current Market Trends', desc: 'Latest insights on property values and market direction' },
              { icon: MapPin, title: 'Neighborhood Reports', desc: 'In-depth analysis of key investment areas' },
              { icon: PieChart, title: 'Investment Analysis', desc: 'Data-driven projections and ROI forecasts' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-8 bg-card border border-border rounded-lg hover:border-accent transition-colors group cursor-pointer"
              >
                <item.icon size={40} className="mb-4 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.desc}</p>
                <Link href="#" className="text-accent hover:underline text-sm font-semibold">
                  Read Report →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        className="py-20 md:py-28"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'NovaNest transformed my real estate investment journey. Their expertise and dedication are unmatched.',
                name: 'Victoria Chen',
                location: 'Los Angeles, CA',
                rating: 5,
              },
              {
                quote: 'Professional, transparent, and results-driven. I would recommend them to anyone seeking quality properties.',
                name: 'Michael Johnson',
                location: 'New York, NY',
                rating: 5,
              },
              {
                quote: 'The entire process was seamless. From discovery to closing, NovaNest handled everything perfectly.',
                name: 'Sarah Williams',
                location: 'London, UK',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-8 bg-primary border border-border rounded-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg mb-6">
                  <span className="text-3xl text-accent mr-2">"</span>
                  {testimonial.quote}
                  <span className="text-3xl text-accent ml-2">"</span>
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CONTACT CTA */}
      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        className="py-20 md:py-28"
        style={{ backgroundColor: '#0F172A' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with our team today and take the first step toward exceptional real estate opportunities.
              </p>
            </motion.div>

            <motion.form variants={fadeInUp} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-input border border-border rounded px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-input border border-border rounded px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-input border border-border rounded px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
              />
              <select className="w-full bg-input border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-accent">
                <option>Property Type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={3}
                className="w-full bg-input border border-border rounded px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent resize-none"
              />
              <button className="w-full px-6 py-3 bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition-all flex items-center justify-center gap-2">
                <MessageSquare size={18} /> Send Message
              </button>
            </motion.form>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border"
          >
            {[
              { icon: MapPin, label: 'Address', value: 'Accra, Ghana' },
              { icon: Phone, label: 'Phone', value: '+233 59 680 5265' },
              { icon: Mail, label: 'Email', value: 'novanestrealtors@gmail.com' },
            ].map((contact, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <contact.icon size={32} className="mx-auto mb-3 text-accent" />
                <p className="text-muted-foreground text-sm mb-1">{contact.label}</p>
                <p className="font-semibold">{contact.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Image src="/logo.png" alt="NovaNest" width={100} height={60} className="h-16 w-auto mb-4" />
              <p className="text-muted-foreground text-sm">Your trusted real estate partner worldwide.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/listings" className="hover:text-accent transition-colors">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-accent transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/services" className="hover:text-accent transition-colors">
                    Property Buying
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-accent transition-colors">
                    Property Selling
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-accent transition-colors">
                    Investment Advisory
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 hover:bg-primary/50 rounded-full transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 hover:bg-primary/50 rounded-full transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 hover:bg-primary/50 rounded-full transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 hover:bg-primary/50 rounded-full transition-colors">
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2025 NovaNest Realtors. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
