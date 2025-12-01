import { Bar } from 'react-chartjs-2';

export default function CostComparisonSlide({ slide }) {
  const data = {
    labels: ['Planerad kostnad', 'Slutlig kostnad'],
    datasets: [{
      label: 'Kostnad (kr)',
      data: [slide.chart.planned, slide.chart.actual],
      backgroundColor: ['#4299E1', '#E53E3E'],
      borderRadius: 12,
      barThickness: 120,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: slide.chart.label,
        font: { size: 28, family: 'Poppins', weight: '700' },
        padding: { bottom: 30 }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => value.toLocaleString('sv-SE') + ' kr',
          font: { size: 18, family: 'Poppins' }
        }
      },
      x: {
        ticks: {
          font: { size: 20, family: 'Poppins', weight: '600' }
        }
      }
    }
  };

  const difference = slide.chart.actual - slide.chart.planned;
  const percentIncrease = ((difference / slide.chart.planned) * 100).toFixed(1);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-12 text-center">
        {slide.title}
      </h1>
      
      <div className="max-w-5xl w-full mb-12">
        <ul className="space-y-4 bg-white p-10 rounded-2xl shadow-lg">
          {slide.content.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="text-3xl text-red-500">⚠️</span>
              <span className="text-2xl text-gray-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full max-w-4xl h-96 bg-white p-8 rounded-2xl shadow-xl">
        <Bar data={data} options={options} />
      </div>

      <div className="mt-8 bg-red-100 border-4 border-red-400 rounded-2xl p-6">
        <p className="text-3xl font-bold text-red-700 text-center">
          Kostnadsökning: +{difference.toLocaleString('sv-SE')} kr ({percentIncrease}%)
        </p>
      </div>
    </div>
  );
}
