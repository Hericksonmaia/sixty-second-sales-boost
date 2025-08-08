import React from 'react';
import { Award, TrendingUp, Users, DollarSign } from 'lucide-react';

const AuthorProfile: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-brand-gray to-white p-8 rounded-2xl shadow-elegant border border-border">
      <div className="text-center mb-8">
        <div className="relative inline-block mb-6">
          <div className="w-32 h-32 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full mx-auto flex items-center justify-center shadow-glow">
            <span className="text-white text-4xl font-bold">HM</span>
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
            <Award className="w-5 h-5 text-white" />
          </div>
        </div>
        
        <h3 className="text-3xl font-bold text-brand-dark mb-2">Herickson Maia</h3>
        <p className="text-lg text-gray-600 font-semibold mb-4">Estrategista em Tráfego Pago & Vendas</p>
        
        <div className="flex justify-center gap-2 mb-6">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
            Especialista em Conversão
          </span>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            +5 anos de experiência
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
          <TrendingUp className="w-8 h-8 text-brand-orange mx-auto mb-2" />
          <div className="text-2xl font-bold text-brand-orange mb-1">R$ 10M+</div>
          <p className="text-xs text-gray-600 font-semibold">Faturamento Gerado</p>
        </div>
        
        <div className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
          <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600 mb-1">R$ 2M+</div>
          <p className="text-xs text-gray-600 font-semibold">Investimento Gerenciado</p>
        </div>
        
        <div className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow col-span-2 md:col-span-1">
          <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600 mb-1">15.000+</div>
          <p className="text-xs text-gray-600 font-semibold">Vendedores Treinados</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border-l-4 border-brand-orange">
        <p className="text-gray-700 leading-relaxed font-medium">
          "Após anos ajudando empresas a gerar <strong className="text-brand-orange">mais de R$ 10 milhões em faturamento</strong>, 
          descobri que o maior gargalo não estava na geração de leads, mas nos 
          <strong className="text-brand-orange"> primeiros 60 segundos de contato com o cliente</strong>. 
          Este e-book contém exatamente o que aprendi sobre como transformar esses segundos decisivos 
          em vendas garantidas."
        </p>
      </div>
    </div>
  );
};

export default AuthorProfile;