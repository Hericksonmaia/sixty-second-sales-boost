import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  verified?: boolean;
  highlight?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  rating = 5,
  verified = true,
  highlight
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-testimonial border border-border hover:shadow-elegant transition-all duration-300">
      <div className="flex justify-center mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </div>
      
      <blockquote className="text-gray-700 text-center mb-6 leading-relaxed">
        {highlight ? (
          <>
            {content.split(highlight)[0]}
            <span className="text-brand-orange font-semibold">{highlight}</span>
            {content.split(highlight)[1]}
          </>
        ) : (
          content
        )}
      </blockquote>
      
      <div className="text-center">
        <p className="font-bold text-brand-dark">{name}</p>
        <p className="text-gray-600 text-sm">{role}</p>
        {verified && (
          <div className="flex items-center justify-center gap-1 mt-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-xs text-green-600 font-medium">Depoimento Verificado</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;