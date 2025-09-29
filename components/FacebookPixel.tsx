'use client'

import Script from 'next/script'

// Declaração de tipo para o Facebook Pixel
declare global {
  interface Window {
    fbq: (command: string, eventName: string, parameters?: any) => void;
  }
}

export default function FacebookPixel() {
  return (
    <>
      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
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
        `}
      </Script>
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display:'none'}}
          src="https://www.facebook.com/tr?id=1480193823312637&ev=PageView&noscript=1"
          alt="Facebook Pixel"
        />
      </noscript>
    </>
  )
}

// Função para rastrear eventos de conversão
export const trackFacebookEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, {
      content_name: 'Phynamax - Suplemento para Emagrecimento',
      content_category: 'Suplementos',
      content_type: 'product',
      value: parameters?.value || 0,
      currency: 'BRL',
      ...parameters
    })
  }
}

// Função para rastrear cliques em botões
export const trackFacebookButtonClick = (buttonName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: buttonName,
      content_category: 'Engagement'
    })
  }
}

// Função para rastrear visualizações de página
export const trackFacebookPageView = (pageName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView', {
      content_name: pageName,
      content_category: 'Navigation'
    })
  }
}
