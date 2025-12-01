import { useState, useEffect } from 'react';

export default function ROIBenefitsSlide({ slide }) {
  const [visibleBenefits, setVisibleBenefits] = useState([]);

  useEffect(() => {
    setVisibleBenefits([]);
    slide.benefits.forEach((_, index) => {
      setTimeout(() => {
        setVisibleBenefits(prev => [...prev, index]);
      }, index * 400);
    });
  }, [slide]);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-green-50 to-blue-50">
      <p className="text-2xl text-gray-500 mb-4 text-center font-medium">
        {slide.subtitle}
      </p>
      
      <h1 className="text-6xl font-bold text-gray-800 mb-20 text-center max-w-5xl">
        {slide.title}
      </h1>
      
      <div className="grid grid-cols-2 gap-8 max-w-6xl w-full">
        {slide.benefits.map((benefit, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-10 shadow-xl border-4 border-esm-green-primary
                       transition-all duration-500 transform
                       ${visibleBenefits.includes(index) 
                         ? 'opacity-100 scale-100' 
                         : 'opacity-0 scale-90'}`}
          >
            <div className="text-7xl mb-6 text-center">{benefit.icon}</div>
            <p className="text-2xl text-gray-800 text-center leading-relaxed font-medium">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
