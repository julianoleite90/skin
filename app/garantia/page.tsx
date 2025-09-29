import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Termos de Garantia - Phynamax',
  description: 'Conheça os detalhes sobre nossa política de garantia e devolução do Phynamax. Garantia de 30 dias e total transparência.',
  keywords: 'garantia phynamax, devolução, reembolso, termos de garantia, satisfação garantida',
  openGraph: {
    title: 'Termos de Garantia - Phynamax',
    description: 'Conheça os detalhes sobre nossa política de garantia e devolução do Phynamax.',
    type: 'website',
  },
}

export default function GarantiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Termos de Garantia
          </h1>
          <p className="text-lg text-gray-600 text-center mt-4">
            Conheça os detalhes sobre nossa política de garantia e devolução
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          
          {/* Compromisso com satisfação */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Compromisso com sua satisfação
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Na Phynamax, acreditamos que a confiança de nossos clientes é nosso maior patrimônio. Por isso, oferecemos uma política de garantia transparente e justa, que assegura sua total satisfação com nossos produtos. Nosso compromisso vai além do que determina a legislação, pois queremos que você tenha a melhor experiência possível.
              </p>
              <p>
                Abaixo, detalhamos todas as informações sobre nossas garantias, procedimentos de devolução e reembolso. Caso tenha qualquer dúvida após a leitura, nossa equipe de atendimento está à disposição para ajudá-lo através dos nossos canais de contato.
              </p>
            </div>
          </section>

          {/* Garantia de Arrependimento */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Garantia de Arrependimento
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                De acordo com o Código de Defesa do Consumidor (Lei nº 8.078/90), o cliente tem o direito de solicitar o cancelamento da compra em até 7 (sete) dias corridos a partir da data de recebimento do produto. Este direito está previsto no artigo 49 do CDC, que estabelece o direito de arrependimento para compras realizadas fora do estabelecimento comercial, como é o caso de compras online.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-sm text-blue-800">
                  <strong>Base Legal:</strong> Art. 49 do CDC - "O consumidor pode desistir do contrato, no prazo de 7 dias a contar de sua assinatura ou do ato de recebimento do produto ou serviço, sempre que a contratação de fornecimento de produtos e serviços ocorrer fora do estabelecimento comercial, especialmente por telefone ou a domicílio."
                </p>
              </div>
            </div>
          </section>

          {/* Garantia de Satisfação */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Garantia de Satisfação
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Além da garantia legal, oferecemos uma garantia de satisfação de 30 (trinta) dias após a compra, válida exclusivamente para compras de 1 (um) frasco. Esta garantia representa nosso compromisso com a qualidade do produto e a satisfação dos nossos clientes.
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Como solicitar a garantia de satisfação:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Envie um e-mail para sac@bourjun.com.br com o assunto: "Garantia de satisfação"</li>
                  <li>Anexe a nota fiscal do produto</li>
                  <li>Informe o motivo da insatisfação (opcional, mas recomendado)</li>
                  <li>Aguarde o retorno da nossa equipe em até 48 horas úteis</li>
                </ol>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Observação:</strong> A garantia de satisfação é um benefício adicional oferecido pela empresa, não substituindo as garantias legais previstas no Código de Defesa do Consumidor.
                </p>
              </div>
            </div>
          </section>

          {/* Trocas por Defeitos */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Trocas por Defeitos ou Vícios
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Trocas por defeitos ou vícios no produto são realizadas sem custo adicional para o cliente, conforme previsto no Código de Defesa do Consumidor. Caso o produto apresente qualquer problema de fabricação, embalagem danificada ou qualquer outro vício que comprometa sua qualidade ou eficácia, o cliente tem direito à substituição do produto.
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Procedimento para solicitação de troca:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Entre em contato com nosso SAC pelo e-mail sac@bourjun.com.br com o assunto: "Solicitação de troca por defeito"</li>
                  <li>Anexe fotos do produto com o defeito ou vício identificado</li>
                  <li>Anexe a nota fiscal de compra</li>
                  <li>Nossa equipe analisará o caso e retornará com as instruções para a troca</li>
                </ol>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-sm text-blue-800">
                  <strong>Base Legal:</strong> Art. 18 do CDC - "Os fornecedores de produtos de consumo duráveis ou não duráveis respondem solidariamente pelos vícios de qualidade ou quantidade que os tornem impróprios ou inadequados ao consumo a que se destinam ou lhes diminuam o valor, assim como por aqueles decorrentes da disparidade, com as indicações constantes do recipiente, da embalagem, rotulagem ou mensagem publicitária, respeitadas as variações decorrentes de sua natureza, podendo o consumidor exigir a substituição das partes viciadas."
                </p>
              </div>
            </div>
          </section>

          {/* Condições Gerais */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Condições Gerais
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Prazo para Análise:</h3>
                <p>Todas as solicitações de garantia, devolução ou troca serão analisadas em até 5 (cinco) dias úteis após o recebimento da solicitação completa com todos os documentos necessários.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Reembolso:</h3>
                <p>Em caso de devolução aprovada, o reembolso será processado em até 10 (dez) dias úteis, na mesma forma de pagamento utilizada na compra, conforme previsto no artigo 49, parágrafo único, do CDC. O reembolso será realizado exclusivamente no CPF correspondente à compra realizada e o método de reembolso será obrigatoriamente o mesmo utilizado para o pagamento original (cartão de crédito, boleto, PIX, etc.).</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Estado do Produto:</h3>
                <p>Para exercer o direito de arrependimento ou a garantia de satisfação, o produto deve estar em condições adequadas, preferencialmente na embalagem original, com todos os acessórios e componentes recebidos.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Frete de Devolução:</h3>
                <p>Em casos de arrependimento (7 dias) ou garantia de satisfação (30 dias), o custo do frete de devolução será por conta da empresa. Em casos de troca por defeito, tanto o frete de devolução quanto o de envio do novo produto serão por conta da empresa.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Limitações:</h3>
                <p>A garantia de satisfação de 30 dias é válida apenas para a compra de 1 (um) frasco. Para compras de kits promocionais (3 ou 6 frascos), aplica-se apenas a garantia legal de 7 dias prevista no CDC.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Documentação Necessária:</h3>
                <p>Para qualquer solicitação de garantia, é imprescindível a apresentação da nota fiscal de compra. Solicitações sem este documento poderão ser recusadas.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Casos Omissos:</h3>
                <p>Situações não previstas nestes termos serão analisadas individualmente pela equipe jurídica da empresa, sempre em conformidade com a legislação vigente e buscando a melhor solução para o cliente.</p>
              </div>
            </div>
          </section>

          {/* Disposições Finais */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Disposições Finais
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Os presentes Termos de Garantia estão em conformidade com o Código de Defesa do Consumidor (Lei nº 8.078/90) e demais legislações aplicáveis. A empresa se reserva o direito de alterar estes termos a qualquer momento, sendo as alterações aplicáveis apenas para compras realizadas após a data de modificação.
              </p>
              <p>
                Ao realizar uma compra em nosso site, o cliente declara estar ciente e de acordo com todos os termos e condições aqui estabelecidos. Recomendamos a leitura integral deste documento antes de finalizar qualquer compra.
              </p>
              <p>
                Para esclarecimentos adicionais ou dúvidas sobre nossa política de garantia, entre em contato com nosso Serviço de Atendimento ao Cliente através do e-mail sac@bourjun.com.br ou pelo telefone (41) 98454-9172, de segunda a sexta-feira, das 9h às 18h.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Última atualização:</strong> 10/07/2025
              </p>
            </div>
          </section>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>E-mail:</strong> sac@bourjun.com.br</p>
              <p><strong>Telefone:</strong> (41) 98454-9172</p>
              <p><strong>Horário de atendimento:</strong> Segunda a sexta-feira, das 9h às 18h</p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}