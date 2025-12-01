import { useState, useEffect } from 'react';

export default function ProcessFlowSlide({ slide }) {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setVisibleSteps([]);
    setProgress(0);
    
    slide.steps.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSteps(prev => [...prev, index]);
        setProgress(((index + 1) / slide.steps.length) * 100);
      }, index * 600);
    });
  }, [slide]);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-8 text-center max-w-5xl">
        {slide.title}
      </h1>
      
      {slide.subtitle && (
        <p className="text-2xl text-gray-500 mb-16 text-center">
          {slide.subtitle}
        </p>
      )}

      <div className="space-y-8 max-w-5xl w-full mb-12">
        {slide.steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center gap-8 bg-white rounded-2xl p-8 shadow-lg
                       transition-all duration-500 transform
                       ${visibleSteps.includes(index) 
                         ? 'opacity-100 translate-x-0' 
                         : 'opacity-0 -translate-x-10'}`}
          >
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-esm-green-primary to-esm-green-dark 
                          rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {step.number}
            </div>
            <div className="text-6xl">{step.icon}</div>
            <h3 className="text-3xl font-semibold text-gray-800 flex-1">
              {step.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-5xl">
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-esm-green-primary to-esm-green-dark 
                     transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-center mt-4 text-2xl font-semibold text-gray-600">
          {Math.round(progress)}% komplett
        </p>
      </div>
    </div>
  );
}
