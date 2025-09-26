import { CheckCircle, Package, Truck, QrCode, CreditCard } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compra Realizada - L Skin Derm Anti-flacidez | Obrigado!',
  description: 'Compra realizada com sucesso! Acompanhe os próximos passos do seu pedido do L Skin Derm Anti-flacidez.',
  keywords: 'compra realizada, obrigado, pedido confirmado, antiflacidez, L&L Skin, compra aprovada',
  openGraph: {
    title: 'Compra Realizada - L Skin Derm Anti-flacidez',
    description: 'Compra realizada com sucesso! Acompanhe os próximos passos do seu pedido.',
    url: 'https://lskinderm.com/obrigado',
    images: ['/images/og-obrigado.jpg'],
  },
  alternates: {
    canonical: '/obrigado',
  },
}

export default function ObrigadoPage() {
  const steps = [
    {
      id: 1,
      title: "Pedido em Separação",
      description: "Seu pedido está sendo preparado com cuidado em nosso estoque.",
      icon: Package,
      completed: true
    },
    {
      id: 2,
      title: "Pedido Enviado",
      description: "Seu L Skin Derm Anti-flacidez foi despachado e está a caminho.",
      icon: Truck,
      completed: true
    },
    {
      id: 3,
      title: "Código de Rastreio Enviado",
      description: "Você receberá o código de rastreamento por email e WhatsApp.",
      icon: QrCode,
      completed: true
    },
    {
      id: 4,
      title: "Fatura Cartão de Crédito",
      description: "Em sua fatura deve exibir assim:",
      icon: CreditCard,
      completed: false,
      special: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section - Mobile First */}
        <div className="bg-white py-1 px-4">
          <div className="max-w-md mx-auto text-center">
            {/* Ícone e Título Juntos */}
            <div className="mb-1">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-0" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Compra realizada com sucesso!
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                Obrigado por escolher o L Skin Derm Anti-flacidez. Seu pedido está sendo processado.
              </p>
            </div>
          </div>
        </div>

        {/* Próximos Passos */}
        <div className="bg-gray-50 py-8 px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
              Próximos Passos
            </h2>
            
            {/* Timeline Mobile */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Linha conectora */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-300"></div>
                  )}
                  
                  {/* Card do Step */}
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-3">
                      {/* Ícone */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        step.completed 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      
                      {/* Conteúdo */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                        
                        {/* Card da Fatura - Step 4 */}
                        {step.special && (
                          <div className="mt-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                            <div className="bg-white rounded border-2 border-dashed border-gray-300 p-3">
                              <div className="text-xs text-gray-500 mb-1">FATURA CARTÃO DE CRÉDITO</div>
                              <div className="text-sm font-mono font-semibold text-gray-800">
                                BOURJ*ZP*ANTIFLACIDEZ
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="bg-white py-8 px-4">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Precisa de Ajuda?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Nossa equipe está pronta para te ajudar com qualquer dúvida sobre seu pedido.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📧 contato@tecnoartho.com</p>
              <p>📱 (41) 98454-9172</p>
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