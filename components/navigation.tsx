'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const goldColor = '#C9A84C'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/listings', label: 'Listings' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background border-b-2 border-accent/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 z-40">
            <Image
              src="/logo.png"
              alt="NovaNest Realtors"
              width={220}
              height={120}
              className="h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`text-base font-black py-2 transition-colors duration-200 ${
                    isActive(link.href) ? 'text-accent' : 'text-foreground hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
                {/* Active indicator - always visible for current page */}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute bottom-0 left-0 h-1 rounded-full"
                    style={{ backgroundColor: goldColor }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                {/* Hover underline - only on hover */}
                {!isActive(link.href) && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 rounded-full"
                    style={{ backgroundColor: goldColor }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-3 items-center">
            <Link
              href="/book-consultation"
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-200 text-sm font-semibold whitespace-nowrap"
            >
              Book a Consultation
            </Link>
            <a
              href="https://wa.me/233596805265?text=Hello%20NovaNest%2C%20I%20want%20to%20discuss%20real%20estate%20opportunities"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-200 text-sm font-medium whitespace-nowrap"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-lg hover:bg-accent/10 transition-colors z-50 relative cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <div className="flex flex-col gap-1.5 w-6 h-6">
              <span className={`block h-1 bg-accent rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-1 bg-accent rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-1 bg-accent rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden fixed left-0 right-0 top-28 bg-background border-b-2 border-accent/30 z-40 py-4 px-4 sm:px-6 max-h-96 overflow-y-auto">
            <div className="flex flex-col gap-4 max-w-7xl mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-black px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(link.href) 
                      ? 'text-accent bg-accent/10 border-l-4 border-accent' 
                      : 'text-foreground hover:text-accent hover:bg-accent/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border">
                <Link
                  href="/book-consultation"
                  className="block px-4 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-center font-semibold mb-3"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Consultation
                </Link>
                <a
                  href="https://wa.me/233596805265?text=Hello%20NovaNest%2C%20I%20want%20to%20discuss%20real%20estate%20opportunities"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-center font-semibold"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
