import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Biocapilar - Acabe com a Queda de Cabelo | Crescimento Capilar Natural',
    short_name: 'Biocapilar',
    description: 'Acabe com a queda de cabelo! Biocapilar com 9 ingredientes poderosos para crescimento capilar natural. Resultados em poucas semanas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#16a34a',
    icons: [
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['health', 'beauty', 'lifestyle'],
    lang: 'pt-BR',
  }
}

