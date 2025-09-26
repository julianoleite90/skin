import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'L Skin Derm - Anti-flacidez facial | Tratamento Profissional',
  description: 'Acabe com a flacidez facial! L Skin Derm Anti-flacidez com tecnologia hot/cold mode. Resultados em 15 minutos/dia. Garantia 180 dias. Frete grátis!',
  keywords: 'antiflacidez facial, flacidez, lifting facial, rugas, linhas de expressão, pele firme, tratamento facial, hot mode, cold mode, L Skin Derm, massageador facial, colágeno, elastina, rejuvenescimento, beleza, estética, skincare, anti-aging',
  authors: [{ name: 'L Skin Derm' }],
  creator: 'L Skin Derm',
  publisher: 'L Skin Derm',
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
    title: 'L Skin Derm - Anti-flacidez facial',
    description: 'Acabe com a flacidez facial! L Skin Derm Anti-flacidez com tecnologia hot/cold mode. Resultados em 15 minutos/dia. Garantia 180 dias.',
    url: 'https://lskinderm.com',
    siteName: 'L Skin Derm Anti-flacidez',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Antiflacidez Facial L Skin Derm - Tratamento Profissional',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'L Skin Derm - Anti-flacidez facial',
    description: 'Acabe com a flacidez facial! L Skin Derm Anti-flacidez com tecnologia hot/cold mode. Resultados em 15 minutos/dia.',
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

