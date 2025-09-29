import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Garantia - Biocapilar | Política de Devolução',
  description: 'Conheça os detalhes sobre nossa política de garantia e devolução do Biocapilar. Garantia de satisfação de 30 dias e proteção total.',
  keywords: 'garantia biocapilar, política devolução, garantia satisfação, termos garantia, reembolso, troca produto',
  openGraph: {
    title: 'Termos de Garantia - Biocapilar',
    description: 'Conheça os detalhes sobre nossa política de garantia e devolução do Biocapilar.',
    url: 'https://lskinderm.com/garantia',
    images: ['/images/og-garantia.jpg'],
  },
  alternates: {
    canonical: '/garantia',
  },
}

export default function Garantia() {
  return (
    <div className="min-h-screen bg-white">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GEJ71JEFEM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GEJ71JEFEM');
        `}
      </Script>
      
      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1480193823312637');
          fbq('track', 'PageView');
        `}
      </Script>
      
      <Header />
      
      <main className="pt-20">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header da Página */}
            <div className="text-center mb-12">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  🛡️ Nossa Garantia para Você
                </h1>
                <p className="text-xl text-gray-700 mb-4">
                  Ficamos do seu lado! Se não ficar satisfeito, devolvemos seu dinheiro.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <span className="bg-white px-3 py-1 rounded-full">✅ 30 dias de garantia</span>
                  <span className="bg-white px-3 py-1 rounded-full">✅ Reembolso total</span>
                  <span className="bg-white px-3 py-1 rounded-full">✅ Sem burocracias</span>
                </div>
              </div>
            </div>

            {/* Conteúdo da Garantia */}
            <div className="space-y-8">
              
              {/* Garantia Principal */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    🎯 Como Funciona Nossa Garantia
                  </h2>
                  <p className="text-lg text-gray-700">
                    Simples, rápido e sem complicações!
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 border border-green-200">
                    <h3 className="text-xl font-bold text-green-700 mb-3">📦 Comprou 1 Frasco?</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>30 dias de garantia!</strong> Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>✅ Sem perguntas chatas</p>
                      <p>✅ Reembolso total</p>
                      <p>✅ Frete grátis para devolução</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-blue-200">
                    <h3 className="text-xl font-bold text-blue-700 mb-3">📦 Comprou Kit (2+ frascos)?</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>7 dias de garantia legal!</strong> Direito garantido por lei.
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>✅ Proteção do Código de Defesa do Consumidor</p>
                      <p>✅ Reembolso total</p>
                      <p>✅ Frete grátis para devolução</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Como Solicitar */}
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  📞 Como Solicitar a Garantia
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📧</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">1. Envie um Email</h3>
                    <p className="text-sm text-gray-600">
                      Para: <strong>sac@bourjun.com.br</strong><br/>
                      Assunto: "Garantia de satisfação"
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📄</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">2. Anexe a Nota Fiscal</h3>
                    <p className="text-sm text-gray-600">
                      É só anexar o comprovante de compra que você recebeu por email
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">3. Aguarde o Retorno</h3>
                    <p className="text-sm text-gray-600">
                      Respondemos em até 48 horas com as instruções para devolução
                    </p>
                  </div>
                </div>
              </div>

              {/* Produto com Defeito */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  ⚠️ Produto com Defeito?
                </h2>
                <p className="text-center text-gray-700 mb-6">
                  Se o produto chegou danificado ou com problema de fabricação, trocamos sem custo!
                </p>
                
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">O que fazer:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Envie email para <strong>sac@bourjun.com.br</strong> com assunto "Produto com defeito"</li>
                    <li>Anexe fotos do problema</li>
                    <li>Anexe a nota fiscal</li>
                    <li>Nós enviamos um produto novo e pagamos o frete!</li>
                  </ol>
                </div>
              </div>

              {/* Informações Importantes */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  ℹ️ Informações Importantes
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">⏱️ Prazos</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Análise: até 5 dias úteis</li>
                      <li>• Reembolso: até 10 dias úteis</li>
                      <li>• Resposta: até 48 horas</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">📦 Estado do Produto</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Pode estar aberto</li>
                      <li>• Preferencialmente na embalagem original</li>
                      <li>• Não precisa estar intacto</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">💳 Reembolso</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Mesma forma de pagamento</li>
                      <li>• Mesmo CPF da compra</li>
                      <li>• 100% do valor pago</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">🚚 Frete</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Devolução: por nossa conta</li>
                      <li>• Troca por defeito: por nossa conta</li>
                      <li>• Sem custo para você</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contato */}
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  💬 Precisa de Ajuda?
                </h2>
                <p className="text-lg mb-6">
                  Nossa equipe está aqui para te ajudar!
                </p>
                <div className="space-y-3">
                  <p className="text-lg">
                    📧 <strong>sac@bourjun.com.br</strong>
                  </p>
                  <p className="text-lg">
                    📱 <strong>(41) 98454-9172</strong>
                  </p>
                  <p className="text-sm opacity-90">
                    Segunda a Sexta: 9h às 18h
                  </p>
                </div>
              </div>

              {/* Data de Atualização */}
              <div className="text-center text-sm text-gray-500">
                <p>Última atualização: 28/09/2025</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Separator line */}
      <div className="border-t border-gray-200"></div>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
