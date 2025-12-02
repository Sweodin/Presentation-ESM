import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const formatMillions = (value) => {
  const millions = value / 1_000_000;
  return millions.toFixed(1).replace('.', ',') + ' Mkr';
};

export default function ScenarioComparisonSlide({ slide }) {
  const [showScenarioA, setShowScenarioA] = useState(false);

  useEffect(() => {
    setShowScenarioA(false);
    const timer = setTimeout(() => setShowScenarioA(true), 1200);
    return () => clearTimeout(timer);
  }, [slide]);

  const chartData = {
    labels: ['Årlig kostnad', 'Efter 10 år'],
    datasets: [
      {
        label: 'Utan Projekt',
        // Värden i Mkr för tydligare visualisering
        data: [4.5, 45],
        backgroundColor: '#E53E3E',
        borderColor: '#9B2C2C',
        borderWidth: 2,
        borderRadius: 12,
        barThickness: 55,
        categoryPercentage: 0.5,
        barPercentage: 0.3,
      },
      {
        label: 'Med Projekt',
        // Värden i Mkr för tydligare visualisering
        data: [3.0, 30],
        backgroundColor: '#2AAE82',
        borderColor: '#046c4e',
        borderWidth: 2,
        borderRadius: 12,
        barThickness: 55,
        categoryPercentage: 0.5,
        barPercentage: 0.3,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: { size: 20, family: 'Poppins', weight: '600' },
          padding: 20
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 50,
        ticks: {
          callback: (value) => value.toFixed(1).replace('.', ',') + ' Mkr',
          font: { size: 16, family: 'Poppins' }
        }
      },
      x: {
        ticks: {
          font: { size: 18, family: 'Poppins', weight: '600' }
        }
      }
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-16 text-center">
        {slide.title}
      </h1>
      
      <div className="grid grid-cols-2 gap-12 max-w-7xl w-full mb-12">
        {/* Scenario B - Utan */}
        <div className="bg-red-50 border-4 border-red-400 rounded-3xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">
            {slide.scenarioB.title}
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-5xl">📉</span>
              <p className="text-2xl text-gray-700">{slide.scenarioB.status}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-5xl">💸</span>
              <p className="text-2xl text-gray-700">{slide.scenarioB.lost}</p>
            </div>
            {slide.scenarioB.note && (
              <div className="flex items-center gap-4">
                <span className="text-5xl">🏚️</span>
                <p className="text-2xl text-gray-700">{slide.scenarioB.note}</p>
              </div>
            )}
          </div>
        </div>

        {/* Scenario A - Med ESM */}
        <div className={`bg-green-50 border-4 border-green-500 rounded-3xl p-10 shadow-2xl
                        transition-all duration-700 transform
                        ${showScenarioA ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            {slide.scenarioA.title}
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4">
              <p className="text-lg text-gray-600">Investering</p>
              <p className="text-3xl font-bold text-gray-800">
                {formatMillions(slide.scenarioA.investment)}
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-lg text-gray-600">Ökat driftnetto</p>
              <p className="text-3xl font-bold text-green-600">
                {formatMillions(slide.scenarioA.annualSavings)}/år
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-lg text-gray-600">Ökat värde</p>
              <p className="text-3xl font-bold text-blue-600">
                {slide.scenarioA.increasedValue
                  ? formatMillions(slide.scenarioA.increasedValue)
                  : `${slide.scenarioA.payback} år`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl h-80 bg-white p-6 rounded-2xl shadow-xl">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
