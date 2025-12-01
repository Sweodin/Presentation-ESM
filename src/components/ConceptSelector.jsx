import { concepts } from '../data/mockData';

export default function ConceptSelector({ onSelect }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-8">
      <img 
        src="/ESM_logo_main.jpg" 
        alt="ESM" 
        className="h-24 mb-8 object-contain"
      />
      <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
        ESMA – AI för energismarta fastigheter
      </h1>
      <p className="text-2xl text-gray-600 mb-16">Välj typ av boende:</p>
      
      <div className="grid grid-cols-2 gap-10 max-w-5xl">
        {concepts.map(concept => (
          <button
            key={concept.id}
            onClick={() => onSelect(concept.id)}
            className="bg-white p-16 rounded-3xl shadow-lg hover:shadow-2xl 
                     hover:-translate-y-3 transition-all duration-300
                     border-4 border-transparent hover:border-esm-green-primary
                     group"
          >
            <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
              {concept.icon}
            </div>
            <h2 className="text-3xl font-semibold text-gray-800">
              {concept.name}
            </h2>
          </button>
        ))}
      </div>
      
      <div className="mt-16 text-center text-gray-500 text-sm">
        <p>Klicka på ett koncept för att se AI-analys och energibesparingar</p>
      </div>
    </div>
  );
}
