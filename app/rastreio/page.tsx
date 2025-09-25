import { useState } from 'react';
import { Search, Package, Truck, Clock, CheckCircle, MapPin, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rastrear Pedido - Antiflacidez L&L Skin | Acompanhe sua Compra',
  description: 'Rastreie seu pedido do Antiflacidez L&L Skin. Acompanhe o status da entrega em tempo real.',
  keywords: 'rastrear pedido, acompanhar compra, status entrega, rastreamento antiflacidez, L&L Skin, localizar pedido',
  openGraph: {
    title: 'Rastrear Pedido - Antiflacidez L&L Skin',
    description: 'Rastreie seu pedido do Antiflacidez L&L Skin. Acompanhe o status da entrega.',
    url: 'https://anti-flacidez.com/rastreio',
    images: ['/images/og-rastreio.jpg'],
  },
  alternates: {
    canonical: '/rastreio',
  },
}

export default function RastreioPage() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    dataPedido: ''
  });
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');

    // Validação básica
    if (!formData.nome || !formData.cpf || !formData.dataPedido) {
      setErro('Todos os campos são obrigatórios');
      return;
    }

    // Validação de CPF básica (11 dígitos)
    const cpfLimpo = formData.cpf.replace(/\D/g, '');
    if (cpfLimpo.length !== 11) {
      setErro('CPF deve ter 11 dígitos');
      return;
    }

    // Validação de data
    const dataPedido = new Date(formData.dataPedido);
    const hoje = new Date();
    if (dataPedido > hoje) {
      setErro('Data do pedido não pode ser futura');
      return;
    }

    // Simular busca (sempre retorna resultado)
    setResultado({
      nome: formData.nome,
      cpf: formData.cpf,
      dataPedido: formData.dataPedido,
      numeroPedido: `#${Math.random().toString(36).substr(2, 8).toUpperCase()}`
    });
  };

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const mascararCPF = (cpf) => {
    if (!cpf) return '';
    const cpfLimpo = cpf.replace(/\D/g, '');
    if (cpfLimpo.length !== 11) return cpf;
    
    const parteVisivel = cpfLimpo.substring(0, 7);
    const parteOculta = '****';
    return `${parteVisivel}${parteOculta}`;
  };

  const calcularDataStatus = (dataPedido, diasAdicionais) => {
    const data = new Date(dataPedido);
    data.setDate(data.getDate() + diasAdicionais);
    return formatarData(data);
  };

  const steps = [
    {
      id: 1,
      title: "Pedido Recebido",
      description: "Seu pedido foi registrado em nosso sistema",
      icon: Package,
      data: formData.dataPedido ? formatarData(formData.dataPedido) : '',
      status: 'completed'
    },
    {
      id: 2,
      title: "Pedido Embalado",
      description: "Seu produto foi preparado e embalado com cuidado",
      icon: Package,
      data: formData.dataPedido ? calcularDataStatus(formData.dataPedido, 1) : '',
      status: 'completed'
    },
    {
      id: 3,
      title: "Transportadora Acionada",
      description: "A transportadora foi notificada para coleta",
      icon: Truck,
      data: formData.dataPedido ? calcularDataStatus(formData.dataPedido, 2) : '',
      status: 'completed'
    },
    {
      id: 4,
      title: "Transportadora Coletou",
      description: "O produto foi coletado pela transportadora",
      icon: Truck,
      data: '',
      status: 'pending'
    },
    {
      id: 5,
      title: "Código de Rastreamento Gerado",
      description: "Esse é o seu código de rastreamento",
      icon: Package,
      data: '',
      status: 'pending'
    },
    {
      id: 6,
      title: "Em Trânsito",
      description: "Seu pedido está a caminho do destino",
      icon: Clock,
      data: '',
      status: 'pending'
    },
    {
      id: 7,
      title: "Saiu para Entrega",
      description: "O produto saiu para entrega em seu endereço",
      icon: MapPin,
      data: '',
      status: 'pending'
    },
    {
      id: 8,
      title: "Pedido Entregue",
      description: "Seu pedido foi entregue com sucesso",
      icon: CheckCircle,
      data: '',
      status: 'pending'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-white py-8 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rastreie seu Pedido
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Digite seus dados para acompanhar o status do seu pedido
            </p>
          </div>
        </div>

        {/* Formulário de Busca */}
        {!resultado && (
          <div className="bg-gray-50 py-8 px-4">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="space-y-4">
                {/* Nome Completo */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>

                {/* CPF */}
                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-2">
                    CPF *
                  </label>
                  <input
                    type="text"
                    id="cpf"
                    value={formData.cpf}
                    onChange={(e) => setFormData({...formData, cpf: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="000.000.000-00"
                    required
                  />
                </div>

                {/* Data do Pedido */}
                <div>
                  <label htmlFor="dataPedido" className="block text-sm font-medium text-gray-700 mb-2">
                    Data do Pedido *
                  </label>
                  <input
                    type="date"
                    id="dataPedido"
                    value={formData.dataPedido}
                    onChange={(e) => setFormData({...formData, dataPedido: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Erro */}
                {erro && (
                  <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
                    {erro}
                  </div>
                )}

                {/* Botão de Busca */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-md transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Search className="w-5 h-5" />
                  <span>Rastrear Pedido</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        )}

        {/* Resultado da Busca */}
        {resultado && (
          <div className="bg-white py-8 px-4">
            <div className="max-w-4xl mx-auto">
              {/* Botão Nova Consulta */}
              <div className="text-center mb-6">
                <button
                  onClick={() => setResultado(null)}
                  className="text-amber-600 hover:text-amber-700 font-medium text-sm underline"
                >
                  ← Fazer Nova Consulta
                </button>
              </div>

              {/* Informações do Pedido */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Informações do Pedido</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <span className="text-sm text-gray-600">Nome:</span>
                    <p className="font-semibold text-gray-900">{resultado.nome}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">CPF:</span>
                    <p className="font-semibold text-gray-900">{mascararCPF(resultado.cpf)}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Data do Pedido:</span>
                    <p className="font-semibold text-gray-900">{formatarData(resultado.dataPedido)}</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Status do Pedido</h3>
                
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={step.id} className="relative">
                      {/* Linha conectora */}
                      {index < steps.length - 1 && (
                        <div className={`absolute left-6 top-12 w-0.5 h-8 ${
                          step.status === 'completed' ? 'bg-green-300' : 'bg-gray-300'
                        }`}></div>
                      )}
                      
                      {/* Card do Step */}
                      <div className="flex items-start space-x-4">
                        {/* Ícone */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          step.status === 'completed' 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          <step.icon className="w-6 h-6" />
                        </div>
                        
                        {/* Conteúdo */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-gray-900">
                              {step.title}
                            </h4>
                            {step.data && (
                              <div className="flex items-center space-x-1 text-sm text-gray-600">
                                <Calendar className="w-4 h-4" />
                                <span>{step.data}</span>
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {step.description}
                          </p>
                          {step.id === 8 && (
                            <p className="text-sm text-green-600 font-medium mt-6 pt-4 border-t border-gray-200">
                              Em breve você receberá o seu Antiflacidez :)
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Linha de Divisão */}
        <div className="border-t border-gray-200"></div>
      </main>

      <Footer />
    </div>
  );
}
