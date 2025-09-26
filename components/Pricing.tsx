// Array de vídeos do Vimeo - organizados para evitar repetições consecutivas
const videos = [
  {
    id: 'video1',
    title: 'Depoimento 1',
    vimeoId: '1121640571'
  },
  {
    id: 'video2', 
    title: 'Depoimento 2',
    vimeoId: '1122270701'
  },
  {
    id: 'video3',
    title: 'Depoimento 3', 
    vimeoId: '1121646075'
  },
  {
    id: 'video4',
    title: 'Depoimento 4',
    vimeoId: '1121648339'
  },
  {
    id: 'video5',
    title: 'Depoimento 5',
    vimeoId: '1121643261'
  },
  {
    id: 'video6',
    title: 'Depoimento 6',
    vimeoId: '1121648339'
  },
  {
    id: 'video7',
    title: 'Depoimento 7',
    vimeoId: '1121640571'
  },
  {
    id: 'video8',
    title: 'Depoimento 8',
    vimeoId: '1121646075'
  },
  {
    id: 'video9',
    title: 'Depoimento 9',
    vimeoId: '1121648339'
  },
  {
    id: 'video10',
    title: 'Depoimento 10',
    vimeoId: '1121640571'
  },
  {
    id: 'video11',
    title: 'Depoimento 11',
    vimeoId: '1121643261'
  },
  {
    id: 'video12',
    title: 'Depoimento 12',
    vimeoId: '1121646075'
  },
  {
    id: 'video13',
    title: 'Depoimento 13',
    vimeoId: '1121648339'
  },
  {
    id: 'video14',
    title: 'Depoimento 14',
    vimeoId: '1121640571'
  },
  {
    id: 'video15',
    title: 'Depoimento 15',
    vimeoId: '1121643261'
  },
  {
    id: 'video16',
    title: 'Depoimento 16',
    vimeoId: '1121646075'
  },
  {
    id: 'video17',
    title: 'Depoimento 17',
    vimeoId: '1121648339'
  },
  {
    id: 'video18',
    title: 'Depoimento 18',
    vimeoId: '1121640571'
  },
  {
    id: 'video19',
    title: 'Depoimento 19',
    vimeoId: '1121643261'
  },
  {
    id: 'video20',
    title: 'Depoimento 20',
    vimeoId: '1121646075'
  },
  {
    id: 'video21',
    title: 'Depoimento 21',
    vimeoId: '1121648339'
  },
  {
    id: 'video22',
    title: 'Depoimento 22',
    vimeoId: '1121640571'
  },
  {
    id: 'video23',
    title: 'Depoimento 23',
    vimeoId: '1121643261'
  },
  {
    id: 'video24',
    title: 'Depoimento 24',
    vimeoId: '1121646075'
  }
]

export default function Pricing() {
  return (
    <section id="precos" className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          O tratamento mais escolhido
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          envie o seu vídeo também
        </p>
        </div>

        {/* Video Carousel */}
        <div className="mb-16">
          <div className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="flex animate-scroll">
              {/* Triple videos for seamless loop - ensures no empty spaces */}
              {[...videos, ...videos, ...videos].map((video, index) => (
                <div key={`${video.id}-${index}`} className="flex-shrink-0 w-32 h-56 sm:w-40 sm:h-72 mx-2">
                  <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://player.vimeo.com/video/${video.vimeoId}?autoplay=1&loop=1&muted=1&controls=0&background=1`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  )
}
