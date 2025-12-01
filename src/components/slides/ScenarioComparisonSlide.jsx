import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

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
        label: 'Utan investering',
        data: [450000, 4500000],
        backgroundColor: '#E53E3E',
        borderRadius: 8,
      },
      {
        label: 'Med ESM',
        data: [205000, 2050000 + slide.scenarioA.investment],
        backgroundColor: '#2AAE82',
        borderRadius: 8,
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
        ticks: {
          callback: (value) => (value / 1000000).toFixed(1) + ' Mkr',
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
              <p className="text-lg text-gray-600">Engångsinvestering</p>
              <p className="text-3xl font-bold text-gray-800">
                {slide.scenarioA.investment.toLocaleString('sv-SE')} kr
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-lg text-gray-600">Årlig besparing</p>
              <p className="text-3xl font-bold text-green-600">
                {slide.scenarioA.annualSavings.toLocaleString('sv-SE')} kr/år
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-lg text-gray-600">Återbetalningstid</p>
              <p className="text-3xl font-bold text-blue-600">
                {slide.scenarioA.payback} år
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
