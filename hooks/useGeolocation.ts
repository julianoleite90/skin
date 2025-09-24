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

export function useGeolocation() {
  const [location, setLocation] = useState<GeolocationData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        setLoading(true)
        
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
        // Fallback para uma cidade padrão
        setLocation({
          ip: 'N/A',
          country: 'Brasil',
          region: 'São Paulo',
          city: 'São Paulo',
          timezone: 'America/Sao_Paulo',
          isp: 'N/A'
        })
      } finally {
        setLoading(false)
      }
    }

    fetchLocation()
  }, [])

  return { location, loading, error }
}
