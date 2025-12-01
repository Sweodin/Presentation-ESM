import { useState, useEffect } from 'react';

export default function ConceptIntroSlide({ slide }) {
  const [showConcepts, setShowConcepts] = useState(false);

  useEffect(() => {
    setShowConcepts(false);
    const timer = setTimeout(() => setShowConcepts(true), 800);
    return () => clearTimeout(timer);
  }, [slide]);

  const conceptIcons = {
    'TrivselBo': '🏠',
    'SocialBo': '🤝',
    'KulturBo': '🏛️',
    'ServiceBo': '🏥'
  };

  const conceptColors = {
    'TrivselBo': 'from-green-400 to-green-600',
    'SocialBo': 'from-blue-400 to-blue-600',
    'KulturBo': 'from-purple-400 to-purple-600',
    'ServiceBo': 'from-teal-400 to-teal-600'
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-8 text-center max-w-5xl">
        {slide.title}
      </h1>
      
      <p className="text-3xl text-gray-600 mb-6 text-center">
        {slide.content}
      </p>
      
      <p className="text-2xl text-gray-500 mb-16 text-center font-medium">
        {slide.subtitle}
      </p>

      <div className={`grid grid-cols-4 gap-8 max-w-6xl transition-all duration-700 transform
                      ${showConcepts ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        {slide.concepts.map((concept, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${conceptColors[concept]} 
                       rounded-3xl p-10 shadow-2xl transform hover:scale-105 
                       transition-all duration-300`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-7xl mb-4 text-center filter drop-shadow-lg">
              {conceptIcons[concept]}
            </div>
            <h3 className="text-2xl font-bold text-white text-center">
              {concept}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
