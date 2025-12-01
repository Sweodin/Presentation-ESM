import { useState, useEffect } from 'react';

export default function WorkflowComparisonSlide({ slide }) {
  const [showWith, setShowWith] = useState(false);

  useEffect(() => {
    setShowWith(false);
    const timer = setTimeout(() => setShowWith(true), 1000);
    return () => clearTimeout(timer);
  }, [slide]);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-20 text-center max-w-6xl">
        {slide.title}
      </h1>
      
      <div className="grid grid-cols-2 gap-12 max-w-7xl w-full">
        {/* Utan AI */}
        <div className="bg-gray-100 border-4 border-gray-400 rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl font-bold text-gray-700 mb-10 text-center">
            {slide.without.title}
          </h2>
          <ul className="space-y-6">
            {slide.without.items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="text-4xl text-gray-500">⚠️</span>
                <span className="text-2xl text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Med AI */}
        <div className={`bg-gradient-to-br from-green-50 to-green-100 border-4 border-esm-green-primary 
                        rounded-3xl p-12 shadow-2xl transition-all duration-700 transform
                        ${showWith ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}>
          <h2 className="text-4xl font-bold text-esm-green-dark mb-10 text-center">
            {slide.with.title}
          </h2>
          <ul className="space-y-6">
            {slide.with.items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="text-4xl text-green-600">✅</span>
                <span className="text-2xl text-gray-800 leading-relaxed font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
