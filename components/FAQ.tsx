"use client"

import { useState } from 'react'

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: "Como devo tomar o Biocapilar?",
      answer: "Recomenda-se tomar 2 cápsulas por dia, preferencialmente antes das principais refeições. Para melhores resultados, tome uma cápsula 30 minutos antes do almoço e outra 30 minutos antes do jantar, sempre com um copo de água."
    },
    {
      id: 2,
      question: "Qual é a composição?",
      answer: "Biocapilar é composto por: Nicotinamida (Vitamina B3), D-Pantotenato de Cálcio (Vitamina B5), Cloridrato de Piridoxina (Vitamina B6), D-Biotina (Vitamina B7), Zinco, Sulfato Cúprico (Cobre), Acetato de Retinila (Vitamina A), DL-Alfatocoferila (Vitamina E) e Colágeno Hidrolisado. Nove poderosos ingredientes que juntos promovem um crescimento capilar saudável e totalmente natural."
    },
    {
      id: 3,
      question: "Preciso usar outros produtos?",
      answer: "Não é necessário! Inclusive a fórmula é tão eficaz e em alguns casos melhor que os produtos vendidos em farmácia. O Biocapilar age de dentro para fora, tratando a raiz do problema de forma natural e sem efeitos colaterais."
    },
    {
      id: 4,
      question: "Quanto tempo demora para ver resultados no cabelo?",
      answer: "Os primeiros resultados começam a aparecer nas primeiras semanas de uso, com redução da queda e fortalecimento dos fios. O crescimento e espessamento mais significativo torna-se visível a partir do segundo mês de uso contínuo."
    },
    {
      id: 5,
      question: "O Biocapilar tem efeitos colaterais?",
      answer: "Por ser um produto 100% natural, o Biocapilar não apresenta efeitos colaterais. Você pode tomar sem riscos e aproveitar todos os benefícios. Importante: pessoas que possuem alergias a crustáceos não devem utilizar."
    },
    {
      id: 6,
      question: "Como funciona a garantia de satisfação?",
      answer: "Oferecemos 30 dias de garantia incondicional. Se você não ficar satisfeito com os resultados, basta entrar em contato com nosso atendimento e solicitar o reembolso total do seu investimento, conforme os nossos termos de garantia. Você não tem riscos."
    },
    {
      id: 7,
      question: "Qual o prazo de entrega?",
      answer: "O prazo médio de entrega é de 5 a 10 dias úteis para todo Brasil. Após a confirmação do pagamento, você receberá o código de rastreamento para acompanhar sua encomenda."
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
