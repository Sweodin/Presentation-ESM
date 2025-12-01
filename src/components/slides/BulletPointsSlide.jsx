import { useState, useEffect } from 'react';

export default function BulletPointsSlide({ slide }) {
  const [visiblePoints, setVisiblePoints] = useState([]);
  const isProblem = slide.theme === 'problem';

  useEffect(() => {
    setVisiblePoints([]);
    slide.points.forEach((_, index) => {
      setTimeout(() => {
        setVisiblePoints(prev => [...prev, index]);
      }, index * 400);
    });
  }, [slide]);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl w-full">
        {slide.subtitle && (
          <p className="text-2xl text-gray-500 mb-4 text-center font-medium">
            {slide.subtitle}
          </p>
        )}
        <h1 className="text-6xl font-bold text-gray-800 mb-16 text-center">
          {slide.title}
        </h1>
        
        <div className="space-y-8">
          {slide.points.map((point, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 p-8 bg-white rounded-2xl shadow-lg
                         transition-all duration-500 transform
                         ${visiblePoints.includes(index) 
                           ? 'opacity-100 translate-x-0' 
                           : 'opacity-0 -translate-x-10'}`}
            >
              <div className={`text-7xl ${isProblem ? 'grayscale' : ''}`}>
                {point.icon}
              </div>
              <p className={`text-3xl font-medium ${isProblem ? 'text-gray-700' : 'text-gray-800'}`}>
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
