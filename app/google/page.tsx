import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Kits from '@/components/Kits'
import Pricing from '@/components/Pricing'
import Treatment from '@/components/Treatment'
import Guarantee from '@/components/Guarantee'
import BeforeAfter from '@/components/BeforeAfter'
import FAQ from '@/components/FAQ'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import JsonLd from '@/components/JsonLd'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GLG - Antiflacidez Facial L&L Skin - O fim da flacidez | Tratamento Profissional',
  description: 'Acabe com a flacidez facial! Antiflacidez L&L Skin com tecnologia hot/cold mode. Resultados em 15 minutos/dia. Garantia 180 dias. Frete grátis!',
  keywords: 'antiflacidez facial, flacidez, lifting facial, rugas, linhas de expressão, pele firme, tratamento facial, hot mode, cold mode, L&L Skin, massageador facial, colágeno, elastina, rejuvenescimento, beleza, estética, skincare, anti-aging',
  openGraph: {
    title: 'GLG - Antiflacidez Facial L&L Skin - O fim da flacidez',
    description: 'Acabe com a flacidez facial! Antiflacidez L&L Skin com tecnologia hot/cold mode. Resultados em 15 minutos/dia. Garantia 180 dias.',
    images: ['/images/og-image.jpg'],
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Antiflacidez Facial L&L Skin",
  "description": "Massageador facial com tecnologia hot/cold mode para combater flacidez, rugas e linhas de expressão. Resultados em 15 minutos por dia.",
  "image": [
    "https://anti-flacidez.com/images/2-min.png",
    "https://anti-flacidez.com/images/hot.png",
    "https://anti-flacidez.com/images/atuando.png"
  ],
  "brand": {
    "@type": "Brand",
    "name": "L&L Skin"
  },
  "category": "Beleza e Estética",
  "offers": {
    "@type": "Offer",
    "price": "98.85",
    "priceCurrency": "BRL",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "L&L Skin"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "BRL"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "businessDays": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        },
        "cutoffTime": "14:00",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 2,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 3,
          "maxValue": 7,
          "unitCode": "DAY"
        }
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "127"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Maria Silva"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Produto fantástico! Minha pele está mais firme e com um brilho natural que não tinha há anos."
    }
  ]
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "L&L Skin",
  "url": "https://anti-flacidez.com",
  "logo": "https://anti-flacidez.com/images/logo.png.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-41-98454-9172",
    "contactType": "customer service",
    "availableLanguage": "Portuguese"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Florianópolis",
    "addressRegion": "SC",
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://www.instagram.com/antiflacidez",
    "https://www.facebook.com/antiflacidez"
  ]
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://anti-flacidez.com"
    }
  ]
}

export default function Google() {
  return (
    <main className="min-h-screen">
      <JsonLd data={productSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Header />
      <Hero />
      <Features />
      <BeforeAfter />
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
