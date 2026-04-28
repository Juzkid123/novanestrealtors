import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/233596805265?text=Hello%20NovaNest%2C%20I%20want%20to%20discuss%20real%20estate%20opportunities"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/50"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
