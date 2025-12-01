import { useState, useEffect } from 'react';

export default function ESMAIntroSlide({ slide }) {
  const [visiblePoints, setVisiblePoints] = useState([]);

  useEffect(() => {
    setVisiblePoints([]);
    slide.points.forEach((_, index) => {
      setTimeout(() => {
        setVisiblePoints(prev => [...prev, index]);
      }, index * 400);
    });
  }, [slide]);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-8xl mb-8 animate-pulse">🤖</div>
      
      <h1 className="text-6xl font-bold text-gray-800 mb-20 text-center max-w-5xl">
        {slide.title}
      </h1>
      
      <div className="space-y-6 max-w-5xl w-full">
        {slide.points.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-6 bg-white rounded-2xl p-8 shadow-lg
                       transition-all duration-500 transform
                       ${visiblePoints.includes(index) 
                         ? 'opacity-100 translate-x-0' 
                         : 'opacity-0 -translate-x-10'}`}
          >
            <p className="text-3xl font-medium text-gray-800">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-esm-green-primary to-esm-green-dark 
                    text-white px-12 py-6 rounded-2xl shadow-xl">
        <p className="text-2xl font-semibold text-center">
          Nästa: Se ESMA i aktion →
        </p>
      </div>
    </div>
  );
}
