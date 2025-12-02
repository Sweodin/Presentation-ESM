import { Bar } from 'react-chartjs-2';
import { propertyData } from '../data/mockData';
import savingsImg from '../assets/concepts/lönsamhet.png';
import co2Img from '../assets/concepts/projektering.png';
import timeImg from '../assets/concepts/förvaltade hus.png';

export default function Summary({ concept, results, onBack, onRestart }) {
  const data = propertyData[concept];
  const { totals, afterEnergy, afterCO2, paybackYears } = results;

  const chartData = {
    labels: ['Energikostnad', 'CO₂-utsläpp'],
    datasets: [
      {
        label: 'Före',
        data: [data.current.energyCost, data.current.co2],
        backgroundColor: '#E53E3E',
        borderRadius: 8,
      },
      {
        label: 'Efter',
        data: [afterEnergy, afterCO2],
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
          font: {
            size: 16,
            family: 'Poppins',
            weight: '600'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      title: {
        display: true,
        text: 'Jämförelse: Före och Efter',
        font: {
          size: 24,
          family: 'Poppins',
          weight: '700'
        },
        padding: {
          bottom: 30
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            if (context.dataIndex === 0) {
              return label + ': ' + value.toLocaleString('sv-SE') + ' kr';
            } else {
              return label + ': ' + value + ' ton CO₂';
            }
          }
        },
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          family: 'Poppins'
        },
        bodyFont: {
          size: 14,
          family: 'Poppins'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14,
            family: 'Poppins'
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        ticks: {
          font: {
            size: 14,
            family: 'Poppins',
            weight: '600'
          }
        },
        grid: {
          display: false
        }
      }
    }
  };

  const savingsPercentage = ((totals.savings / data.current.energyCost) * 100).toFixed(1);
  const co2Percentage = ((totals.co2 / data.current.co2) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Sammanfattning
          </h1>
          <h2 className="text-2xl text-gray-700">
            {concept === 'trivsel' && 'TrivselBo'}
            {concept === 'social' && 'SocialBo'}
            {concept === 'kultur' && 'KulturBo'}
            {concept === 'service' && 'ServiceBo'}
            {' – '}{data.name}
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Med valda åtgärder uppnår ni:
          </h3>

          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="text-center p-4 bg-green-50 rounded-2xl border-2 border-green-200">
              <div className="mb-3 flex justify-center">
                <img
                  src={savingsImg}
                  alt="Besparing"
                  className="w-12 h-12 object-contain rounded-xl border border-green-200"
                />
              </div>
              <div className="text-xs text-gray-600 mb-1 font-medium">Besparing</div>
              <div className="text-2xl font-bold text-green-600 mb-1">
                {totals.savings.toLocaleString('sv-SE')} kr/år
              </div>
              <div className="text-base text-green-700 font-semibold">
                -{savingsPercentage}%
              </div>
            </div>

            <div className="text-center p-4 bg-green-50 rounded-2xl border-2 border-green-200">
              <div className="mb-3 flex justify-center">
                <img
                  src={co2Img}
                  alt="CO₂-minskning"
                  className="w-12 h-12 object-contain rounded-xl border border-green-200"
                />
              </div>
              <div className="text-xs text-gray-600 mb-1 font-medium">CO₂-minskning</div>
              <div className="text-2xl font-bold text-green-600 mb-1">
                {totals.co2} ton/år
              </div>
              <div className="text-lg text-green-700 font-semibold">
                -{co2Percentage}%
              </div>
            </div>

            <div className="text-center p-4 bg-blue-50 rounded-2xl border-2 border-blue-200">
              <div className="mb-3 flex justify-center">
                <img
                  src={timeImg}
                  alt="Återbetalningstid"
                  className="w-12 h-12 object-contain rounded-xl border border-blue-200"
                />
              </div>
              <div className="text-xs text-gray-600 mb-1 font-medium">Återbetalningstid</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {paybackYears} år
              </div>
              <div className="text-base text-blue-700 font-semibold">
                ROI: {(100 / paybackYears).toFixed(1)}%/år
              </div>
            </div>
          </div>

          <div className="h-80 mb-6">
            <Bar data={chartData} options={chartOptions} />
          </div>

          <div className="bg-gradient-to-r from-esm-green-primary to-esm-green-secondary text-white p-6 rounded-2xl text-center">
            <h4 className="text-xl font-bold mb-2">
              Total investering: {totals.investment.toLocaleString('sv-SE')} kr
            </h4>
            <p className="text-base opacity-90">
              Ger en årlig besparing på {totals.savings.toLocaleString('sv-SE')} kr och minskar CO₂-utsläppen med {totals.co2} ton
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-4">
          <button
            onClick={onBack}
            className="bg-gray-600 text-white px-10 py-4 rounded-xl text-xl
                     hover:bg-gray-700 transition-all duration-300
                     shadow-lg hover:shadow-xl font-semibold"
          >
            ← Tillbaka
          </button>
          <button
            onClick={onRestart}
            className="bg-esm-green-primary text-white px-10 py-4 rounded-xl text-xl
                     hover:bg-esm-green-dark transition-all duration-300
                     shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
          >
            🔄 Börja om
          </button>
        </div>
      </div>
    </div>
  );
}
