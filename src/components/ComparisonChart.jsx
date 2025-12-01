import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ComparisonChart({ before, after }) {
  const data = {
    labels: ['Före', 'Efter'],
    datasets: [
      {
        label: 'Energikostnad (kr/år)',
        data: [before.energy, after.energy],
        backgroundColor: ['#E53E3E', '#2AAE82'],
        borderRadius: 8,
        barThickness: 60,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Energikostnad per år',
        font: {
          size: 18,
          family: 'Poppins',
          weight: '600'
        },
        padding: {
          bottom: 20
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.parsed.y.toLocaleString('sv-SE') + ' kr';
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
          callback: function(value) {
            return value.toLocaleString('sv-SE') + ' kr';
          },
          font: {
            size: 12,
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
    },
    animation: {
      duration: 750,
      easing: 'easeInOutQuart'
    }
  };

  return (
    <div className="h-64 mt-6">
      <Bar data={data} options={options} />
    </div>
  );
}
