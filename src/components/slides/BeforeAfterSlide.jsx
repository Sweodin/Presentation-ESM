import { useState, useEffect } from 'react';

export default function BeforeAfterSlide({ slide }) {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    setShowAfter(false);
    const timer = setTimeout(() => setShowAfter(true), 800);
    return () => clearTimeout(timer);
  }, [slide]);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-20 text-center max-w-6xl">
        {slide.title}
      </h1>
      
      <div className="grid grid-cols-2 gap-12 max-w-7xl w-full">
        {/* FÖRE */}
        <div className="bg-red-50 border-4 border-red-300 rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl font-bold text-red-700 mb-8 text-center">
            {slide.before.title}
          </h2>
          <ul className="space-y-4">
            {slide.before.items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="text-3xl text-red-500">❌</span>
                <span className="text-2xl text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* EFTER */}
        <div className={`bg-green-50 border-4 border-green-400 rounded-3xl p-12 shadow-xl
                        transition-all duration-700 transform
                        ${showAfter ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
            {slide.after.title}
          </h2>
          <ul className="space-y-4">
            {slide.after.items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="text-3xl text-green-500">✅</span>
                <span className="text-2xl text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
