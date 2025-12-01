import MetricCard from './MetricCard';
import { propertyData } from '../data/mockData';

export default function CurrentState({ concept, onContinue, onBack }) {
  const data = propertyData[concept];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <button 
        onClick={onBack}
        className="text-esm-green-primary hover:text-esm-green-dark mb-8 text-lg font-medium
                   flex items-center gap-2 transition-colors"
      >
        ← Tillbaka
      </button>
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {concept === 'trivsel' && 'TrivselBo'}
          {concept === 'social' && 'SocialBo'}
          {concept === 'kultur' && 'KulturBo'}
          {concept === 'service' && 'ServiceBo'}
          {' – Exempelfastighet '}{data.name}
        </h1>
        
        <p className="text-xl text-gray-600 mb-2">{data.location}</p>
        
        <h2 className="text-3xl text-gray-700 mb-12 font-semibold mt-8">Nuläge (2024)</h2>
        
        <div className="grid grid-cols-3 gap-8 mb-16">
          <MetricCard
            icon="⚡"
            label="Energikostnad"
            value={`${data.current.energyCost.toLocaleString('sv-SE')} kr`}
            subtitle="per år"
            color="red"
          />
          <MetricCard
            icon="🌍"
            label="CO₂-utsläpp"
            value={`${data.current.co2} ton`}
            subtitle="per år"
            color="orange"
          />
          <MetricCard
            icon="🔧"
            label="Underhåll"
            value={`${data.current.maintenance.toLocaleString('sv-SE')} kr`}
            subtitle="per år"
            color="yellow"
          />
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={onContinue}
            className="bg-esm-green-primary text-white px-12 py-5 rounded-xl text-2xl
                     hover:bg-esm-green-dark transition-all duration-300
                     shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
          >
            Visa AI-förslag på åtgärder →
          </button>
        </div>
      </div>
    </div>
  );
}
