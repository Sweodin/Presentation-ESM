import { useState, useEffect } from 'react';
import trivselBoImg from '../../assets/concepts/TrivselBo.png';
import socialBoImg from '../../assets/concepts/SocialBo.png';
import kulturBoImg from '../../assets/concepts/KulturBo.png';
import serviceBoImg from '../../assets/concepts/ServiceBo.png';

export default function BoConceptSlide({ slide }) {
  const [visiblePoints, setVisiblePoints] = useState([]);

  useEffect(() => {
    setVisiblePoints([]);
    slide.points.forEach((_, index) => {
      setTimeout(() => {
        setVisiblePoints(prev => [...prev, index]);
      }, (index + 1) * 400);
    });
  }, [slide]);

  const conceptImages = {
    TrivselBo: trivselBoImg,
    SocialBo: socialBoImg,
    KulturBo: kulturBoImg,
    ServiceBo: serviceBoImg
  };

  const colorClasses = {
    green: 'from-green-400 to-green-600',
    blue: 'from-blue-400 to-blue-600',
    purple: 'from-purple-400 to-purple-600',
    teal: 'from-teal-400 to-teal-600'
  };

  return (
    <div className={`h-screen flex items-center justify-center p-16 
                    bg-gradient-to-br ${colorClasses[slide.color]}`}>
      <div className="grid grid-cols-2 gap-16 max-w-7xl w-full">
        {/* Left: Image */}
        <div className="flex items-center justify-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <img 
              src={conceptImages[slide.concept] || slide.image} 
              alt={slide.title}
              className="w-full h-auto rounded-2xl object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center text-white">
          <div className="mb-8 filter drop-shadow-lg flex items-center justify-start">
            <img
              src={conceptImages[slide.concept] || slide.image}
              alt={slide.title}
              className="w-32 h-32 object-contain rounded-2xl"
            />
          </div>
          <h1 className="text-7xl font-bold mb-12 filter drop-shadow-lg">
            {slide.title}
          </h1>
          
          <ul className="space-y-6">
            {slide.points.map((point, index) => (
              <li
                key={index}
                className={`flex items-start gap-4 transition-all duration-500 transform
                           ${visiblePoints.includes(index) 
                             ? 'opacity-100 translate-x-0' 
                             : 'opacity-0 -translate-x-10'}`}
              >
                <span className="text-3xl mt-1">✓</span>
                <span className="text-3xl font-medium leading-relaxed filter drop-shadow">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
