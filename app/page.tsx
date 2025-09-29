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
  title: 'Biocapilar - Acabe com a Queda de Cabelo | Crescimento Capilar Natural',
  description: 'Acabe com a queda de cabelo! Biocapilar com 9 ingredientes poderosos para crescimento capilar natural. Resultados em poucas semanas. Garantia 30 dias. Frete grátis!',
  keywords: 'queda de cabelo, crescimento capilar, calvície, entradas, falhas, biotina, vitaminas cabelo, tratamento capilar, Biocapilar, cabelos fortes, densidade capilar, saúde capilar, suplemento cabelo, crescimento natural, anti-queda',
  openGraph: {
    title: 'Biocapilar - Acabe com a Queda de Cabelo',
    description: 'Acabe com a queda de cabelo! Biocapilar com 9 ingredientes poderosos para crescimento capilar natural. Resultados em poucas semanas. Garantia 30 dias.',
    images: ['/images/og-image.jpg'],
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Biocapilar - Suplemento para Crescimento Capilar",
  "description": "Suplemento com 9 ingredientes poderosos para acabar com a queda de cabelo e estimular o crescimento capilar natural. Resultados em poucas semanas.",
  "image": [
    "https://lskinderm.com/images/2-min.png",
    "https://lskinderm.com/images/hot.png",
    "https://lskinderm.com/images/atuando.png"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Biocapilar"
  },
  "category": "Saúde e Bem-estar",
  "offers": {
    "@type": "Offer",
    "price": "257.20",
    "priceCurrency": "BRL",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Biocapilar"
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
        "name": "Carlos Silva"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Produto incrível! Em apenas 3 semanas já vejo novos fios nascendo nas minhas entradas. A queda parou completamente!"
    }
  ]
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Biocapilar",
  "url": "https://lskinderm.com",
  "logo": "https://lskinderm.com/images/logo-biocapilar.png",
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
    "https://www.instagram.com/biocapilar",
    "https://www.facebook.com/biocapilar"
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
      "item": "https://lskinderm.com"
    }
  ]
}

export default function Home() {
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
