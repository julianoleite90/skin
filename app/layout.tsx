import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Biocapilar - Acabe com a Queda de Cabelo | Crescimento Capilar Natural',
  description: 'Acabe com a queda de cabelo! Biocapilar com 9 ingredientes poderosos para crescimento capilar natural. Resultados em poucas semanas. Garantia 30 dias. Frete grátis!',
  keywords: 'queda de cabelo, crescimento capilar, calvície, entradas, falhas, biotina, vitaminas cabelo, tratamento capilar, Biocapilar, cabelos fortes, densidade capilar, saúde capilar, suplemento cabelo, crescimento natural, anti-queda',
  authors: [{ name: 'Biocapilar' }],
  creator: 'Biocapilar',
  publisher: 'Biocapilar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lskinderm.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Biocapilar - Acabe com a Queda de Cabelo',
    description: 'Acabe com a queda de cabelo! Biocapilar com 9 ingredientes poderosos para crescimento capilar natural. Resultados em poucas semanas. Garantia 30 dias.',
    url: 'https://lskinderm.com',
    siteName: 'Biocapilar - Crescimento Capilar',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Biocapilar - Suplemento para Crescimento Capilar Natural',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biocapilar - Acabe com a Queda de Cabelo',
    description: 'Acabe com a queda de cabelo! Biocapilar com 9 ingredientes poderosos para crescimento capilar natural. Resultados em poucas semanas.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-GEJ71JEFEM',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GEJ71JEFEM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GEJ71JEFEM');
            `,
          }}
        />
        
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1480193823312637');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1480193823312637&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

