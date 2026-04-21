import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import TestimonialCard from '@/components/testimonial-card'
import { testimonials } from '@/lib/data'
import { CheckCircle, Users, TrendingUp, Award, Linkedin } from 'lucide-react'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Michael A. Kweku',
      role: 'Co-founder',
      bio: 'Dedicated real estate professional specializing in property investment and client relations.',
      image: '/team-michael.jpg',
      linkedin: 'https://linkedin.com/in/michael-kweku',
    },
    {
      name: 'Essuman Samuel',
      role: 'Co-founder',
      bio: 'Expert in property development and market analysis with comprehensive industry knowledge.',
      image: '/placeholder-user.jpg',
      linkedin: 'https://linkedin.com/in/essuman-samuel',
    },
    {
      name: 'Justice Liassidzi',
      role: 'Co-founder',
      bio: 'Strategic investment consultant helping clients make informed real estate decisions.',
      image: '/placeholder-user.jpg',
      linkedin: 'https://linkedin.com/in/justice-liassidzi',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About NovaNest Realtors
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted global real estate partner. Providing expert property advisory and investment 
              guidance to clients worldwide since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  NovaNest Realtors was founded with a mission to provide world-class real estate advisory 
                  services to investors and property seekers globally. We recognized the opportunity to help 
                  clients find exceptional properties and make sound investment decisions.
                </p>
                <p>
                  Over the years, we&apos;ve built a reputation for integrity, expertise, and results. Our team
                  has successfully facilitated over $500 million in real estate transactions, helping hundreds of
                  families and investors secure exceptional properties and investment opportunities.
                </p>
                <p>
                  Today, we&apos;re a leading real estate advisory firm serving clients worldwide,
                  combining local market knowledge with international investment standards.
                </p>
              </div>
            </div>
            <div className="h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                alt="Our story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'Integrity',
                description: 'We operate with complete transparency and ethical standards in all our dealings.',
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Excellence',
                description: 'We deliver exceptional results through expertise, dedication, and attention to detail.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Partnership',
                description: 'Your success is our success. We partner with you to achieve your investment goals.',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Innovation',
                description: 'We embrace modern technology and strategies to serve you better.',
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className="text-accent mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors duration-200">
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-200"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            Client Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Properties Listed' },
              { number: '1000+', label: 'Happy Clients' },
              { number: '$500M+', label: 'Investment Volume' },
              { number: '6+', label: 'Years in Business' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
