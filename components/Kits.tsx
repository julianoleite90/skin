"use client"

export default function Kits() {
  return (
    <section id="kits" className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-200 relative">
      {/* Linha de separação com gradiente prateado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-sm"></div>
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Apenas 15 minutos por dia para transformar sua pele com um rejuvenescimento poderoso.
          </p>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto text-left">
            {/* Video - Mobile only */}
            <div className="flex justify-center mb-6 md:hidden">
              <div className="w-full max-w-md aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1122343689?autoplay=1&loop=1&muted=1&controls=0&background=1"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="L Skin Derm em ação"
                ></iframe>
              </div>
            </div>
            <strong>Passo 1:</strong> Aplique o sérum uniformemente no rosto ou pescoço para uma hidratação profunda.<br />
            <br />
            <strong>Passo 2:</strong> Utilize o massageador L Skin Derm, massageando por 5 minutos no modo quente para estimular a circulação.<br />
            <br />
            <strong>Passo 3:</strong> Finalize com 8 minutos no modo frio, tonificando e firmando a pele com precisão.
          </div>
        </div>

        {/* Two Columns Layout */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 order-1 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Efeito lifiting 6 em 1
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/images/9.png" alt="Testa" className="w-20 h-20 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Testa</h4>
                  <p className="text-gray-600">Reduz linhas horizontais e rugas de expressão.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/images/10.png" alt="Área dos olhos" className="w-20 h-20 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Área dos olhos</h4>
                  <p className="text-gray-600">Diminui pés de galinha e bolsas sob os olhos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/images/11.png" alt="Bochechas" className="w-20 h-20 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Bochechas</h4>
                  <p className="text-gray-600">Combate a flacidez e melhora a elasticidade.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/images/12.png" alt="Bigode chinês" className="w-20 h-20 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Bigode chinês</h4>
                  <p className="text-gray-600">Suaviza os sulcos nasolabiais para um visual mais jovem.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/images/13.png" alt="Queixo e mandíbula" className="w-20 h-20 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Queixo e mandíbula</h4>
                  <p className="text-gray-600">Define o contorno facial e reduz o "queixo duplo".</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <img src="/images/pescoco.png" alt="Pescoço" className="w-20 h-20 rounded-full object-cover" />
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
              className="w-full bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
            >
              COMPRAR AGORA
            </button>
            </div>
          </div>

          {/* Right Column - Video - Desktop only */}
          <div className="hidden md:flex justify-center order-2">
            <div className="w-full max-w-2xl aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1122343689?autoplay=1&loop=1&muted=1&controls=0&background=1"
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="L Skin Derm em ação"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  )
}
