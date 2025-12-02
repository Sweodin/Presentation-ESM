import { useState, useEffect } from 'react';
import trivselBoImg from '../../assets/concepts/TrivselBo.png';
import socialBoImg from '../../assets/concepts/SocialBo.png';
import kulturBoImg from '../../assets/concepts/KulturBo.png';
import serviceBoImg from '../../assets/concepts/ServiceBo.png';

export default function ConceptIntroSlide({ slide }) {
  const [showConcepts, setShowConcepts] = useState(false);

  useEffect(() => {
    setShowConcepts(false);
    const timer = setTimeout(() => setShowConcepts(true), 800);
    return () => clearTimeout(timer);
  }, [slide]);

  const conceptIcons = {
    TrivselBo: trivselBoImg,
    SocialBo: socialBoImg,
    KulturBo: kulturBoImg,
    ServiceBo: serviceBoImg
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
            className={`bg-white rounded-3xl p-4 shadow-2xl transform hover:scale-105 
                       transition-all duration-300 flex flex-col items-center`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="mb-4 w-full h-40 text-center filter drop-shadow-lg flex items-center justify-center">
              <img
                src={conceptIcons[concept]}
                alt={concept}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-black text-center">
              {concept}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
