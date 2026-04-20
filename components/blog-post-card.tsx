import Link from 'next/link'
import { BlogPost } from '@/lib/types'
import { Calendar, User, Clock } from 'lucide-react'

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 cursor-pointer hover:shadow-lg">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold capitalize">
            {post.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2 hover:text-accent transition-colors">
            {post.title}
          </h3>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* CTA */}
          <button className="text-accent font-semibold text-sm hover:text-accent/80 transition-colors">
            Read More →
          </button>
        </div>
      </div>
    </Link>
  )
}
