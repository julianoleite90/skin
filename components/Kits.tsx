"use client"

import { useState } from 'react'

export default function Kits() {
  const [showAllIngredients, setShowAllIngredients] = useState(false)
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
            Simples e eficaz! Tome 2 cápsulas por dia, 30 minutos antes das refeições, com um copo d'água. Encaixa fácil na sua rotina.
          </p>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Resultados que impressionam:</h3>
            
            <ul className="space-y-4 text-lg">
              <li className="flex items-start space-x-3">
                <img src="/images/foliculo.png" alt="Folículo" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                  <strong>Em poucos dias:</strong> A queda diminui drasticamente! Graças à ação antioxidante e à melhora da circulação no couro cabeludo, seus fios ficam mais resistentes e com brilho natural.
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <img src="/images/foliculo.png" alt="Folículo" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                  <strong>Em 3-4 semanas:</strong> Veja novos fios nascendo e seus cabelos mais densos! Ingredientes como biotina e zinco turbinam a produção de queratina, fortalecem folículos e bloqueiam o DHT, o vilão da calvície.
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <img src="/images/foliculo.png" alt="Folículo" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                  <strong>Após 90 dias:</strong> Cabelos volumosos, saudáveis e vibrantes! A combinação de vitaminas e minerais hidrata, protege e acelera o crescimento, transformando seu visual.
                </div>
              </li>
            </ul>
              </div>
            </div>

        {/* Image - Mobile only (above content) */}
        <div className="md:hidden flex justify-center mb-8">
          <div className="w-full max-w-2xl">
            <img
              src="/images/foliculos.png"
              alt="Folículos capilares"
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>

        {/* Two Columns Layout */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 order-1 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              A fórmula mais eficaz para os cabelos
            </h3>
            
            <ul className="space-y-4 text-lg">
              {/* Primeiros 4 ingredientes sempre visíveis */}
              <li className="flex items-start space-x-3">
                <img src="/images/foliculo.png" alt="Nicotinamida" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                  <strong>Nicotinamida (Vitamina B3):</strong> Protege folículos com ação antioxidante, melhora a circulação e reduz inflamações, promovendo cabelos fortes e saudáveis.
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <img src="/images/foliculo.png" alt="D-Pantotenato de Cálcio" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                  <strong>D-Pantotenato de Cálcio (Vitamina B5):</strong> Fortalece fios, estimula a queratina e hidrata o couro cabeludo, combatendo a queda.
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <img src="/images/foliculo.png" alt="Cloridrato de Piridoxina" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                  <strong>Cloridrato de Piridoxina (Vitamina B6):</strong> Regula o sebo, fortalece folículos e acelera o crescimento de novos fios.
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <img src="/images/foliculo.png" alt="D-Biotina" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                  <strong>D-Biotina (Vitamina B7):</strong> Estimula o crescimento, reforça a queratina e reduz a quebra, para cabelos densos.
                </div>
              </li>

              {/* Ingredientes adicionais - só aparecem quando showAllIngredients for true */}
              {showAllIngredients && (
                <>
                  <li className="flex items-start space-x-3">
                    <img src="/images/foliculo.png" alt="Zinco" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                    <div>
                      <strong>Zinco:</strong> Bloqueia o DHT, fortalece folículos e reduz inflamações, prevenindo a calvície.
              </div>
                  </li>

                  <li className="flex items-start space-x-3">
                    <img src="/images/foliculo.png" alt="Sulfato Cúprico" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                    <div>
                      <strong>Sulfato Cúprico (Cobre):</strong> Fortalece folículos, estimula colágeno e mantém a cor natural dos fios.
                </div>
                  </li>

                  <li className="flex items-start space-x-3">
                    <img src="/images/foliculo.png" alt="Acetato de Retinila" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                      <strong>Acetato de Retinila (Vitamina A):</strong> Hidrata o couro cabeludo, acelera renovação celular e promove crescimento.
                </div>
                  </li>

                  <li className="flex items-start space-x-3">
                    <img src="/images/foliculo.png" alt="DL-Alfatocoferila" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                    <div>
                      <strong>DL-Alfatocoferila (Vitamina E):</strong> Protege com ação antioxidante, melhora circulação e fortalece fios.
              </div>
                  </li>

                  <li className="flex items-start space-x-3">
                    <img src="/images/foliculo.png" alt="Colágeno Hidrolisado" className="w-8 h-8 object-cover rounded-full flex-shrink-0 mt-1" />
                <div>
                      <strong>Colágeno Hidrolisado:</strong> Aumenta elasticidade, fortalece fios e hidrata o couro cabeludo.
                </div>
                  </li>
                </>
              )}
            </ul>

            {/* Link para expandir/recolher ingredientes */}
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllIngredients(!showAllIngredients)}
                className="text-green-600 hover:text-green-700 font-medium underline cursor-pointer transition-colors duration-200"
              >
                {showAllIngredients ? 'Ocultar ingredientes' : 'Exibir todos os ingredientes'}
              </button>
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

          {/* Right Column - Image - Desktop only */}
          <div className="hidden md:flex justify-center order-2">
            <div className="w-full max-w-xl">
              <img
                src="/images/foliculos.png"
                alt="Folículos capilares"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>

      </div>
      
      {/* Gradient separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  )
}
