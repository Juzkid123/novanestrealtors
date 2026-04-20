export interface Property {
  id: string
  title: string
  location: string
  price: number
  currency: string
  type: 'residential' | 'commercial' | 'mixed-use'
  bedrooms?: number
  bathrooms?: number
  sqft: number
  image: string
  images: string[]
  description: string
  amenities: string[]
  yearBuilt?: number
  roi?: string
  featured: boolean
}

export interface Listing {
  id: string
  property: Property
  agent: string
  dateAdded: Date
  viewings: number
}

export interface Testimonial {
  id: string
  name: string
  title: string
  location: string
  content: string
  image: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: 'tips' | 'guide' | 'market' | 'diaspora'
  author: string
  date: Date
  image: string
  readTime: number
}

export interface LeadFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message?: string
  serviceInterest?: string
  propertyId?: string
}
