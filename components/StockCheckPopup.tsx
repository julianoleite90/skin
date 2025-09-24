"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface StockCheckPopupProps {
  isOpen: boolean
  onClose: () => void
  onRedirect: () => void
  city: string
}

export default function StockCheckPopup({ isOpen, onClose, onRedirect, city }: StockCheckPopupProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const steps = [
    {
      message: "Estamos verificando quantas unidades temos disponíveis no estoque....",
      duration: 2000
    },
    {
      message: "Consultando...",
      duration: 1500
    },
    {
      message: `Para a cidade de ${city} temos 3 unidades disponíveis com envio imediato.`,
      duration: 4000
    },
    {
      message: "Direcionando para página segura de pagamentos.",
      duration: 1500
    }
  ]

  useEffect(() => {
    if (!isOpen) return

    let timeout: NodeJS.Timeout
    let stepIndex = 0

    const runSteps = () => {
      if (stepIndex < steps.length) {
        setCurrentStep(stepIndex)
        setIsLoading(true)
        
        timeout = setTimeout(() => {
          stepIndex++
          if (stepIndex === steps.length) {
            setIsLoading(false)
            // Redirecionar imediatamente após o último passo
            setTimeout(() => {
              onRedirect()
            }, 500)
          } else {
            runSteps()
          }
        }, steps[stepIndex].duration)
      }
    }

    runSteps()

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [isOpen, city])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full mx-4">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium text-gray-900">Verificando Estoque</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          {/* Loading Spinner */}
          <div className="mb-4 flex justify-center">
            <div className="w-8 h-8 border-2 border-gray-200 border-t-green-700 rounded-full animate-spin"></div>
          </div>

          {/* Message */}
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {currentStep === 2 ? (
              <>
                Para a cidade de <span className="text-green-700 font-bold">{city}</span> temos 3 unidades disponíveis com envio imediato.
              </>
            ) : (
              steps[currentStep].message
            )}
          </p>

          {/* Simple Progress */}
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-green-700 h-1 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
