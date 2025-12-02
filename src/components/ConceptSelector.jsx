import { concepts } from '../data/mockData';
import trivselImg from '../assets/concepts/TrivselBo.png';
import socialImg from '../assets/concepts/SocialBo.png';
import kulturImg from '../assets/concepts/KulturBo.png';
import serviceImg from '../assets/concepts/ServiceBo.png';

const conceptImages = {
  trivsel: trivselImg,
  social: socialImg,
  kultur: kulturImg,
  service: serviceImg
};

export default function ConceptSelector({ onSelect }) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-8">
      <img 
        src={`${import.meta.env.BASE_URL}Logo-with-crown_glowing.png`}
        alt="ESM" 
        className="h-24 mb-8 object-contain"
      />
      <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
        ESMA – AI för energismarta fastigheter
      </h1>
      <p className="text-2xl text-gray-600 mb-16">Välj typ av boende:</p>
    
      <div className="grid grid-cols-2 gap-8 max-w-5xl">
        {concepts.map(concept => {
          const imgSrc = conceptImages[concept.id];
          return (
            <button
              key={concept.id}
              onClick={() => onSelect(concept.id)}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl 
                       hover:-translate-y-3 transition-all duration-300
                       border-4 border-transparent hover:border-esm-green-primary
                       group"
            >
              <div className="mb-4 group-hover:scale-105 transition-transform duration-300 flex justify-center">
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={concept.name}
                    className="w-full h-40 object-cover rounded-2xl border-2 border-gray-200"
                  />
                ) : (
                  <div className="text-7xl">
                    {concept.icon}
                  </div>
                )}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {concept.name}
              </h2>
            </button>
          );
        })}
      </div>
    
      <div className="mt-16 text-center text-gray-500 text-sm">
        <p>Klicka på ett koncept för att se AI-analys och energibesparingar</p>
      </div>
    </div>
  );
}