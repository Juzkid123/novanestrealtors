'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Property } from '@/lib/types'
import { Bed, Bath, Ruler } from 'lucide-react'

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number | null) => {
    if (price === null) return 'Contact for Price'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleInquire = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(
      `https://wa.me/233200000000?text=I%20am%20interested%20in%20${property.title}`,
      '_blank'
    )
  }

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
      <Link href={`/property/${property.id}`} className="block">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-muted">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {property.featured && (
            <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold capitalize">
            {property.type}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
            {property.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4">{property.location}</p>

          {/* Price */}
          <div className="mb-4">
            <p className="text-2xl font-bold text-primary">
              {formatPrice(property.price)}
            </p>
            {property.roi && (
              <p className="text-xs text-accent font-semibold mt-1">
                Est. ROI: {property.roi}
              </p>
            )}
          </div>

          {/* Features */}
          {(property.bedrooms || property.bathrooms || property.sqft) && (
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
              {property.bedrooms && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Bed className="w-4 h-4" />
                  <span>{property.bedrooms}</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Bath className="w-4 h-4" />
                  <span>{property.bathrooms}</span>
                </div>
              )}
              {property.sqft && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Ruler className="w-4 h-4" />
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <p className="text-sm text-foreground/80 line-clamp-2 mb-4">
            {property.description}
          </p>
        </div>
      </Link>

      {/* CTA - Outside Link to avoid nested anchors */}
      <div className="px-5 pb-5 flex gap-2">
        <Link href={`/property/${property.id}`} className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm text-center">
          View Details
        </Link>
        <button
          onClick={handleInquire}
          className="flex-1 bg-accent text-accent-foreground py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm"
        >
          Inquire
        </button>
      </div>
    </div>
  )
}
