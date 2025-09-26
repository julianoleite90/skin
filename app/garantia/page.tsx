import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Garantia de 180 Dias - L Skin Derm Anti-flacidez | Proteção Total',
  description: 'Garantia de 180 dias para o L Skin Derm Anti-flacidez. Proteção completa contra defeitos e falhas. Troca grátis em caso de problemas.',
  keywords: 'garantia antiflacidez, garantia 180 dias, proteção produto, troca grátis, defeitos fabricação, L&L Skin, política garantia, proteção total',
  openGraph: {
    title: 'Garantia de 180 Dias - L Skin Derm Anti-flacidez',
    description: 'Garantia de 180 dias para o L Skin Derm Anti-flacidez. Proteção completa contra defeitos e falhas.',
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Garantia de 180 Dias
              </h1>
              <p className="text-lg text-gray-600">
                Última atualização: 15 de dezembro de 2024
              </p>
            </div>

            {/* Conteúdo da Garantia */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Garantia contra Defeitos e Falhas
                </h2>
                <p className="text-gray-700 mb-4">
                  Oferecemos uma garantia de 180 dias contra defeitos ou falhas no Massageador Antiflacidez L&L SKIN. Caso ocorra qualquer problema técnico ou de fabricação, enviaremos um produto novo totalmente grátis, sem complicações ou burocracias.
                </p>
                <p className="text-gray-700">
                  Estamos tão confiantes na qualidade e durabilidade do nosso produto que assumimos todo o risco. Você tem 180 dias para usar com tranquilidade e comprovar a excelência do Antiflacidez Massageador L&L SKIN.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. O que está Coberto pela Garantia
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  2.1 Cobertura Específica:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Defeitos de fabricação</li>
                  <li>Falhas técnicas do dispositivo</li>
                  <li>Problemas de funcionamento</li>
                  <li>Danos internos não causados por uso inadequado</li>
                  <li>Mau funcionamento de componentes eletrônicos</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  2.2 O que NÃO está Coberto:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Mal uso do produto</li>
                  <li>Danos causados por queda ou impacto</li>
                  <li>Exposição a líquidos ou umidade excessiva</li>
                  <li>Uso inadequado conforme instruções</li>
                  <li>Desgaste normal por uso</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  2.3 Período de Garantia:
                </h3>
                <p className="text-gray-700">
                  A garantia é válida por 180 dias a partir da data de recebimento do produto. Durante este período, você pode solicitar a troca por um produto novo em caso de defeitos ou falhas.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Como Solicitar a Garantia
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  3.1 Processo de Solicitação:
                </h3>
                <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                  <li>Entre em contato conosco via e-mail: contato@anti-flacidez.com</li>
                  <li>Informe o número do seu pedido e data de compra</li>
                  <li>Descreva detalhadamente o problema ou defeito encontrado</li>
                  <li>Receberá instruções para envio do produto para análise</li>
                  <li>Envie o produto por sua conta para nossa central técnica</li>
                  <li>Realizaremos uma perícia técnica do produto</li>
                  <li>Se aprovada, enviaremos imediatamente um produto novo</li>
                </ol>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  3.2 Informações Necessárias:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Número do pedido</li>
                  <li>Nome completo</li>
                  <li>E-mail utilizado na compra</li>
                  <li>Descrição detalhada do problema ou defeito</li>
                  <li>Fotos do produto (se aplicável)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Condições da Garantia
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4.1 Produto para Análise:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Deve estar em condições adequadas para análise</li>
                  <li>Incluir todos os acessórios originais</li>
                  <li>Manter a embalagem original (se possível)</li>
                  <li>Estar limpo e sem danos externos por mal uso</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4.2 Custos de Envio:
                </h3>
                <p className="text-gray-700">
                  O custo de envio do produto para nossa central técnica é por conta do consumidor. Após a aprovação da garantia, o envio do produto novo será totalmente gratuito.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Processo de Perícia e Troca
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  5.1 Análise Técnica:
                </h3>
                <p className="text-gray-700 mb-4">
                  Após recebermos o produto, nossa equipe técnica realizará uma perícia detalhada para verificar se o problema está coberto pela garantia. O prazo para análise é de até 7 dias úteis.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  5.2 Aprovação da Garantia:
                </h3>
                <p className="text-gray-700 mb-4">
                  Se a garantia for aprovada, enviaremos imediatamente um produto novo totalmente grátis. O prazo de entrega é de até 5 dias úteis após a aprovação.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  5.3 Reprovação da Garantia:
                </h3>
                <p className="text-gray-700">
                  Caso a garantia seja reprovada por mal uso ou danos não cobertos, o produto será devolvido ao consumidor por sua conta, ou poderá ser descartado conforme orientação.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Suporte Técnico
                </h2>
                <p className="text-gray-700">
                  Durante o período de garantia, oferecemos suporte técnico completo para ajudar você a obter os melhores resultados com o Antiflacidez Massageador L&L SKIN. Nossa equipe está disponível para esclarecer dúvidas e orientar sobre o uso correto do produto.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Contato:</strong> contato@anti-flacidez.com
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Observações Importantes
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>A garantia é válida apenas para o comprador original</li>
                  <li>É necessário manter o comprovante de compra</li>
                  <li>O produto deve ser usado conforme as instruções do manual</li>
                  <li>Qualquer tentativa de reparo não autorizado anula a garantia</li>
                  <li>Esta garantia não afeta os direitos legais do consumidor</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Nossa Confiança no Produto
                </h2>
                <p className="text-gray-700">
                  Oferecemos esta garantia porque acreditamos genuinamente na qualidade e eficácia do Antiflacidez Massageador L&L SKIN. Milhares de clientes já experimentaram os benefícios do nosso produto, e estamos confiantes de que você também ficará satisfeito.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Contato para Garantia
                </h2>
                <p className="text-gray-700 mb-4">
                  Para solicitar a garantia ou esclarecer dúvidas, entre em contato conosco:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>E-mail:</strong> contato@anti-flacidez.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Assunto:</strong> Solicitação de Garantia
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Empresa:</strong> B NATURE HEALTH
                  </p>
                  <p className="text-gray-700">
                    <strong>Endereço:</strong> Av. Luiz Boiteux Piazza, 1302 - Canasvieiras, Florianópolis - SC, 88056-000
                    </p>
                </div>
              </section>
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
