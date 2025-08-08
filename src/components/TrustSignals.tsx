import React from 'react';
import { Shield, Lock, CreditCard, CheckCircle } from 'lucide-react';

const TrustSignals: React.FC = () => {
  return (
    <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-xs font-semibold text-gray-600">Compra Segura</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Lock className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-xs font-semibold text-gray-600">Site Protegido</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <CreditCard className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-xs font-semibold text-gray-600">Pix & Cartão</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-xs font-semibold text-gray-600">Acesso Imediato</p>
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;