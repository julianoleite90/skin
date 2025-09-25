"use client"

import { useState } from 'react'
import StockCheckPopup from './StockCheckPopup'
import { useGeolocation } from '@/hooks/useGeolocation'

export default function Treatment() {
  const [showPopup, setShowPopup] = useState(false)
  const { location } = useGeolocation()

  const handleBuyClick = () => {
    setShowPopup(true)
  }

  const handleRedirect = () => {
    // Fechar popup primeiro
    setShowPopup(false)
    // Aguardar um pouco e redirecionar
    setTimeout(() => {
      window.location.href = 'https://full.sale/nQSHAk?src=rmkt-google'
    }, 100)
  }
  return (
    <section id="treatment" className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Escolha o melhor tratamento para flacidez facial
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Rejuveneça sua pele e transforme sua autoestima
        </p>
        </div>

        {/* Two Columns Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <img 
              src="/images/pitch.png" 
              alt="Tratamento para flacidez" 
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          {/* Right Column - Price and CTA */}
          <div className="space-y-6">
            {/* Title and Subtitle */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Tratamento antiflacidez L&L Skin
              </h3>
              <p className="text-lg text-gray-600">
                Tratamento eficaz para flacidez facial, bolsas, linhas de expressão e rugas.
              </p>
            </div>

            {/* Price */}
            <div className="text-center md:text-left">
              <div className="mb-2">
                <span className="text-xl text-gray-500 line-through">
                  DE: R$ 1.758,00
                </span>
              </div>
              <div className="mb-4">
                <span className="text-xl md:text-2xl font-bold text-gray-900">
                  POR: 12x de R$ 88,25
                </span>
              </div>
              <div className="mb-4 text-sm text-gray-600">
                <div>1 Und Antiflacidez massageador</div>
                <div>3 Und Sérum facial</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center md:text-left">
              <button 
                onClick={handleBuyClick}
                className="w-full md:w-auto bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
              >
                COMPRAR AGORA
              </button>
            </div>

            {/* Payment Methods */}
            <div className="text-center md:text-left">
              <img 
                src="/images/cartoes.webp" 
                alt="Formas de pagamento" 
                className="w-full max-w-xs mx-auto md:mx-0 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      {/* Stock Check Popup */}
      <StockCheckPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onRedirect={handleRedirect}
        city={location?.city || 'Sua cidade'}
      />
    </section>
  )
}
