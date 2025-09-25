"use client"

export default function Kits() {
  return (
    <section id="kits" className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Com tecnologia hot mode (quente) e e cold mode (frio) é a solução ideal para revitalizar sua pele, combater a flacidez, suavizar linhas de expressão, rugas e o bigode chinês. Em apenas 15 minutos por sessão, ele atua em seis áreas específicas do rosto, proporcionando um cuidado completo e resultados visíveis em poucos dias, semelhantes a um lifting.
          </p>
        </div>

        {/* Image - Mobile only */}
        <div className="flex justify-center mb-8 md:hidden">
          <img 
            src="/images/atuando.png" 
            alt="Kits disponíveis" 
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

        {/* Two Columns Layout */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 order-1 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Tratamento em 6 Áreas do Rosto
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Testa</h4>
                  <p className="text-gray-600">Reduz linhas horizontais e rugas de expressão.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Área dos olhos</h4>
                  <p className="text-gray-600">Diminui pés de galinha e bolsas sob os olhos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Bochechas</h4>
                  <p className="text-gray-600">Combate a flacidez e melhora a elasticidade.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Bigode chinês</h4>
                  <p className="text-gray-600">Suaviza os sulcos nasolabiais para um visual mais jovem.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Queixo e mandíbula</h4>
                  <p className="text-gray-600">Define o contorno facial e reduz o "queixo duplo".</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Pescoço</h4>
                  <p className="text-gray-600">Melhora a firmeza da pele, prevenindo a flacidez.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
            <button 
              onClick={() => {
                const treatmentSection = document.getElementById('treatment');
                if (treatmentSection) {
                  treatmentSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
            >
              COMPRAR AGORA
            </button>
            </div>
          </div>

          {/* Right Column - Image - Desktop only */}
          <div className="hidden md:flex justify-center order-2">
            <img 
              src="/images/atuando.png" 
              alt="Kits disponíveis" 
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Gradient separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  )
}
