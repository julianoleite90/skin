"use client"

import { useState } from 'react'

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: "Como funciona o Antiflacidez L&L Skin?",
      answer: "O Antiflacidez massageador utiliza tecnologia de calor e frio para estimular a circulação sanguínea e promover a produção de colágeno. Com apenas 15 minutos por dia, você pode combater a flacidez facial, reduzir linhas de expressão e melhorar a firmeza da pele."
    },
    {
      id: 2,
      question: "Quanto tempo leva para ver resultados?",
      answer: "A maioria dos usuários começa a notar melhorias na firmeza da pele em 7-14 dias de uso regular. Para resultados mais significativos, recomendamos o uso contínuo por 30-60 dias, seguindo as instruções do produto."
    },
    {
      id: 3,
      question: "O produto é seguro para todos os tipos de pele?",
      answer: "Sim, o Antiflacidez massageador L&L Skin foi desenvolvido para ser seguro para todos os tipos de pele. No entanto, recomendamos fazer um teste em uma pequena área antes do uso completo, especialmente se você tem pele sensível ou condições dermatológicas específicas."
    },
    {
      id: 4,
      question: "Posso usar o produto todos os dias?",
      answer: "Sim, o produto foi desenvolvido para uso diário. Recomendamos 15 minutos por dia para obter os melhores resultados. O uso consistente é fundamental para alcançar os benefícios desejados."
    },
    {
      id: 5,
      question: "Qual é a garantia do produto?",
      answer: "Oferecemos uma garantia total de 180 dias contra defeitos ou falhas. Caso ocorra qualquer problema, enviaremos um produto novo totalmente grátis, sem complicações ou burocracias."
    },
    {
      id: 6,
      question: "Como devo limpar e armazenar o produto?",
      answer: "Limpe o produto com um pano úmido após cada uso e seque completamente. Armazene em local seco e à temperatura ambiente. Evite exposição direta ao sol ou umidade excessiva."
    },
    {
      id: 7,
      question: "O produto funciona para homens também?",
      answer: "Sim, o Antiflacidez massageador L&L Skin é eficaz para homens e mulheres. A tecnologia de calor e frio beneficia todos os tipos de pele, independentemente do gênero."
    },
    {
      id: 8,
      question: "Posso usar cremes ou séruns junto com o massageador?",
      answer: "Sim, você pode usar o massageador junto com seus cremes e séruns habituais. Na verdade, isso pode potencializar os resultados, pois o massageador ajuda na penetração dos ativos dos produtos de skincare."
    },
    {
      id: 9,
      question: "Qual o prazo de entrega?",
      answer: "As entregas são realizadas via correios, e o prazo é entre 20 a 22 dias."
    }
  ]

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openItem === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openItem === faq.id && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  )
}
