'use client'

import Script from 'next/script'

export default function GoogleTagManager() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </Script>
    </>
  )
}

export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}

// Função para enviar eventos personalizados
export const sendGTMEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      event_category: 'Phynamax',
      event_label: 'Emagrecimento',
      value: parameters?.value || 0,
      currency: 'BRL',
      ...parameters
    })
  }
}

// Função para rastrear cliques em botões
export const trackGTMButtonClick = (buttonName: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'button_click',
      button_name: buttonName,
      page_location: window.location.href,
      page_path: window.location.pathname
    })
  }
}

// Função para rastrear visualizações de página
export const trackGTMPageView = (pageName: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_title: pageName,
      page_location: window.location.href,
      page_path: window.location.pathname
    })
  }
}