
"use client"

import { useState, useRef, useEffect } from 'react'

export default function Features() {
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-scroll effect - only on desktop
  useEffect(() => {
    if (!carouselRef.current || isDragging) return

    // Check if it's mobile (screen width < 768px)
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          carouselRef.current.scrollLeft = 0
        }
      }
    }, 50)

    return () => clearInterval(interval)
  }, [isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(carouselRef.current?.scrollLeft || 0)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }


  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - (carouselRef.current.offsetLeft || 0)
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(carouselRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.touches[0].pageX - (carouselRef.current.offsetLeft || 0)
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <section id="beneficios" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          O seu melhor aliado na perda de peso. Resultados que transformam a autoestima!
        </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recebemos depoimentos incríveis todos os dias: histórias de pessoas que emagreceram, e desfrutam de uma vida mais saudável.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="mb-16 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-4">
              {/* First set */}
              <img
                src="/images/d1.png"
                alt="Depoimento 1"
                className="h-72 md:h-72 w-auto object-contain flex-shrink-0"
              />
              <img
                src="/images/d5.png"
                alt="Depoimento 5"
                className="h-72 md:h-72 w-auto object-contain flex-shrink-0"
              />
              <img
                src="/images/d2.png"
                alt="Depoimento 2"
                className="h-72 md:h-72 w-auto object-contain flex-shrink-0"
              />
              <img
                src="/images/d4.png"
                alt="Depoimento 4"
                className="h-72 md:h-72 w-auto object-contain flex-shrink-0"
              />
              <img
                src="/images/d3.png"
                alt="Depoimento 3"
                className="h-72 md:h-72 w-auto object-contain flex-shrink-0"
              />
              <img
                src="/images/d6.png"
                alt="Depoimento 6"
                className="h-72 md:h-72 w-auto object-contain flex-shrink-0"
              />
              {/* Second set for seamless loop */}
              <img
                src="/images/d1.png"
                alt="Depoimento 1"
                className="h-72 md:h-72 w-auto object-contain flex-shrink-0"
              />
              <img
                src="/images/d5.png"
                alt="Depoimento 5"
                className="h-72 md:h-72 w-auto object-contain flex-shrink-0"
              />
              <img
                src="/images/d2.png"
                alt="Depoimento 2"
                className="h-72 md:h-72 w-auto object-contain flex-shrink-0"
              />
              <img
                src="/images/d4.png"
                alt="Depoimento 4"
                className="h-72 md:h-72 w-auto object-contain flex-shrink-0"
              />
              <img
                src="/images/d3.png"
                alt="Depoimento 3"
                className="h-72 md:h-72 w-auto object-contain flex-shrink-0"
              />
              <img
                src="/images/d6.png"
                alt="Depoimento 6"
                className="h-72 md:h-72 w-auto object-contain flex-shrink-0"
              />
            </div>
          </div>
        </div>

        {/* Disclaimer para mobile */}
        <div className="md:hidden text-center mt-4">
          <p className="text-sm text-gray-500 flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Arraste para o lado para ver mais</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {/* Compra Segura */}
            <div className="bg-gray-100 rounded-lg p-3 md:p-4 flex items-center space-x-2 md:space-x-3 pl-2 md:pl-6">
              <div className="relative">
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 md:w-4 md:h-4 bg-pink-400 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-xs md:text-sm text-gray-600">COMPRA SEGURA</p>
                <p className="text-sm md:text-base font-bold text-gray-800">30 DIAS GARANTIA</p>
              </div>
            </div>

            {/* Pagamento PIX */}
            <div className="bg-gray-100 rounded-lg p-3 md:p-4 flex items-center space-x-2 md:space-x-3 pl-2 md:pl-6">
              <div className="relative">
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                  </svg>
                </div>
                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 md:w-4 md:h-4 bg-pink-400 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-xs md:text-sm text-gray-600">DESCONTO NO PIX</p>
                <p className="text-sm md:text-base font-bold text-gray-800">10% DE DESCONTO</p>
              </div>
            </div>

            {/* Parcelamento */}
            <div className="bg-gray-100 rounded-lg p-3 md:p-4 flex items-center space-x-2 md:space-x-3 pl-2 md:pl-6">
              <div className="relative">
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" />
                  </svg>
                </div>
                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 md:w-4 md:h-4 bg-pink-400 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-xs md:text-sm text-gray-600">PARCELAMENTO</p>
                <p className="text-sm md:text-base font-bold text-gray-800">SEM JUROS</p>
              </div>
            </div>

            {/* Frete Grátis */}
            <div className="bg-gray-100 rounded-lg p-3 md:p-4 flex items-center space-x-2 md:space-x-3 pl-2 md:pl-6">
              <div className="relative">
                <div className="w-6 h-6 md:w-10 md:h-10 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                  </svg>
                </div>
                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 md:w-4 md:h-4 bg-pink-400 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-xs md:text-sm text-gray-600">FRETE GRÁTIS</p>
                <p className="text-sm md:text-base font-bold text-gray-800">ENVIO IMEDIATO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
