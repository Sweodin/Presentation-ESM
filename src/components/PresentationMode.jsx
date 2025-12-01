import { useState, useEffect, useCallback } from 'react';
import { presentationSlides } from '../data/presentationData';
import BulletPointsSlide from './slides/BulletPointsSlide';
import BeforeAfterSlide from './slides/BeforeAfterSlide';
import TimelineSlide from './slides/TimelineSlide';
import CostComparisonSlide from './slides/CostComparisonSlide';
import InformationFlowSlide from './slides/InformationFlowSlide';
import ConceptIntroSlide from './slides/ConceptIntroSlide';
import BoConceptSlide from './slides/BoConceptSlide';
import ProcessFlowSlide from './slides/ProcessFlowSlide';
import WorkflowComparisonSlide from './slides/WorkflowComparisonSlide';
import BenefitSlide from './slides/BenefitSlide';
import ESMAIntroSlide from './slides/ESMAIntroSlide';
import ROIBenefitsSlide from './slides/ROIBenefitsSlide';
import ScenarioComparisonSlide from './slides/ScenarioComparisonSlide';
import QASlide from './slides/QASlide';

export default function PresentationMode({ onExitToDemo }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = presentationSlides[currentSlideIndex];

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < presentationSlides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex]);

  const prevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < presentationSlides.length) {
      setCurrentSlideIndex(index);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch(e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(presentationSlides.length - 1);
          break;
        case 'Escape':
          e.preventDefault();
          // Exit fullscreen if active
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          // Toggle fullscreen
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
          } else {
            document.exitFullscreen();
          }
          break;
        case 'd':
        case 'D':
          // Go to interactive demo
          if (currentSlide.type === 'interactive-demo') {
            onExitToDemo();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, currentSlide, onExitToDemo]);

  const renderSlide = () => {
    // If this is the interactive demo slide, show a placeholder with instruction
    if (currentSlide.type === 'interactive-demo') {
      return (
        <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="text-9xl mb-12 animate-pulse">🤖</div>
          <h1 className="text-7xl font-bold text-gray-800 mb-8 text-center">
            {currentSlide.title}
          </h1>
          <p className="text-3xl text-gray-600 mb-16 text-center">
            {currentSlide.subtitle}
          </p>
          
          <button
            onClick={onExitToDemo}
            className="bg-gradient-to-r from-esm-green-primary to-esm-green-dark 
                     text-white px-16 py-8 rounded-2xl text-3xl font-bold
                     hover:scale-105 transition-all duration-300 shadow-2xl
                     animate-bounce"
          >
            Starta Interaktiv Demo →
          </button>
          
          <p className="mt-12 text-xl text-gray-500">
            Tryck 'D' eller klicka på knappen för att starta demon
          </p>
        </div>
      );
    }

    switch(currentSlide.type) {
      case 'bullet-points':
        return <BulletPointsSlide slide={currentSlide} />;
      case 'before-after':
        return <BeforeAfterSlide slide={currentSlide} />;
      case 'timeline':
        return <TimelineSlide slide={currentSlide} />;
      case 'cost-comparison':
        return <CostComparisonSlide slide={currentSlide} />;
      case 'information-flow':
        return <InformationFlowSlide slide={currentSlide} />;
      case 'concept-intro':
        return <ConceptIntroSlide slide={currentSlide} />;
      case 'bo-concept':
        return <BoConceptSlide slide={currentSlide} />;
      case 'process-flow':
        return <ProcessFlowSlide slide={currentSlide} />;
      case 'ai-overview':
        return <BulletPointsSlide slide={currentSlide} />;
      case 'workflow-comparison':
        return <WorkflowComparisonSlide slide={currentSlide} />;
      case 'benefit-slide':
        return <BenefitSlide slide={currentSlide} />;
      case 'esma-intro':
        return <ESMAIntroSlide slide={currentSlide} />;
      case 'roi-benefits':
        return <ROIBenefitsSlide slide={currentSlide} />;
      case 'scenario-comparison':
        return <ScenarioComparisonSlide slide={currentSlide} />;
      case 'qa':
        return <QASlide slide={currentSlide} />;
      default:
        return <div className="h-screen flex items-center justify-center">
          <p className="text-4xl">Slide type not implemented: {currentSlide.type}</p>
        </div>;
    }
  };

  return (
    <div className="relative">
      {renderSlide()}
      
      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 
                    bg-black/70 backdrop-blur text-white px-8 py-4 rounded-full
                    flex items-center gap-6 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className="hover:text-esm-green-primary disabled:opacity-30 disabled:cursor-not-allowed
                   text-2xl transition-colors"
        >
          ←
        </button>
        
        <span className="text-lg font-medium">
          {currentSlideIndex + 1} / {presentationSlides.length}
        </span>
        
        <button
          onClick={nextSlide}
          disabled={currentSlideIndex === presentationSlides.length - 1}
          className="hover:text-esm-green-primary disabled:opacity-30 disabled:cursor-not-allowed
                   text-2xl transition-colors"
        >
          →
        </button>
        
        <div className="w-px h-6 bg-white/30 mx-2"></div>
        
        <button
          onClick={() => {
            if (!document.fullscreenElement) {
              document.documentElement.requestFullscreen();
            } else {
              document.exitFullscreen();
            }
          }}
          className="hover:text-esm-green-primary text-xl transition-colors"
          title="Toggle Fullscreen (F)"
        >
          ⛶
        </button>
      </div>

      {/* Slide Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-esm-green-primary to-esm-green-dark transition-all duration-300"
          style={{ width: `${((currentSlideIndex + 1) / presentationSlides.length) * 100}%` }}
        ></div>
      </div>

      {/* Help Overlay (press H) */}
      <div className="fixed bottom-8 right-8 bg-black/70 backdrop-blur text-white px-6 py-3 rounded-lg text-sm z-50">
        <p>← → Navigera | F Fullskärm | D Demo | Esc Avsluta</p>
      </div>
    </div>
  );
}
