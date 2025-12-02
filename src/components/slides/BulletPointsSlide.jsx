import { useState, useEffect } from 'react';
import maal1Img1 from '../../assets/concepts/lönsamhet.png';
import maal1Img2 from '../../assets/concepts/projektering.png';
import maal1Img3 from '../../assets/concepts/Legosortering.png';
import maal1Img4 from '../../assets/concepts/Fast-Villa-Vide.png';
import problem1Img4 from '../../assets/concepts/usb minne.png';
import ai1Img1 from '../../assets/concepts/ai.png';
import ai1Img2 from '../../assets/concepts/api.png';
import ai1Img3 from '../../assets/concepts/ai tröskel 2.jpg';
import ai1Img4 from '../../assets/concepts/Är kalkylen tydlig_Har jag räknat på rätt sätt_Är jag tillräckligt pedagogisk_Eller är mottagaren.jpeg';

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
              <div className={`flex items-center justify-center ${isProblem ? 'grayscale' : ''}`}>
                {(() => {
                  let imgSrc = null;
                  if (slide.id === 'maal-1') {
                    imgSrc = [maal1Img1, maal1Img2, maal1Img3, maal1Img4][index];
                  } else if (slide.id === 'problem-1') {
                    // Långsamma processer, Många ÄTA, Höga kostnader, Svårt att flytta info
                    imgSrc = [maal1Img3, maal1Img2, maal1Img1, problem1Img4][index];
                  } else if (slide.id === 'ai-1') {
                    // ELSA – hjärnan bakom besluten
                    imgSrc = [ai1Img1, ai1Img2, ai1Img3, ai1Img4][index];
                  }

                  return imgSrc ? (
                    <img
                      src={imgSrc}
                      alt=""
                      className="w-20 h-20 object-contain"
                    />
                  ) : (
                    <span className="text-7xl">{point.icon}</span>
                  );
                })()}
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
