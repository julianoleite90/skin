import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade - L Skin Derm Anti-flacidez | Proteção de Dados',
  description: 'Política de privacidade do L Skin Derm Anti-flacidez. Conheça como protegemos seus dados pessoais conforme LGPD.',
  keywords: 'política privacidade, proteção dados, LGPD, privacidade antiflacidez, dados pessoais, L&L Skin, segurança informações',
  openGraph: {
    title: 'Política de Privacidade - L Skin Derm Anti-flacidez',
    description: 'Política de privacidade do L Skin Derm Anti-flacidez. Conheça como protegemos seus dados pessoais.',
    url: 'https://lskinderm.com/politica-privacidade',
    images: ['/images/og-privacidade.jpg'],
  },
  alternates: {
    canonical: '/politica-privacidade',
  },
}

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-white py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Política de Privacidade
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introdução</h2>
                <p className="text-gray-700 leading-relaxed">
                  A L Skin Derm Anti-flacidez ("nós", "nosso" ou "empresa") respeita sua privacidade e está comprometida em proteger suas informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nosso site e serviços.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informações que Coletamos</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1 Informações Pessoais</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Número de telefone</li>
                    <li>Endereço de entrega</li>
                    <li>CPF (para fins de faturamento)</li>
                    <li>Data de nascimento (quando necessário)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2 Informações de Navegação</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Endereço IP</li>
                    <li>Tipo de navegador</li>
                    <li>Páginas visitadas</li>
                    <li>Tempo de permanência no site</li>
                    <li>Cookies e tecnologias similares</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Como Utilizamos suas Informações</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1 Finalidades Principais</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Processar e entregar seus pedidos</li>
                    <li>Comunicar sobre o status do pedido</li>
                    <li>Fornecer suporte ao cliente</li>
                    <li>Enviar informações sobre produtos e promoções</li>
                    <li>Melhorar nossos serviços e experiência do usuário</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2 Finalidades Secundárias</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Análise de dados para melhorias</li>
                    <li>Prevenção de fraudes</li>
                    <li>Cumprimento de obrigações legais</li>
                    <li>Marketing direcionado (com seu consentimento)</li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartilhamento de Informações</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Prestadores de serviços (transportadoras, processadores de pagamento)</li>
                  <li>Obrigações legais ou ordens judiciais</li>
                  <li>Proteção de nossos direitos e segurança</li>
                  <li>Com seu consentimento explícito</li>
                </ul>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Segurança dos Dados</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Criptografia SSL/TLS para transmissão de dados</li>
                  <li>Armazenamento seguro em servidores protegidos</li>
                  <li>Acesso restrito apenas a pessoal autorizado</li>
                  <li>Monitoramento regular de segurança</li>
                  <li>Backup regular dos dados</li>
                </ul>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seus Direitos</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  De acordo com a LGPD, você tem os seguintes direitos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Acesso às suas informações pessoais</li>
                  <li>Correção de dados incorretos ou incompletos</li>
                  <li>Exclusão de dados desnecessários</li>
                  <li>Portabilidade dos dados</li>
                  <li>Revogação do consentimento</li>
                  <li>Informação sobre o uso dos dados</li>
                </ul>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Utilizamos cookies para melhorar sua experiência em nosso site. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site</p>
                  <p><strong>Cookies de Análise:</strong> Para entender como os usuários interagem com o site</p>
                  <p><strong>Cookies de Marketing:</strong> Para personalizar anúncios e conteúdo</p>
                </div>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Retenção de Dados</h2>
                <p className="text-gray-700 leading-relaxed">
                  Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei. Dados de pedidos são mantidos por 5 anos para fins contábeis e fiscais.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Alterações na Política</h2>
                <p className="text-gray-700 leading-relaxed">
                  Esta Política de Privacidade pode ser atualizada periodicamente. Notificaremos sobre mudanças significativas através do nosso site ou por e-mail. Recomendamos revisar esta política regularmente.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contato</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco:
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