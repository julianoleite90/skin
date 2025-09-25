"use client"

export default function Kits() {
  return (
    <section id="kits" className="section-padding bg-gray-200 relative">
      {/* Linha de separação com gradiente prateado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-sm"></div>
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma poderosa combinação de  massageador facial com tecnologia de microcorrentes e sérum com retinol anti-idade, desenvolvidos para melhorar a firmeza da pele, reduzir rugas e suavizar linhas de expressão.
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
              Ação em 6 partes do Rosto
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/images/9.png" alt="Testa" className="w-16 h-16 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Testa</h4>
                  <p className="text-gray-600">Reduz linhas horizontais e rugas de expressão.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/images/10.png" alt="Área dos olhos" className="w-16 h-16 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Área dos olhos</h4>
                  <p className="text-gray-600">Diminui pés de galinha e bolsas sob os olhos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/images/11.png" alt="Bochechas" className="w-16 h-16 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Bochechas</h4>
                  <p className="text-gray-600">Combate a flacidez e melhora a elasticidade.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/images/12.png" alt="Bigode chinês" className="w-16 h-16 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Bigode chinês</h4>
                  <p className="text-gray-600">Suaviza os sulcos nasolabiais para um visual mais jovem.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/images/13.png" alt="Queixo e mandíbula" className="w-16 h-16 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Queixo e mandíbula</h4>
                  <p className="text-gray-600">Define o contorno facial e reduz o "queixo duplo".</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/images/pescoco.png" alt="Pescoço" className="w-16 h-16 rounded-full object-cover" />
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
