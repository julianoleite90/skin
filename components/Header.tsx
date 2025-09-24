"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center justify-start flex-1 pl-4 md:pl-0">
            <img 
              src="/images/logo.png.webp" 
              alt="SkinLift Pro Logo" 
              className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] object-contain"
            />
          </div>

          {/* Desktop Navigation + CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a href="#produto" className="text-gray-700 hover:text-primary-600 transition-colors">
                Produto
              </a>
              <a href="#beneficios" className="text-gray-700 hover:text-primary-600 transition-colors">
                Benefícios
              </a>
              <a href="#depoimentos" className="text-gray-700 hover:text-primary-600 transition-colors">
                Depoimentos
              </a>
              <a href="#precos" className="text-gray-700 hover:text-primary-600 transition-colors">
                Preços
              </a>
            </nav>
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm">
              Rastrear Pedido
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#produto" className="text-gray-700 hover:text-primary-600 transition-colors">
                Produto
              </a>
              <a href="#beneficios" className="text-gray-700 hover:text-primary-600 transition-colors">
                Benefícios
              </a>
              <a href="#depoimentos" className="text-gray-700 hover:text-primary-600 transition-colors">
                Depoimentos
              </a>
              <a href="#precos" className="text-gray-700 hover:text-primary-600 transition-colors">
                Preços
              </a>
              <button className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm w-full mt-4">
                Rastrear Pedido
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
