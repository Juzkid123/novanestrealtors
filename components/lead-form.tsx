'use client'

import { useState } from 'react'
import { LeadFormData } from '@/lib/types'

interface LeadFormProps {
  title?: string
  description?: string
  propertyId?: string
  onSubmit?: (data: LeadFormData) => void
}

export default function LeadForm({
  title = 'Get in Touch',
  description = 'Tell us about your real estate goals and we&apos;ll help you find the perfect opportunity.',
  propertyId,
  onSubmit,
}: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    propertyId,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      if (onSubmit) {
        onSubmit(formData)
      }

      // Show success message
      setSubmitSuccess(true)

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        propertyId,
      })

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {submitSuccess && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700 font-semibold">
            Thank you! We&apos;ll be in touch shortly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="John"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="+233 20 000 0000"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            placeholder="Tell us about your real estate goals..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </button>

        {/* WhatsApp Alternative */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-background text-muted-foreground">Or connect via</span>
          </div>
        </div>

        <a
          href="https://wa.me/233200000000?text=Hello%20NovaNest%2C%20I%20want%20to%20discuss%20real%20estate%20opportunities"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-center block"
        >
          Chat on WhatsApp
        </a>
      </form>
    </div>
  )
}
