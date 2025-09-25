// Google Merchant Center Schema
export const googleMerchantSchema = {
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
  "category": "Beleza e Estética > Cuidados com a Pele > Massageadores Faciais",
  "sku": "ANTIFLACIDEZ-LL-SKIN-001",
  "mpn": "LLSKIN001",
  "gtin": "7891234567890",
  "offers": {
    "@type": "Offer",
    "price": "88.25",
    "priceCurrency": "BRL",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "seller": {
      "@type": "Organization",
      "name": "L&L Skin",
      "url": "https://anti-flacidez.com"
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
      "merchantReturnDays": 180,
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
      "reviewBody": "Produto fantástico! Minha pele está mais firme e com um brilho natural que não tinha há anos.",
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
      "reviewBody": "Excelente produto! Resultados visíveis em poucas semanas de uso.",
      "datePublished": "2024-01-10"
    }
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Tecnologia",
      "value": "Hot/Cold Mode"
    },
    {
      "@type": "PropertyValue",
      "name": "Tempo de Uso",
      "value": "15 minutos por dia"
    },
    {
      "@type": "PropertyValue",
      "name": "Garantia",
      "value": "180 dias"
    },
    {
      "@type": "PropertyValue",
      "name": "Frete",
      "value": "Grátis"
    }
  ]
}
