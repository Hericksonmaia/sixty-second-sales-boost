
import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const GuaranteeSeal: React.FC = () => {
  return (
    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center max-w-md mx-auto">
      <div className="flex justify-center mb-4">
        <div className="bg-green-500 rounded-full p-3">
          <Shield className="w-8 h-8 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-green-800 mb-2">
        GARANTIA BLINDADA
      </h3>
      <p className="text-green-700 font-semibold mb-3">
        7 DIAS DE GARANTIA INCONDICIONAL
      </p>
      <div className="flex items-center justify-center gap-2 text-sm text-green-600">
        <CheckCircle className="w-4 h-4" />
        <span>100% do seu dinheiro de volta se não ficar satisfeito</span>
      </div>
    </div>
  );
};

export default GuaranteeSeal;
