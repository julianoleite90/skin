import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso - L Skin Derm Anti-flacidez | Condições de Compra',
  description: 'Termos de uso do L Skin Derm Anti-flacidez. Conheça as condições de compra, entrega e garantia do produto.',
  keywords: 'termos uso, condições compra, termos antiflacidez, L&L Skin, política comercial, condições entrega, garantia produto',
  openGraph: {
    title: 'Termos de Uso - L Skin Derm Anti-flacidez',
    description: 'Termos de uso do L Skin Derm Anti-flacidez. Conheça as condições de compra e entrega.',
    url: 'https://anti-flacidez.com/termos-uso',
    images: ['/images/og-termos.jpg'],
  },
  alternates: {
    canonical: '/termos-uso',
  },
}

export default function TermosUsoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-white py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Termos de Uso
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ao acessar e utilizar o site da L Skin Derm Anti-flacidez, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nosso site.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descrição do Serviço</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A L Skin Derm Anti-flacidez oferece:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Produtos para tratamento facial anti-flacidez</li>
                  <li>Informações sobre cuidados com a pele</li>
                  <li>Suporte ao cliente</li>
                  <li>Rastreamento de pedidos</li>
                  <li>Garantia de produtos</li>
                </ul>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Elegibilidade</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Para utilizar nossos serviços, você deve:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Ter pelo menos 18 anos de idade</li>
                  <li>Fornecer informações verdadeiras e precisas</li>
                  <li>Ter capacidade legal para celebrar contratos</li>
                  <li>Residir em território brasileiro</li>
                </ul>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Uso do Site</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4.1 Uso Permitido</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Navegar e visualizar produtos</li>
                    <li>Fazer pedidos de produtos</li>
                    <li>Utilizar ferramentas de rastreamento</li>
                    <li>Entrar em contato com suporte</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4.2 Uso Proibido</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Usar o site para atividades ilegais</li>
                    <li>Tentar acessar áreas restritas</li>
                    <li>Interferir no funcionamento do site</li>
                    <li>Transmitir vírus ou código malicioso</li>
                    <li>Fazer engenharia reversa do site</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pedidos e Pagamentos</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5.1 Processo de Pedido</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Seleção de produtos</li>
                    <li>Preenchimento de dados pessoais</li>
                    <li>Escolha da forma de pagamento</li>
                    <li>Confirmação do pedido</li>
                    <li>Processamento e envio</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5.2 Formas de Pagamento</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Cartão de crédito</li>
                    <li>PIX</li>
                    <li>Boleto bancário</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5.3 Preços e Taxas</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Preços podem ser alterados sem aviso prévio</li>
                    <li>Taxas de entrega aplicáveis</li>
                    <li>Impostos incluídos no preço final</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Entrega e Devoluções</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">6.1 Política de Entrega</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Prazo de entrega: 5 a 10 dias úteis</li>
                    <li>Frete grátis para todo o Brasil</li>
                    <li>Rastreamento disponível</li>
                    <li>Entrega apenas em endereços válidos</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">6.2 Política de Devolução</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Prazo de 7 dias para arrependimento</li>
                    <li>Produto deve estar em condições originais</li>
                    <li>Devolução por defeito em até 30 dias</li>
                    <li>Custos de devolução por conta do cliente</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Garantia</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Oferecemos garantia de 180 dias contra defeitos de fabricação. A garantia cobre:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Defeitos de fabricação</li>
                  <li>Falhas técnicas do dispositivo</li>
                  <li>Problemas de funcionamento</li>
                  <li>Danos internos não causados por uso inadequado</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Não coberto:</strong> Mal uso, danos por queda, exposição a líquidos, desgaste normal.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Propriedade Intelectual</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Todo o conteúdo do site, incluindo textos, imagens, logotipos, design e software, é propriedade da L Skin Derm Anti-flacidez e está protegido por leis de direitos autorais e propriedade intelectual.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Não é permitida a reprodução sem autorização</li>
                  <li>Uso comercial proibido</li>
                  <li>Modificação não autorizada é ilegal</li>
                  <li>Marcas registradas protegidas</li>
                </ul>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitação de Responsabilidade</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A L Skin Derm Anti-flacidez não se responsabiliza por:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Danos indiretos ou consequenciais</li>
                  <li>Perda de lucros ou oportunidades</li>
                  <li>Interrupção de negócios</li>
                  <li>Danos causados por terceiros</li>
                  <li>Problemas de conectividade</li>
                </ul>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modificações dos Termos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. É sua responsabilidade revisar periodicamente estes termos.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Lei Aplicável</h2>
                <p className="text-gray-700 leading-relaxed">
                  Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes de Florianópolis, SC.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contato</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Para esclarecimentos sobre estes Termos de Uso, entre em contato conosco:
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700"><strong>E-mail:</strong> contato@anti-flacidez.com</p>
                  <p className="text-gray-700"><strong>Telefone:</strong> (41) 98454-9172</p>
                  <p className="text-gray-700"><strong>Endereço:</strong> Florianópolis, SC - Brasil</p>
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