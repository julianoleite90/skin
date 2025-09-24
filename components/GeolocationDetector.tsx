"use client"

import { useState, useEffect } from 'react'

interface GeolocationData {
  ip: string
  country: string
  region: string
  city: string
  timezone: string
  isp: string
}

export default function GeolocationDetector() {
  const [location, setLocation] = useState<GeolocationData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        setLoading(true)
        
        // Usando ipapi.co para obter dados de geolocalização
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        
        if (data.error) {
          throw new Error(data.reason || 'Erro ao obter localização')
        }
        
        setLocation({
          ip: data.ip,
          country: data.country_name,
          region: data.region,
          city: data.city,
          timezone: data.timezone,
          isp: data.org
        })
      } catch (err) {
        console.error('Erro ao obter geolocalização:', err)
        setError(err instanceof Error ? err.message : 'Erro desconhecido')
      } finally {
        setLoading(false)
      }
    }

    fetchLocation()
  }, [])

  if (loading) {
    return (
      <div className="fixed top-4 left-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-lg z-50">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-800"></div>
          <span className="text-sm font-medium">Detectando localização...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="fixed top-4 left-4 bg-red-100 text-red-800 px-4 py-2 rounded-lg shadow-lg z-50">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Erro: {error}</span>
        </div>
      </div>
    )
  }

  if (!location) {
    return null
  }

  return (
    <div className="fixed top-4 left-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="space-y-1">
        <div className="text-sm font-bold">🌍 Geolocalização Detectada</div>
        <div className="text-xs space-y-1">
          <div><strong>IP:</strong> {location.ip}</div>
          <div><strong>País:</strong> {location.country}</div>
          <div><strong>Região:</strong> {location.region}</div>
          <div><strong>Cidade:</strong> {location.city}</div>
          <div><strong>Fuso:</strong> {location.timezone}</div>
          <div><strong>ISP:</strong> {location.isp}</div>
        </div>
      </div>
    </div>
  )
}
