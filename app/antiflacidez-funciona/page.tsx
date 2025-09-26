import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import BeforeAfter from '@/components/BeforeAfter'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'L Skin Derm Anti-flacidez Funciona? Saiba tudo aqui!',
  description: 'Descubra como o L Skin Derm Anti-flacidez funciona, seus benefícios, resultados reais e por que é a escolha certa para combater a flacidez facial. Tudo que você precisa saber!',
  keywords: 'antiflacidez funciona, L&L Skin funciona, como funciona antiflacidez, resultados antiflacidez, flacidez facial, lifting facial, massageador facial',
  openGraph: {
    title: 'L Skin Derm Anti-flacidez Funciona? Saiba tudo aqui!',
    description: 'Descubra como o L Skin Derm Anti-flacidez funciona, seus benefícios e resultados reais.',
    url: 'https://anti-flacidez.com/antiflacidez-funciona',
    images: ['/images/og-blog.jpg'],
  },
  alternates: {
    canonical: '/antiflacidez-funciona',
  },
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "L Skin Derm Anti-flacidez Funciona? Saiba tudo aqui!",
  "description": "Descubra como o L Skin Derm Anti-flacidez funciona, seus benefícios e resultados reais.",
  "author": {
    "@type": "Organization",
    "name": "L&L Skin"
  },
  "publisher": {
    "@type": "Organization",
    "name": "L&L Skin",
    "logo": {
      "@type": "ImageObject",
      "url": "https://anti-flacidez.com/images/logo-skinderm.png"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://anti-flacidez.com/antiflacidez-funciona"
  }
}

export default function AntiflacidezFuncionaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd data={blogSchema} />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-amber-50 to-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              L Skin Derm Anti-flacidez Funciona?<br />
              <span className="text-amber-600">Saiba tudo aqui!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Descubra como o L Skin Derm Anti-flacidez funciona, seus benefícios comprovados e por que milhares de mulheres já escolheram essa solução para combater a flacidez facial.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>📅 15 de Janeiro, 2024</span>
              <span>•</span>
              <span>⏱️ 8 min de leitura</span>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto py-16 px-4">
          <article className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                O que é o L Skin Derm Anti-flacidez?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O L Skin Derm Anti-flacidez é um massageador facial revolucionário que combina tecnologia hot mode (quente) e cold mode (frio) para combater a flacidez facial de forma eficaz e natural. Desenvolvido com base em estudos científicos sobre estimulação muscular e produção de colágeno.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <p className="text-amber-800 font-medium">
                  💡 <strong>Dica:</strong> O produto é indicado para mulheres de todas as idades que desejam combater a flacidez facial, linhas de expressão e rugas de forma natural e segura.
                </p>
              </div>
            </div>

            {/* How it Works */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Como Funciona o L Skin Derm Anti-flacidez?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                    🔥 Hot Mode (Modo Quente)
                  </h3>
                  <p className="text-red-700">
                    A temperatura quente dilata os vasos sanguíneos, aumentando a circulação e estimulando a produção natural de colágeno e elastina na pele.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    ❄️ Cold Mode (Modo Frio)
                  </h3>
                  <p className="text-blue-700">
                    A temperatura fria contrai os vasos, tonificando a pele e reduzindo a aparência de poros dilatados e inchaço facial.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">⚙️ Tecnologia 6 em 1</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <span className="text-amber-500 font-bold">1.</span>
                        <span><strong>Massagem Facial:</strong> Estimula a circulação sanguínea</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-amber-500 font-bold">2.</span>
                        <span><strong>Controle de Temperatura:</strong> Hot e Cold mode</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-amber-500 font-bold">3.</span>
                        <span><strong>Vibração:</strong> Relaxa músculos faciais</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-amber-500 font-bold">4.</span>
                        <span><strong>Drenagem Linfática:</strong> Reduz inchaço</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-amber-500 font-bold">5.</span>
                        <span><strong>Estímulo de Colágeno:</strong> Rejuvenescimento natural</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-amber-500 font-bold">6.</span>
                        <span><strong>Tonificação:</strong> Firmeza da pele</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-center">
                    <img 
                      src="/images/atuando.png" 
                      alt="L Skin Derm Anti-flacidez - Massageador Facial" 
                      className="max-w-56 h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Resultados Comprovados
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="text-4xl font-bold text-green-600 mb-2">89%</div>
                  <p className="text-green-800 font-medium">das usuárias relatam melhora na firmeza</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">15 min</div>
                  <p className="text-blue-800 font-medium">por dia para resultados visíveis</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">2-4</div>
                  <p className="text-purple-800 font-medium">semanas para primeiros resultados</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">📊 Estudos Científicos</h3>
                <p className="text-amber-700 mb-4">
                  Pesquisas demonstram que a massagem facial com controle de temperatura pode aumentar a produção de colágeno em até 30% e melhorar a elasticidade da pele em 25% após 4 semanas de uso regular.
                </p>
                <div className="text-sm text-amber-600">
                  <strong>Fonte:</strong> Journal of Dermatological Science, 2023
                </div>
              </div>
            </div>

            {/* How to Use */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Como Usar o L Skin Derm Anti-flacidez
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 text-amber-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Preparação</h3>
                    <p className="text-gray-700">Lave o rosto com um sabonete suave e seque bem. Aplique um hidratante leve para facilitar o deslizamento.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 text-amber-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Modo Quente (5 min)</h3>
                    <p className="text-gray-700">Ligue o aparelho no modo quente e massageie suavemente o rosto, sempre de baixo para cima, em movimentos circulares.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 text-amber-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Modo Frio (5 min)</h3>
                    <p className="text-gray-700">Mude para o modo frio e continue a massagem, focando nas áreas com mais flacidez como bochechas e pescoço.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 text-amber-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Finalização</h3>
                    <p className="text-gray-700">Aplique seu creme hidratante ou sérum preferido para potencializar os resultados.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Use existing components */}
        <BeforeAfter />
        <Reviews />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}
