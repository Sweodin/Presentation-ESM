import { useState, useEffect } from 'react';
import dataCollectionImg from '../../assets/concepts/usb minne.png';
import analysisImg from '../../assets/concepts/Legosortering.png';
import calcOptimizationImg from '../../assets/concepts/lönsamhet.png';
import designImg from '../../assets/concepts/projektering.png';
import executionImg from '../../assets/concepts/projekt av renovering.png';
import optimizationImg from '../../assets/concepts/förvaltade hus.png';

export default function ProcessFlowSlide({ slide }) {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [progress, setProgress] = useState(0);

  const stepImages = [
    dataCollectionImg,
    analysisImg,
    calcOptimizationImg,
    designImg,
    executionImg,
    optimizationImg
  ];

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
    <div className="h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center max-w-5xl">
        {slide.title}
      </h1>
      
      {slide.subtitle && (
        <p className="text-xl text-gray-500 mb-6 text-center max-w-4xl">
          {slide.subtitle}
        </p>
      )}

      <div className="max-w-6xl w-full mb-8 flex-1 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-6 w-full">
          {slide.steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center text-center
                         transition-all duration-500 transform
                         ${visibleSteps.includes(index) 
                           ? 'opacity-100 translate-y-0' 
                           : 'opacity-0 translate-y-6'}`}
            >
              <div className="flex items-center justify-center mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-esm-green-primary to-esm-green-dark 
                                rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                  {step.number}
                </div>
              </div>
              {stepImages[index] && (
                <img
                  src={stepImages[index]}
                  alt={step.title}
                  className="w-24 h-24 object-cover rounded-xl mb-3"
                />
              )}
              <h3 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
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
