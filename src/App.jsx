import { useState } from 'react';
import PresentationMode from './components/PresentationMode';
import ConceptSelector from './components/ConceptSelector';
import CurrentState from './components/CurrentState';
import ActionPlanner from './components/ActionPlanner';
import Summary from './components/Summary';
import './styles/globals.css';
import presentationImg from './assets/concepts/Fast-Villa-Vide.png';
import aiImg from './assets/concepts/ai.png';

function App() {
  const [mode, setMode] = useState('start'); // start, presentation, demo
  const [view, setView] = useState('selector'); // selector, current, planner, summary
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [summaryResults, setSummaryResults] = useState(null);

  // Start screen handlers
  const handleStartPresentation = () => {
    setMode('presentation');
  };

  const handleStartDemo = () => {
    setMode('demo');
    setView('selector');
  };

  const handleExitToDemo = () => {
    setMode('demo');
    setView('selector');
  };

  const handleBackToStart = () => {
    setMode('start');
    setView('selector');
    setSelectedConcept(null);
    setSummaryResults(null);
  };

  // Demo handlers
  const handleConceptSelect = (concept) => {
    setSelectedConcept(concept);
    setView('current');
  };

  const handleContinueToPlanner = () => {
    setView('planner');
  };

  const handleContinueToSummary = (results) => {
    setSummaryResults(results);
    setView('summary');
  };

  const handleBackToSelector = () => {
    setView('selector');
    setSelectedConcept(null);
    setSummaryResults(null);
  };

  const handleBackToCurrent = () => {
    setView('current');
  };

  const handleBackToPlanner = () => {
    setView('planner');
  };

  const handleRestart = () => {
    setView('selector');
    setSelectedConcept(null);
    setSummaryResults(null);
  };

  // Start Screen
  if (mode === 'start') {
    return (
      <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-esm-green-primary to-esm-green-dark">
        <img 
          src={`${import.meta.env.BASE_URL}Logo-with-crown_glowing.png`}
          alt="ESM" 
          className="h-64 mb-12 object-contain filter drop-shadow-2xl"
        />
        
        <h1 className="text-8xl font-bold text-white mb-8 text-center filter drop-shadow-lg">
          ESM Presentation
        </h1>
        
        <p className="text-3xl text-white/90 mb-20 text-center max-w-4xl">
          AI för energismarta fastigheter
        </p>

        <div className="flex gap-8">
          <button
            onClick={handleStartPresentation}
            className="bg-white text-esm-green-dark px-16 py-8 rounded-2xl text-3xl font-bold
                     hover:scale-105 transition-all duration-300 shadow-2xl
                     hover:shadow-white/50"
          >
            <span className="flex items-center gap-4">
              <img
                src={presentationImg}
                alt="Starta presentation"
                className="w-10 h-10 object-cover rounded-xl border border-esm-green-primary/40"
              />
              <span>Starta Presentation</span>
            </span>
          </button>
          
          <button
            onClick={handleStartDemo}
            className="bg-esm-green-dark text-white px-16 py-8 rounded-2xl text-3xl font-bold
                     hover:scale-105 transition-all duration-300 shadow-2xl border-4 border-white"
          >
            <span className="flex items-center gap-4">
              <img
                src={aiImg}
                alt="ESMA demo"
                className="w-10 h-10 object-contain rounded-xl border border-white/40 bg-white/80"
              />
              <span>Direkt till ESMA Demo</span>
            </span>
          </button>
        </div>

        <div className="mt-16 text-white/70 text-xl text-center">
          <p>Tryck på valfri knapp för att börja</p>
          <p className="mt-2 text-lg">Tips: Använd F för fullskärm under presentationen</p>
        </div>
      </div>
    );
  }

  // Presentation Mode
  if (mode === 'presentation') {
    return (
      <>
        <PresentationMode onExitToDemo={handleExitToDemo} />
        <button
          onClick={handleBackToStart}
          className="fixed top-8 left-8 bg-black/50 hover:bg-black/70 text-white px-6 py-3 
                   rounded-lg transition-colors z-50 text-lg"
        >
          ← Tillbaka till start
        </button>
      </>
    );
  }

  // Demo Mode
  return (
    <div className="App">
      <button
        onClick={handleBackToStart}
        className="fixed top-8 left-8 bg-black/50 hover:bg-black/70 text-white px-6 py-3 
                 rounded-lg transition-colors z-50 text-lg"
      >
        ← Tillbaka till start
      </button>

      {view === 'selector' && (
        <ConceptSelector onSelect={handleConceptSelect} />
      )}
      
      {view === 'current' && selectedConcept && (
        <CurrentState 
          concept={selectedConcept}
          onContinue={handleContinueToPlanner}
          onBack={handleBackToSelector}
        />
      )}
      
      {view === 'planner' && selectedConcept && (
        <ActionPlanner 
          concept={selectedConcept}
          onContinue={handleContinueToSummary}
          onBack={handleBackToCurrent}
        />
      )}
      
      {view === 'summary' && selectedConcept && summaryResults && (
        <Summary 
          concept={selectedConcept}
          results={summaryResults}
          onBack={handleBackToPlanner}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
