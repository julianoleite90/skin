"use client"

import { useState } from 'react'

export default function Reviews() {
  const [showAll, setShowAll] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const reviews = [
    {
      id: 1,
      name: "Carlos",
      lastName: "Silva",
      city: "São Paulo, SP",
      rating: 5,
      text: "Produto incrível! Em apenas 3 semanas já vejo novos fios nascendo nas minhas entradas. A queda parou completamente e as falhas estão preenchendo. Recomendo para todos os homens!",
      image: "/images/depoimento1.png",
      likes: 12,
      dislikes: 0,
      verified: true,
      date: "Há 2 dias",
      helpful: 12,
      notHelpful: 0
    },
    {
      id: 2,
      name: "Ana",
      lastName: "Costa",
      city: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Estou usando há 1 mês e os resultados são impressionantes. Minhas falhas estão preenchidas e meus cabelos estão mais densos e fortes. Vale cada centavo investido!",
      image: "/images/depoimento2.png",
      likes: 8,
      dislikes: 1,
      verified: true,
      date: "Há 5 dias",
      helpful: 8,
      notHelpful: 1
    },
    {
      id: 3,
      name: "Roberto",
      lastName: "Mendes",
      city: "Belo Horizonte, MG",
      rating: 4,
      text: "Produto de qualidade excepcional. Minhas entradas diminuíram muito e os cabelos estão mais resistentes. Estou muito satisfeito com a compra!",
      image: null,
      likes: 15,
      dislikes: 0,
      verified: true,
      date: "Há 1 semana",
      helpful: 15,
      notHelpful: 0
    },
    {
      id: 4,
      name: "Patricia",
      lastName: "Lima",
      city: "Porto Alegre, RS",
      rating: 5,
      text: "Finalmente encontrei um produto que realmente funciona! Minhas falhas estão preenchidas e as entradas diminuíram consideravelmente. Recomendo!",
      image: null,
      likes: 20,
      dislikes: 2,
      verified: true,
      date: "Há 1 semana",
      helpful: 20,
      notHelpful: 2
    },
    {
      id: 5,
      name: "Fernanda",
      lastName: "Santos",
      city: "Salvador, BA",
      rating: 5,
      text: "Comecei a usar preventivamente e já vejo resultados incríveis. A queda parou e novos fios estão nascendo nas áreas mais afetadas. Excelente produto!",
      image: null,
      likes: 7,
      dislikes: 0,
      verified: true,
      date: "Há 2 semanas",
      helpful: 7,
      notHelpful: 0
    },
    {
      id: 6,
      name: "Juliana",
      lastName: "Oliveira",
      city: "Brasília, DF",
      rating: 4,
      text: "Produto muito bom! Minhas entradas estão preenchidas e os cabelos estão mais densos. Uso há 3 semanas e já vejo resultados. Recomendo!",
      image: null,
      likes: 11,
      dislikes: 1,
      verified: true,
      date: "Há 2 semanas",
      helpful: 11,
      notHelpful: 1
    }
  ]

  // Rating distribution for Amazon-style breakdown
  const ratingDistribution = [
    { stars: 5, count: 89, percentage: 70 },
    { stars: 4, count: 25, percentage: 20 },
    { stars: 3, count: 8, percentage: 6 },
    { stars: 2, count: 3, percentage: 2 },
    { stars: 1, count: 2, percentage: 2 }
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
        {/* Header with Amazon-style rating summary */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Avaliações de clientes
          </h2>
          
          {/* Rating Summary */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 mb-8">
            {/* Overall Rating */}
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {averageRating}
              </div>
              <div className="flex items-center space-x-1 mb-2">
                {renderStars(5)}
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="w-full max-w-md mx-auto md:mx-0">
              <div className="space-y-2">
                {ratingDistribution.map((dist) => (
                  <div key={dist.stars} className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 w-12 flex-shrink-0">
                      <span className="text-sm text-gray-600">{dist.stars}</span>
                      <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 min-w-0">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full" 
                        style={{ width: `${dist.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-6 text-right flex-shrink-0">{dist.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-4xl mx-auto space-y-6 mb-8">
          {displayedReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              {/* Review Header */}
              <div className="mb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-800 font-semibold text-sm">
                        {review.name.charAt(0)}{review.lastName.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm truncate">
                        {review.name} {review.lastName}
                      </h4>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{review.city}</span>
                        <span>•</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                {/* Verified Badge - Full Width on Mobile */}
                {review.verified && (
                  <div className="mb-2">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                      ✓ Compra verificada
                    </span>
                  </div>
                )}
              </div>

              {/* Review Text */}
              <div className="mb-4">
                <p className="text-gray-800 leading-relaxed text-sm">
                  {review.text}
                </p>
              </div>

              {/* Review Image */}
              {review.image && (
                <div className="mb-4">
                  <img 
                    src={review.image} 
                    alt={`Avaliação de ${review.name}`}
                    className="max-w-xs h-32 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity border border-gray-200"
                    onClick={() => setSelectedImage(review.image)}
                  />
                </div>
              )}

              {/* Helpful/Not Helpful */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-500">
                    Esta avaliação foi útil?
                  </span>
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors text-xs">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span>Sim ({review.helpful})</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-red-600 transition-colors text-xs">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 019.737 3h4.018c.163 0 .326.02.485.06L17 4m-7 10V5a2 2 0 012-2h.095c.5 0 .905.405.905.905 0 .714.211 1.412.608 2.006L17 13v9m-7-10h2M17 4h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                      </svg>
                      <span>Não ({review.notHelpful})</span>
                    </button>
                  </div>
                </div>
                
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                  Denunciar
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
              Ver todas as avaliações ({reviews.length})
            </span>
          </div>
        )}
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Avaliação ampliada"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
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
