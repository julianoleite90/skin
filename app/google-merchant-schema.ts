// Google Merchant Center Schema
export const googleMerchantSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Phynamax - Suplemento para Emagrecimento",
  "description": "Suplemento com 6 ingredientes poderosos para emagrecimento saudável. Reduz fome, acelera metabolismo e queima gordura de forma natural. Resultados em poucas semanas.",
  "image": [
    "https://phynamax.com.br/images/2-min.png",
    "https://phynamax.com.br/images/hot.png",
    "https://phynamax.com.br/images/atuando.png"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Phynamax"
  },
  "category": "Saúde e Bem-estar > Suplementos > Emagrecimento",
  "sku": "PHYNAMAX-001",
  "mpn": "PHY-001",
  "gtin": "7891234567890",
  "offers": {
    "@type": "Offer",
    "price": "257.20",
    "priceCurrency": "BRL",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "seller": {
      "@type": "Organization",
      "name": "Phynamax",
      "url": "https://phynamax.com.br"
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
    },
    "returnPolicy": {
      "@type": "MerchantReturnPolicy",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 30,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
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
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "Produto incrível! Em apenas 3 semanas já vejo resultados na perda de peso. A fome diminuiu e estou perdendo peso de forma saudável!",
      "datePublished": "2024-01-15"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Ana Costa"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "Excelente suplemento! Reduziu minha fome e acelerou meu metabolismo. Recomendo!",
      "datePublished": "2024-01-10"
    }
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Ingredientes",
      "value": "6 ingredientes poderosos"
    },
    {
      "@type": "PropertyValue",
      "name": "Dosagem",
      "value": "2 cápsulas ao dia"
    },
    {
      "@type": "PropertyValue",
      "name": "Garantia",
      "value": "30 dias"
    },
    {
      "@type": "PropertyValue",
      "name": "Frete",
      "value": "Grátis"
    }
  ]
}
