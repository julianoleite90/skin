"use client"

import { useState } from 'react'

export default function Reviews() {
  const [showAll, setShowAll] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const reviews = [
    {
      id: 1,
      name: "Maria",
      lastName: "Silva",
      city: "São Paulo, SP",
      rating: 5,
      text: "Produto incrível! Em apenas 2 semanas já vejo uma diferença enorme na firmeza da minha pele. As rugas ao redor dos olhos diminuíram significativamente. Recomendo para todas as mulheres!",
      image: "/images/rev1.png",
      likes: 12,
      dislikes: 0
    },
    {
      id: 2,
      name: "Ana",
      lastName: "Costa",
      city: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Estou usando há 1 mês e os resultados são impressionantes. Minha pele está mais firme e com um brilho natural que não tinha há anos. Vale cada centavo investido!",
      image: "/images/rev2.png",
      likes: 8,
      dislikes: 1
    },
    {
      id: 3,
      name: "Carla",
      lastName: "Mendes",
      city: "Belo Horizonte, MG",
      rating: 4,
      text: "Produto de qualidade excepcional. Minha pele está mais firme e as linhas de expressão suavizaram muito. Estou muito satisfeita com a compra!",
      image: null,
      likes: 15,
      dislikes: 0
    },
    {
      id: 4,
      name: "Patricia",
      lastName: "Lima",
      city: "Porto Alegre, RS",
      rating: 5,
      text: "Finalmente encontrei um produto que realmente funciona! Minha pele está mais jovem e saudável. A flacidez diminuiu consideravelmente. Recomendo!",
      image: null,
      likes: 20,
      dislikes: 2
    },
    {
      id: 5,
      name: "Fernanda",
      lastName: "Santos",
      city: "Salvador, BA",
      rating: 5,
      text: "Comecei a usar preventivamente e já vejo resultados incríveis. Minha pele está mais uniforme e com um aspecto mais jovem. Excelente produto!",
      image: null,
      likes: 7,
      dislikes: 0
    },
    {
      id: 6,
      name: "Juliana",
      lastName: "Oliveira",
      city: "Brasília, DF",
      rating: 4,
      text: "Produto muito bom! Minha pele está mais firme e as bolsas sob os olhos diminuíram. Uso há 3 semanas e já vejo resultados. Recomendo!",
      image: null,
      likes: 11,
      dislikes: 1
    }
  ]

  const displayedReviews = showAll ? reviews : reviews.slice(0, 4)
  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section id="reviews" className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Avaliações recentes
          </h2>
          <div className="flex flex-col items-center md:items-end space-y-1">
            <div className="flex items-center space-x-1">
              {renderStars(5)}
            </div>
            <div className="text-lg font-bold text-gray-900">
              4,7/5
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {displayedReviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              {/* Review Header */}
              <div className="flex items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-lg">
                      {review.name.charAt(0)}{review.lastName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {review.name} {review.lastName}
                    </h4>
                    <p className="text-sm text-gray-600">{review.city}</p>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {review.text}
              </p>

              {/* Review Image */}
              {review.image && (
                <div className="mb-4 flex justify-start">
                  <img 
                    src={review.image} 
                    alt={`Avaliação de ${review.name}`}
                    className="max-w-sm h-48 object-contain rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setSelectedImage(review.image)}
                  />
                </div>
              )}

              {/* Like/Dislike */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.754a2.5 2.5 0 002.5 2.5h1.5a2.5 2.5 0 002.5-2.5v-5.754a2.5 2.5 0 00-2.5-2.5H8.5a2.5 2.5 0 00-2.5 2.5z" />
                    <path d="M14 10.5a1.5 1.5 0 013 0v6a1.5 1.5 0 01-3 0v-6z" />
                  </svg>
                  <span className="text-sm">{review.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 9.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 9.333v5.754a2.5 2.5 0 002.5 2.5h1.5a2.5 2.5 0 002.5-2.5v-5.754a2.5 2.5 0 00-2.5-2.5H8.5a2.5 2.5 0 00-2.5 2.5z" />
                    <path d="M14 9.5a1.5 1.5 0 013 0v6a1.5 1.5 0 01-3 0v-6z" />
                  </svg>
                  <span className="text-sm">{review.dislikes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Text */}
        {!showAll && (
          <div className="text-center">
            <span 
              onClick={() => setShowAll(true)}
              className="text-gray-600 hover:text-gray-800 cursor-pointer underline transition-colors duration-300"
            >
              Carregar mais avaliações
            </span>
          </div>
        )}
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Avaliação ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
      
      {/* Gradient separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  )
}
