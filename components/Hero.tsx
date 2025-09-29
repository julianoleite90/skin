"use client"

import { ArrowRight, Star, Shield, Truck, Droplets } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [selectedImage, setSelectedImage] = useState(0)

  const productImages = [
    {
      main: "/images/2-min.png", 
      thumb: "/images/2-min.png"
    }
  ]


  return (
    <section className="bg-gradient-to-br from-primary-50 to-white pt-8 md:pt-16 pb-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">

            {/* Mobile Product Gallery - Only visible on mobile */}
            <div className="lg:hidden">
              {/* Main Image */}
              <div className="relative z-10 mb-4">
                <div className="w-full aspect-square max-w-[550px] mx-auto">
                  <img
                    src={productImages[selectedImage].main}
                    alt="SkinLift Pro - Lifting Facial"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent">Acabe com a queda:</span><br />
              Cabelos mais fortes e sem entradas!
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed pt-2 md:pt-8 lg:pt-8">
              Está frustrado com a queda de cabelo e as entradas cada vez mais visíveis? Diga adeus à queda e dê as boas-vindas ao crescimento de novos fios! Recupere a densidade, preencha as falhas e conquiste cabelos fortes, saudáveis e cheios de vida novamente!
            </p>


                    {/* CTA Button */}
                    <div className="flex justify-center md:justify-start pt-4 lg:pt-6">
                      <button 
                        onClick={() => {
                          const kitsSection = document.getElementById('kits');
                          if (kitsSection) {
                            kitsSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white font-semibold py-4 px-20 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                      >
                        COMPRAR AGORA
                      </button>
                    </div>

            {/* Trust Indicators */}
            <div className="flex justify-center md:justify-start items-center gap-6 -mt-4 md:mt-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Compra Segura</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Truck className="w-5 h-5" />
                <span className="text-sm">Frete Grátis</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Gallery - Only visible on desktop */}
          <div className="relative hidden lg:block">
            {/* Main Image */}
            <div className="relative z-10 mb-4 translate-y-20 -mt-20">
              <div className="w-full aspect-square max-w-[900px] mx-auto">
                <img
                  src={productImages[selectedImage].main}
                  alt="SkinLift Pro - Lifting Facial"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Linha de separação com gradiente prateado */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  )
}
