import { useState, useEffect } from 'react';

export default function InformationFlowSlide({ slide }) {
  const [visibleActors, setVisibleActors] = useState([]);
  const [showIssue, setShowIssue] = useState(false);

  useEffect(() => {
    setVisibleActors([]);
    setShowIssue(false);
    
    slide.flow.forEach((_, index) => {
      setTimeout(() => {
        setVisibleActors(prev => [...prev, index]);
      }, index * 600);
    });

    setTimeout(() => {
      setShowIssue(true);
    }, slide.flow.length * 600 + 500);
  }, [slide]);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-12 text-center">
        {slide.title}
      </h1>
      
      <p className="text-2xl text-gray-600 mb-16 text-center italic">
        {slide.subtitle}
      </p>

      <div className="flex items-center justify-center gap-8 mb-16">
        {slide.flow.map((actor, index) => (
          <div key={index} className="flex items-center">
            <div className={`transition-all duration-500
                           ${visibleActors.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <div className="bg-white border-4 border-gray-300 rounded-2xl p-8 shadow-lg">
                <p className="text-2xl font-bold text-gray-800 text-center whitespace-nowrap">
                  {actor.role}
                </p>
              </div>
            </div>
            
            {index < slide.flow.length - 1 && (
              <div className={`mx-4 transition-all duration-500
                             ${visibleActors.includes(index + 1) ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative">
                  <div className="w-24 h-1 bg-red-500"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-4xl text-red-500">⚠️</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={`bg-red-100 border-4 border-red-400 rounded-2xl p-10 max-w-3xl
                      transition-all duration-500 transform
                      ${showIssue ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center gap-6 justify-center">
          <span className="text-6xl">🚫</span>
          <p className="text-4xl font-bold text-red-700">
            {slide.issue}
          </p>
        </div>
      </div>
    </div>
  );
}
