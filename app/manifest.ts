import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Phynamax - Emagreça de Forma Saudável',
    short_name: 'Phynamax',
    description: 'Suplemento com 6 ingredientes poderosos para emagrecimento saudável. Reduz fome, acelera metabolismo e queima gordura de forma natural.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ec4899',
    icons: [
      {
        src: '/images/logo-rosa-phynamax.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}