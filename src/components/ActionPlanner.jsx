import { useState, useEffect } from 'react';
import ActionCard from './ActionCard';
import ComparisonChart from './ComparisonChart';
import { propertyData } from '../data/mockData';
import aiImg from '../assets/concepts/ai.png';
import chartImg from '../assets/concepts/lönsamhet.png';

function SummaryMetric({ label, value, color, highlight }) {
  const colorClasses = {
    gray: 'text-gray-800',
    green: 'text-green-600',
    blue: 'text-blue-600'
  };

  return (
    <div className={`${highlight ? 'bg-blue-50 p-4 rounded-lg border-2 border-blue-200' : ''}`}>
      <div className="text-sm text-gray-600 mb-1 font-medium">{label}</div>
      <div className={`text-2xl font-bold ${colorClasses[color]}`}>
        {value}
      </div>
    </div>
  );
}

export default function ActionPlanner({ concept, onContinue, onBack }) {
  const data = propertyData[concept];
  const [selectedActions, setSelectedActions] = useState([0, 1, 3]); // Default valda åtgärder

  const toggleAction = (id) => {
    setSelectedActions(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Beräkna totaler
  const totals = selectedActions.reduce((acc, id) => {
    const action = data.actions[id];
    if (!action) return acc;
    return {
      investment: acc.investment + action.investment,
      savings: acc.savings + action.savingsPerYear,
      co2: acc.co2 + action.co2Reduction
    };
  }, { investment: 0, savings: 0, co2: 0 });

  const paybackYears = totals.savings > 0 
    ? Math.round(totals.investment / totals.savings)
    : 0;

  const afterEnergy = data.current.energyCost - totals.savings;
  const afterCO2 = data.current.co2 - totals.co2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <button 
        onClick={onBack}
        className="text-esm-green-primary hover:text-esm-green-dark mb-8 text-lg font-medium
                   flex items-center gap-2 transition-colors"
      >
        ← Tillbaka
      </button>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          {concept === 'trivsel' && 'TrivselBo'}
          {concept === 'social' && 'SocialBo'}
          {concept === 'kultur' && 'KulturBo'}
          {concept === 'service' && 'ServiceBo'}
          {' – '}{data.name}
        </h1>
        
        <div className="grid grid-cols-2 gap-6 items-start">
          {/* Vänster kolumn: Åtgärder */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow border border-gray-200">
                <img
                  src={aiImg}
                  alt="AI-förslag"
                  className="w-8 h-8 object-contain"
                />
              </span>
              AI-föreslagna åtgärder
            </h2>
            
            <div className="space-y-3">
              {data.actions.map((action, index) => (
                <ActionCard
                  key={action.id}
                  action={action}
                  isSelected={selectedActions.includes(index)}
                  onToggle={() => toggleAction(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Höger kolumn: Prognos */}
          <div className="bg-white p-6 rounded-2xl shadow-xl sticky top-4 h-fit">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow border border-gray-200">
                <img
                  src={chartImg}
                  alt="Prognos"
                  className="w-8 h-8 object-contain"
                />
              </span>
              Prognos efter åtgärder
            </h2>
            
            <div className="space-y-4">
              <SummaryMetric
                label="Total investering"
                value={`${totals.investment.toLocaleString('sv-SE')} kr`}
                color="gray"
              />
              
              <SummaryMetric
                label="Total besparing"
                value={`${totals.savings.toLocaleString('sv-SE')} kr/år`}
                color="green"
              />
              
              <SummaryMetric
                label="CO₂-minskning"
                value={`${totals.co2} ton/år`}
                color="green"
              />
              
              <SummaryMetric
                label="Återbetalningstid"
                value={paybackYears > 0 ? `${paybackYears} år` : 'N/A'}
                color="blue"
                highlight
              />
              
              <ComparisonChart
                before={{ 
                  energy: data.current.energyCost, 
                  co2: data.current.co2 
                }}
                after={{ 
                  energy: afterEnergy, 
                  co2: afterCO2 
                }}
              />
              
              <button 
                onClick={() => onContinue({ totals, afterEnergy, afterCO2, paybackYears })}
                className="w-full bg-esm-green-primary text-white py-3 rounded-xl
                         text-lg font-semibold hover:bg-esm-green-dark transition-all
                         shadow-lg hover:shadow-xl hover:scale-105 mt-4"
              >
                Visa sammanfattning →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
