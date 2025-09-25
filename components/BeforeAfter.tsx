"use client"

import { useState, useRef, useEffect } from 'react'

export default function BeforeAfter() {
  const [isDragging, setIsDragging] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    
    e.preventDefault() // Previne scroll durante o drag
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = (x / rect.width) * 100
      setSliderPosition(Math.max(0, Math.min(100, percentage)))
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove, { passive: true })
      document.addEventListener('mouseup', handleGlobalMouseUp, { passive: true })
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isDragging])

  return (
    <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Linha de separação com gradiente prateado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-4 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pele Renovada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja a transformação incrível que o Antiflacidez L&L Skin pode fazer na sua pele em apenas algumas semanas
          </p>
        </div>

        {/* Two Columns Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Transformação Visível
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Nossas clientes relatam resultados impressionantes já nas primeiras semanas de uso. A tecnologia hot/cold mode estimula a produção natural de colágeno, resultando em uma pele mais firme, tonificada e rejuvenescida.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Arraste o controle para ver a diferença entre o antes e depois. Os resultados são surpreendentes!
              </p>
            </div>

            {/* CTA */}
            <div className="text-center md:text-left pt-4">
              <button 
                onClick={() => {
                  const kitsSection = document.getElementById('kits');
                  if (kitsSection) {
                    kitsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full md:w-auto bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg inline-block text-center"
              >
                QUERO MINHA TRANSFORMAÇÃO
              </button>
            </div>
          </div>

          {/* Right Column - Before/After Image Comparison */}
          <div className="order-1 md:order-2">
            <div className="relative max-w-sm mx-auto">
              {/* Image Container */}
              <div 
                ref={containerRef}
                className="relative overflow-hidden rounded-lg shadow-2xl cursor-grab active:cursor-grabbing select-none"
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
                onDragStart={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
                style={{ 
                  userSelect: 'none', 
                  WebkitUserSelect: 'none', 
                  MozUserSelect: 'none', 
                  msUserSelect: 'none',
                  touchAction: 'none'
                }}
              >
                {/* After Image (Background) - Right side */}
                <div className="relative">
                  <img 
                    src="/images/1depois.png" 
                    alt="Depois - Pele firme e tonificada" 
                    className="w-full h-auto object-cover select-none pointer-events-none"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    onContextMenu={(e) => e.preventDefault()}
                    style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
                  />
                  {/* After Label */}
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    DEPOIS
                  </div>
                </div>

                {/* Before Image (Overlay) - Left side */}
                <div 
                  className={`absolute top-0 left-0 h-full overflow-hidden ${!isDragging ? 'transition-all duration-200 ease-out' : ''}`}
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src="/images/1antes.png" 
                    alt="Antes - Pele com flacidez" 
                    className="w-full h-full object-cover select-none pointer-events-none"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    onContextMenu={(e) => e.preventDefault()}
                    style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
                  />
                  {/* Before Label */}
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ANTES
                  </div>
                </div>

                {/* Slider Line */}
                <div 
                  className={`absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 ${!isDragging ? 'transition-all duration-200 ease-out' : ''}`}
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Slider Handle */}
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg cursor-grab active:cursor-grabbing flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                  >
                    {/* Hand Icon */}
                    <svg 
                      className="w-5 h-5 text-gray-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" 
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-500 flex items-center justify-center space-x-2">
                  <span>←</span>
                  <span>Arraste a mãozinha para ver a transformação</span>
                  <span>→</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  )
}
