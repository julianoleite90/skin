"use client"

export default function Guarantee() {
  return (
    <section className="section-padding bg-gray-50 relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Garantia total Blindada
          </h2>
        </div>

        {/* Image - Mobile only */}
        <div className="flex justify-center mb-4 md:hidden">
          <img 
            src="/images/garantia.png" 
            alt="Garantia de 180 dias" 
            className="w-full max-w-xs h-auto object-contain"
          />
        </div>

        {/* Two Columns Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 order-1 md:order-1">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Satisfação Garantida
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Oferecemos uma garantia de 30 dias no Phynamax. Caso você não goste dos resultados, você pode devolver, e nós devolveremos 100% do seu dinheiro!
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Estamos tão confiantes na qualidade e durabilidade do nosso produto que assumimos todo o risco. Você tem 30 dias para usar com tranquilidade e comprovar a excelência. Conforme nossos termos.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center md:text-left pt-4">
              <button 
                onClick={() => {
                  const pricingSection = document.getElementById('precos');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full md:w-auto bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg inline-block text-center"
              >
                GARANTIR MEU PEDIDO
              </button>
            </div>
          </div>

          {/* Right Column - Image - Desktop only */}
          <div className="hidden md:flex justify-center order-2">
            <img 
              src="/images/garantia.png" 
              alt="Garantia de 180 dias" 
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Gradient separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
    </section>
  )
}
