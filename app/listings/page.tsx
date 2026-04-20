'use client'

import { useState, useMemo } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PropertyCard from '@/components/property-card'
import WhatsAppButton from '@/components/whatsapp-button'
import { properties } from '@/lib/data'
import { Filter } from 'lucide-react'

export default function ListingsPage() {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000])
  const [showFilters, setShowFilters] = useState(false)

  const propertyTypes = ['all', ...new Set(properties.map((p) => p.type))]

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const typeMatch = selectedType === 'all' || property.type === selectedType
      const priceMatch = property.price >= priceRange[0] && property.price <= priceRange[1]
      return typeMatch && priceMatch
    })
  }, [selectedType, priceRange])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Properties
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Browse our curated selection of premium real estate opportunities in Ghana.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div
              className={`lg:w-64 flex-shrink-0 ${
                showFilters ? 'block' : 'hidden'
              } lg:block`}
            >
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </h2>

                {/* Property Type Filter */}
                <div className="mb-8">
                  <h3 className="font-semibold text-foreground mb-4">Property Type</h3>
                  <div className="space-y-2">
                    {propertyTypes.map((type) => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value={type}
                          checked={selectedType === type}
                          onChange={(e) => setSelectedType(e.target.value)}
                          className="w-4 h-4 accent-accent cursor-pointer"
                        />
                        <span className="text-foreground capitalize text-sm">
                          {type === 'all' ? 'All Types' : type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-8">
                  <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-muted-foreground">Min Price</label>
                      <input
                        type="range"
                        min="0"
                        max="5000000"
                        step="100000"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([Number(e.target.value), priceRange[1]])
                        }
                        className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
                      />
                      <p className="text-sm text-foreground mt-1">
                        {formatPrice(priceRange[0])}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground">Max Price</label>
                      <input
                        type="range"
                        min="0"
                        max="5000000"
                        step="100000"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], Number(e.target.value)])
                        }
                        className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
                      />
                      <p className="text-sm text-foreground mt-1">
                        {formatPrice(priceRange[1])}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setSelectedType('all')
                    setPriceRange([0, 5000000])
                  }}
                  className="w-full py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium text-sm"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Properties Grid */}
            <div className="flex-1">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden mb-6 flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                <Filter className="w-5 h-5" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>

              {/* Results Summary */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground">
                  {filteredProperties.length} Properties Found
                </h2>
              </div>

              {/* Properties */}
              {filteredProperties.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-lg text-muted-foreground mb-4">
                    No properties found matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedType('all')
                      setPriceRange([0, 5000000])
                    }}
                    className="text-accent font-semibold hover:text-accent/80 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}
