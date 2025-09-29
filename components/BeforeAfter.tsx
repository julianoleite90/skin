"use client"

export default function BeforeAfter() {

  return (
    <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Linha de separação com gradiente prateado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-4 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Depoimentos inspiradores
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja os resultados de pessoas que precisavam perder peso e atingiram os seus objetivos com Phynamax!
          </p>
        </div>

        {/* Two Columns Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Menos compulsão, menos absorção de gorduras, mais emagrecimento!
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Phynamax oferece uma fórmula avançada que combina poderosas fibras alimentares, elevando seu metabolismo e saciedade. Quer perder peso de forma natural e segura, conquistando mais energia e confiança para viver bem?
              </p>
              <p className="text-lg text-gray-600 mb-6 font-semibold">
                Emagrecimento real ao seu alcance!
              </p>
            </div>

            {/* CTA */}
            <div className="text-center md:text-left pt-4">
              <button 
                onClick={() => {
                  const kitsSection = document.getElementById('kits');
                  if (kitsSection) {
                    kitsSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    // Fallback: scroll to treatment section
                    const treatmentSection = document.getElementById('treatment');
                    if (treatmentSection) {
                      treatmentSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="w-full md:w-auto bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg inline-block text-center"
              >
                SIM! EU QUERO EMAGRECER
              </button>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="order-1 md:order-2">
            {/* Vimeo Video - Solto na tela */}
            <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <iframe
                  src="https://player.vimeo.com/video/1122925326?autoplay=0&loop=0&controls=1&responsive=1&portrait=0&title=0&byline=0&badge=0&background=0"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Transformação com Phynamax"
                style={{ 
                  objectFit: 'cover',
                  background: '#fff'
                }}
              ></iframe>
            </div>
            
            {/* Video Description */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                Assista aos resultados reais de quem já emagreceu!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
    </section>
  )
}
