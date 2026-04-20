import { Testimonial } from '@/lib/types'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-accent text-accent"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground mb-6 leading-relaxed">
        &quot;{testimonial.content}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}
