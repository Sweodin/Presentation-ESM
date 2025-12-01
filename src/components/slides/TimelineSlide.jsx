import { useState, useEffect } from 'react';

export default function TimelineSlide({ slide }) {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [showIssues, setShowIssues] = useState(false);

  useEffect(() => {
    setVisibleSteps([]);
    setShowIssues(false);
    
    slide.timeline.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSteps(prev => [...prev, index]);
      }, index * 500);
    });

    setTimeout(() => {
      setShowIssues(true);
    }, slide.timeline.length * 500 + 500);
  }, [slide]);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-20 text-center">
        {slide.title}
      </h1>
      
      {/* Timeline */}
      <div className="relative w-full max-w-6xl mb-16">
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-300 transform -translate-y-1/2"></div>
        
        <div className="relative flex justify-between items-center">
          {slide.timeline.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center transition-all duration-500
                         ${visibleSteps.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            >
              <div className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-4
                             ${step.status === 'bottleneck' 
                               ? 'bg-red-500 animate-pulse' 
                               : 'bg-esm-green-primary'}`}>
                {step.status === 'bottleneck' ? '⚠️' : '✓'}
              </div>
              <p className="text-2xl font-semibold text-gray-800 text-center max-w-xs">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Issues */}
      <div className={`bg-white rounded-2xl p-10 shadow-xl max-w-4xl transition-all duration-500
                      ${showIssues ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <ul className="space-y-4">
          {slide.issues.map((issue, index) => (
            <li key={index} className="flex items-center gap-4">
              <span className="text-3xl text-red-500">⚠️</span>
              <span className="text-2xl text-gray-700">{issue}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
