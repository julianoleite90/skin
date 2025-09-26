import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'L Skin Derm Anti-flacidez - Tratamento Facial Profissional',
    short_name: 'Antiflacidez L&L',
    description: 'Acabe com a flacidez facial! L Skin Derm Anti-flacidez com tecnologia hot/cold mode. Resultados em 15 minutos/dia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f59e0b',
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
    categories: ['beauty', 'health', 'lifestyle'],
    lang: 'pt-BR',
  }
}

