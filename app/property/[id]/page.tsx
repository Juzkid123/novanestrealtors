import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import LeadForm from '@/components/lead-form'
import WhatsAppButton from '@/components/whatsapp-button'
import { properties } from '@/lib/data'
import { Bed, Bath, Ruler, MapPin, Calendar, CheckCircle } from 'lucide-react'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface PageProps {
  params: {
    id: string
  }
}

export default function PropertyDetailsPage({ params }: PageProps) {
  const property = properties.find((p) => p.id === params.id)

  if (!property) {
    notFound()
  }

  const formatPrice = (price: number | null) => {
    if (price === null) return 'Contact for Price'
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

      {/* Breadcrumb */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-accent hover:text-accent/80 transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/listings" className="text-accent hover:text-accent/80 transition-colors">
              Listings
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{property.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="flex-1 py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Property Details */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-8">
                <div className="relative h-96 rounded-lg overflow-hidden bg-muted mb-4">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {property.images && property.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {property.images.slice(0, 4).map((img, idx) => (
                      <div key={idx} className="h-24 rounded-lg overflow-hidden bg-muted">
                        <img
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Property Info */}
              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold capitalize">
                      {property.type}
                    </span>
                    {property.yearBuilt && (
                      <span className="px-4 py-2 bg-muted text-foreground rounded-full text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Built {property.yearBuilt}
                      </span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-border">
                  <p className="text-muted-foreground mb-2">Price</p>
                  <p className="text-4xl font-bold text-primary">
                    {formatPrice(property.price)}
                  </p>
                  {property.roi && (
                    <p className="text-accent font-semibold mt-2">Est. ROI: {property.roi}</p>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-8 pb-8 border-b border-border">
                  <h2 className="text-xl font-bold text-foreground mb-4">Key Features</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {property.bedrooms && (
                      <div className="flex flex-col items-center p-4 bg-primary/5 rounded-lg">
                        <Bed className="w-6 h-6 text-accent mb-2" />
                        <p className="text-2xl font-bold text-foreground">{property.bedrooms}</p>
                        <p className="text-xs text-muted-foreground">Bedrooms</p>
                      </div>
                    )}
                    {property.bathrooms && (
                      <div className="flex flex-col items-center p-4 bg-primary/5 rounded-lg">
                        <Bath className="w-6 h-6 text-accent mb-2" />
                        <p className="text-2xl font-bold text-foreground">{property.bathrooms}</p>
                        <p className="text-xs text-muted-foreground">Bathrooms</p>
                      </div>
                    )}
                    {property.sqft && (
                      <div className="flex flex-col items-center p-4 bg-primary/5 rounded-lg">
                        <Ruler className="w-6 h-6 text-accent mb-2" />
                        <p className="text-2xl font-bold text-foreground">
                          {(property.sqft / 1000).toFixed(1)}k
                        </p>
                        <p className="text-xs text-muted-foreground">Sq Ft</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8 pb-8 border-b border-border">
                  <h2 className="text-xl font-bold text-foreground mb-4">Description</h2>
                  <p className="text-foreground leading-relaxed">{property.description}</p>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">Amenities</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {property.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadForm
                  title="Interested in This Property?"
                  description="Contact us for more information and viewing arrangements."
                  propertyId={property.id}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}
