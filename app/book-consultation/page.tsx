'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <div className="bg-background">
      <Navigation />

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 md:pt-40 md:pb-28"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Schedule Your Consultation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet with our expert advisors to discuss your real estate goals and find the perfect property.
          </p>
        </div>
      </motion.section>

      {/* BENEFITS */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: 'Expert Guidance',
                description: 'Connect with experienced real estate professionals',
              },
              {
                icon: MessageSquare,
                title: 'Personalized Advice',
                description: 'Get tailored recommendations for your needs',
              },
              {
                icon: CheckCircle,
                title: 'No Obligation',
                description: 'Free consultation with zero commitment',
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="bg-primary/50 rounded-lg p-8 md:p-12 border border-border"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Consultation Requested!</h3>
                <p className="text-muted-foreground">
                  We&apos;ve received your request. Our team will contact you shortly to confirm your appointment.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-input border border-border rounded px-4 py-2 text-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your Name"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-input border border-border rounded px-4 py-2 text-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-input border border-border rounded px-4 py-2 text-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
                    <label className="block text-sm font-medium mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="w-full bg-input border border-border rounded px-4 py-2 text-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
                    <label className="block text-sm font-medium mb-2">Preferred Time</label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full bg-input border border-border rounded px-4 py-2 text-foreground focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select a time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
                  <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-input border border-border rounded px-4 py-2 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your property goals..."
                  />
                </motion.div>

                <motion.button
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  type="submit"
                  className="w-full bg-accent text-primary font-semibold py-3 rounded hover:bg-accent/90 transition-all"
                >
                  Schedule Consultation
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-4xl font-bold text-center mb-16"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                q: 'How long does a consultation take?',
                a: 'Most consultations take 30-45 minutes. We&apos;ll discuss your goals and timeline.',
              },
              {
                q: 'Is the consultation free?',
                a: 'Yes, our initial consultation is completely free with no obligation.',
              },
              {
                q: 'Can I schedule a video call instead?',
                a: 'Absolutely! We offer both in-person and virtual consultations.',
              },
              {
                q: 'What should I prepare for the consultation?',
                a: 'Think about your budget, location preferences, and timeline. Bring any questions you have.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="bg-primary/50 rounded-lg p-6 border border-border hover:border-accent/50 transition-colors"
              >
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <span className="text-accent">Q:</span> {faq.q}
                </h3>
                <p className="text-muted-foreground ml-6">
                  <span className="text-accent">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
