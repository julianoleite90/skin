export default function Footer() {
  return (
    <footer className="bg-white shadow-sm">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Column 1 - Logo and Company Message */}
            <div className="space-y-6 text-center md:text-left">
              <img 
                src="/images/logo.png.webp" 
                alt="SkinLift Pro Logo" 
                className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-contain mx-auto md:mx-0"
              />
              <p className="text-base md:text-lg text-gray-600 leading-relaxed px-4 md:px-0">
                Transforme sua pele com o Antiflacidez massageador L&L Skin. 
                Tecnologia avançada para resultados visíveis 
                em apenas 15 minutos por dia.
              </p>
            </div>

            {/* Column 2 - Seals/Certifications */}
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Certificações</h3>
              <div className="flex justify-center md:justify-start">
                <img 
                  src="/images/selo.png" 
                  alt="Certificações" 
                  className="w-48 h-48 md:w-56 md:h-56 object-contain"
                />
              </div>
            </div>

            {/* Column 3 - Company Info */}
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Informações</h3>
              <div className="space-y-4 px-4 md:px-0">
                <div>
                  <p className="text-base font-bold text-gray-900 mb-2">Contato</p>
                  <p className="text-sm md:text-base text-gray-600 break-all">contato@anti-flacidez.com</p>
                  <p className="text-sm md:text-base text-gray-600">(41) 98454-9172 (whatsapp)</p>
                </div>
                
                <div>
                  <p className="text-base font-bold text-gray-900 mb-2">Endereço</p>
                  <p className="text-sm md:text-base text-gray-600">Florianópolis, SC - Brasil</p>
                </div>
                
                <div>
                  <p className="text-base font-bold text-gray-900 mb-2">Horário de Atendimento</p>
                  <p className="text-sm md:text-base text-gray-600">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-sm md:text-base text-gray-600">Sábado: 9h às 14h</p>
                </div>
              </div>
            </div>

            {/* Column 4 - Useful Links */}
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Links Úteis</h3>
              <div className="grid grid-cols-1 gap-3 px-4 md:px-0">
                <a href="/politica-privacidade" className="block text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors py-1">
                  Política de Privacidade
                </a>
                <a href="/termos-uso" className="block text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors py-1">
                  Termos de Uso
                </a>
                <a href="/devolucao" className="block text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors py-1">
                  Devolução
                </a>
                <a href="/rastreio" className="block text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors py-1">
                  Rastrear Pedido
                </a>
                <a href="/garantia" className="block text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors py-1">
                  Garantia
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-4 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Antiflacidez L&L Skin - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}