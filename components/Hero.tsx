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
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
              <Droplets className="w-3 h-3 md:w-4 md:h-4 text-white" />
              <span>Lifting diário</span>
            </div>

            {/* Mobile Product Gallery - Only visible on mobile */}
            <div className="lg:hidden">
              {/* Main Image */}
              <div className="relative z-10 mb-4">
                <div className="w-full aspect-square max-w-[350px] mx-auto">
                  <img
                    src={productImages[selectedImage].main}
                    alt="SkinLift Pro - Lifting Facial"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent">Pele mais firme</span><br />
              Menos flacidez
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed pt-2 md:pt-8 lg:pt-8">
              O segredo para uma pele mais firme e rejuvenescida, com apenas 15 minutos por dia, você realiza o seu lifting diário e dá adeus as rugas, flacidez e linhas de expressão.
            </p>


                    {/* CTA Button */}
                    <div className="flex justify-center md:justify-start pt-4 lg:pt-6">
                      <button 
                        onClick={() => {
                          const testimonialsSection = document.getElementById('testimonials');
                          if (testimonialsSection) {
                            testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-700 text-white font-semibold py-4 px-20 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                      >
                        Ver Depoimentos
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
              <div className="w-full aspect-square max-w-[600px] mx-auto">
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
