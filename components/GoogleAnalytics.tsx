'use client'

import Script from 'next/script'

// Declaração de tipo para o Google Analytics
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GEJ71JEFEM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GEJ71JEFEM', {
            page_title: 'Phynamax - Emagreça de Forma Saudável',
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'phynamax_product',
              'custom_parameter_2': 'emagrecimento_suplemento'
            }
          });
        `}
      </Script>
    </>
  )
}

// Função para rastrear eventos de conversão
export const trackConversion = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'conversion',
      event_label: 'phynamax',
      value: parameters?.value || 0,
      currency: 'BRL',
      ...parameters
    })
  }
}

// Função para rastrear cliques em botões
export const trackButtonClick = (buttonName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'engagement',
      event_label: buttonName,
      value: 1
    })
  }
}

// Função para rastrear visualizações de página
export const trackPageView = (pageName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
      page_path: window.location.pathname
    })
  }
}
