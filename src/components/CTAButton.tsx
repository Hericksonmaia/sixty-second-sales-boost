
import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface CTAButtonProps {
  onClick?: () => void;
  className?: string;
  size?: 'default' | 'large';
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  onClick, 
  className = '', 
  size = 'default' 
}) => {
  const baseClasses = "bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 animate-pulse-strong";
  
  const sizeClasses = size === 'large' 
    ? "px-8 py-6 text-xl" 
    : "px-6 py-4 text-lg";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${className}`}
    >
      <ShoppingCart className="w-6 h-6" />
      QUERO DOMINAR A VENDA EM 60 SEGUNDOS AGORA
    </button>
  );
};

export default CTAButton;
