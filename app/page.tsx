import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Kits from '@/components/Kits'
import Pricing from '@/components/Pricing'
import Treatment from '@/components/Treatment'
import Guarantee from '@/components/Guarantee'
import FAQ from '@/components/FAQ'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Kits />
      <Pricing />
      <Treatment />
      <Guarantee />
      <Reviews />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
