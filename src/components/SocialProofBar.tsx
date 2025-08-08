import React from 'react';
import { Users, Star, TrendingUp, Clock } from 'lucide-react';

const SocialProofBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
      <div className="flex justify-center items-center gap-6 text-sm flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <Users className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-bold text-green-800">+15.847</span>
            <p className="text-xs text-green-600">vendedores transformados</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <Star className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-bold text-yellow-800">4.9/5</span>
            <p className="text-xs text-yellow-600">estrelas</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-bold text-blue-800">94%</span>
            <p className="text-xs text-blue-600">aprovação</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-bold text-orange-800">24h</span>
            <p className="text-xs text-orange-600">para esta oferta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBar;