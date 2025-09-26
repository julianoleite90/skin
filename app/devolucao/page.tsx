import { ArrowLeft, Package, Clock, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Devolução - L Skin Derm Anti-flacidez | 7 Dias para Devolver',
  description: 'Política de devolução do L Skin Derm Anti-flacidez. Direito de arrependimento em 7 dias. Devolução grátis e reembolso garantido.',
  keywords: 'devolução antiflacidez, política devolução, direito arrependimento, 7 dias devolver, reembolso garantido, L&L Skin, CDC, código defesa consumidor',
  openGraph: {
    title: 'Política de Devolução - L Skin Derm Anti-flacidez',
    description: 'Política de devolução do L Skin Derm Anti-flacidez. Direito de arrependimento em 7 dias.',
    url: 'https://lskinderm.com/devolucao',
    images: ['/images/og-devolucao.jpg'],
  },
  alternates: {
    canonical: '/devolucao',
  },
}

const returnPolicySchema = {
  "@context": "https://schema.org",
  "@type": "ReturnPolicy",
  "name": "Política de Devolução L Skin Derm Anti-flacidez",
  "description": "Política de devolução do L Skin Derm Anti-flacidez conforme artigo 49 do Código de Defesa do Consumidor",
  "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
  "merchantReturnDays": 7,
  "returnMethod": "https://schema.org/ReturnByMail",
  "returnFees": "https://schema.org/FreeReturn",
  "itemCondition": "https://schema.org/UsedCondition",
  "returnPolicyCountry": "BR",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Prazo de Devolução",
      "value": "7 dias corridos"
    },
    {
      "@type": "PropertyValue", 
      "name": "Condições",
      "value": "Produto em embalagem original, sem sinais de uso"
    }
  ]
}

export default function DevolucaoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd data={returnPolicySchema} />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-white py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Política de Devoluções e Cancelamentos
            </h1>
            <p className="text-lg text-gray-600">
              Última atualização: 15 de dezembro de 2024
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Direito de Devolução e Cancelamento</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  De acordo com o artigo 49 do Código de Defesa do Consumidor (Lei nº 8.078/1990), o cliente tem o direito de solicitar a devolução ou o cancelamento do produto <strong>L Skin Derm Anti-flacidez</strong> dentro do prazo de 7 (sete) dias corridos.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Para exercer esse direito, o cliente deve entrar em contato com nosso atendimento ao cliente, informando o motivo da solicitação.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-blue-800 font-medium">Base Legal:</p>
                      <p className="text-blue-700 text-sm">Artigo 49 do CDC - Lei nº 8.078/1990</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Condições para Devolução ou Cancelamento</h2>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Prazo de 7 dias corridos</h3>
                        <p className="text-gray-700 text-sm">A solicitação deve ser feita dentro do prazo de 7 dias corridos.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Produto em condições originais</h3>
                        <p className="text-gray-700 text-sm">O produto deve estar em sua embalagem original, sem sinais de uso, acompanhado de todos os acessórios e itens inclusos no pedido.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Procedimento para Devolução</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Entre em contato</h3>
                      <p className="text-gray-700">Entre em contato com nosso serviço de atendimento ao cliente através dos canais oficiais.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Informe os dados</h3>
                      <p className="text-gray-700">Informe o número do pedido e o motivo da devolução.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Receba as instruções</h3>
                      <p className="text-gray-700">Nossa equipe fornecerá as instruções para o envio do produto de volta ao nosso centro de distribuição.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Reembolso</h3>
                      <p className="text-gray-700">Após o recebimento e análise do produto, o reembolso será processado, caso esteja em conformidade com as condições acima.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Trocas por Garantia</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Para casos de trocas relacionadas à garantia do produto, acesse nossa página de Garantia para mais informações sobre o procedimento.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <Package className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-blue-800 font-medium">Garantia de 180 dias</p>
                      <p className="text-blue-700 text-sm">Para defeitos de fabricação e falhas técnicas</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Canais de Atendimento</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center space-x-3 mb-3">
                      <Mail className="w-5 h-5 text-gray-600" />
                      <h3 className="font-semibold text-gray-900">E-mail</h3>
                    </div>
                    <p className="text-gray-700 text-sm mb-2">contato@anti-flacidez.com</p>
                    <p className="text-gray-600 text-xs">Assunto: Solicitação de Devolução</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center space-x-3 mb-3">
                      <Phone className="w-5 h-5 text-gray-600" />
                      <h3 className="font-semibold text-gray-900">Telefone</h3>
                    </div>
                    <p className="text-gray-700 text-sm mb-2">(41) 98454-9172</p>
                    <p className="text-gray-600 text-xs">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* Linha de Divisão */}
        <div className="border-t border-gray-200"></div>
      </main>

      <Footer />
    </div>
  );
}