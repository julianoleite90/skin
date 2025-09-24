import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Antiflacidez Facial L&L Skin - O fim da flacidez',
  description: 'Solução eficaz contra flacidez no rosto, bolsas, rugas, pé de galinha, linhas de expressão.',
  keywords: 'antiflacidez facial, flacidez, rugas, pé de galinha, linhas de expressão, bolsas, L&L Skin',
  openGraph: {
    title: 'Antiflacidez Facial L&L Skin - O fim da flacidez',
    description: 'Solução eficaz contra flacidez no rosto, bolsas, rugas, pé de galinha, linhas de expressão.',
    type: 'website',
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

