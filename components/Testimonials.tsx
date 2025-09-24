import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Silva',
    age: 45,
    location: 'São Paulo, SP',
    rating: 5,
    text: 'Incrível! Em apenas 10 dias já vejo uma diferença enorme na firmeza da minha pele. As rugas ao redor dos olhos diminuíram significativamente.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Ana Costa',
    age: 38,
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    text: 'Produto fantástico! Minha pele está mais firme e com um brilho natural que não tinha há anos. Recomendo para todas as mulheres.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Carla Mendes',
    age: 52,
    location: 'Belo Horizonte, MG',
    rating: 5,
    text: 'Estou usando há 3 semanas e os resultados são impressionantes. Minha filha até perguntou se fiz algum procedimento estético!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Patricia Lima',
    age: 41,
    location: 'Porto Alegre, RS',
    rating: 5,
    text: 'Finalmente encontrei um produto que realmente funciona! Minha pele está mais jovem e saudável. Vale cada centavo investido.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Fernanda Santos',
    age: 47,
    location: 'Salvador, BA',
    rating: 5,
    text: 'Produto de qualidade excepcional. Minha pele está mais firme e as linhas de expressão suavizaram muito. Estou muito satisfeita!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Juliana Oliveira',
    age: 35,
    location: 'Brasília, DF',
    rating: 5,
    text: 'Comecei a usar preventivamente e já vejo resultados incríveis. Minha pele está mais uniforme e com um aspecto mais jovem.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recomendado por especialistas em dermatologia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Especialistas recomendam por sua capacidade de estimular a produção de colágeno em até 30%.
          </p>
        </div>

        {/* Single Image with Both Modes */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mb-0 items-end mt-4 md:mt-0">
          {/* Left Column - Both Modes */}
          <div className="flex flex-col justify-center space-y-6 order-2 md:order-2">
            {/* Title and Subtitle */}
            <div className="mb-4 -mt-6 mt-4 md:mt-0">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                Reestrutura a matriz dérmica
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Essa ação direcionada reestrutura a matriz dérmica, combatendo a flacidez de forma eficaz e proporcionando uma pele visivelmente mais firme e elástica em poucas semanas, com resultados comparáveis a tratamentos estéticos profissionais, mas no conforto de casa.
              </p>
            </div>

            {/* Hot and Cold modes - Mobile side by side, Desktop stacked */}
            <div className="grid grid-cols-2 md:block gap-4 md:gap-0">
              {/* Hot mode */}
              <div>
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                  Hot mode
                </h3>
                <div className="space-y-1 md:space-y-2">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-lg text-gray-700">Flacidez facial</span>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-lg text-gray-700">Inchaço</span>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-lg text-gray-700">Bolsas nos olhos</span>
                  </div>
                </div>
              </div>

              {/* Cold mode */}
              <div className="md:mt-4">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                  Cold mode
                </h3>
                <div className="space-y-1 md:space-y-2">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-slate-500 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-lg text-gray-700">Linhas de expressão</span>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-slate-500 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-lg text-gray-700">Bigode chinês</span>
                  </div>
                  {/* Mobile only - Rugas profundas */}
                  <div className="flex items-center space-x-2 md:hidden">
                    <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">Rugas profundas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-start md:items-end order-1 md:order-1">
            <img 
              src="/images/hot.png" 
              alt="Massageador L&L Skin" 
              className="w-80 h-80 md:w-[500px] md:h-[500px] object-contain md:mb-0 md:translate-y-16 md:-mt-16"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
