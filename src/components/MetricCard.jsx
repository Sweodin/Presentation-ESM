export default function MetricCard({ icon, image, label, value, subtitle, color }) {
  const colorClasses = {
    red: 'border-red-400 bg-red-50',
    orange: 'border-orange-400 bg-orange-50',
    yellow: 'border-yellow-400 bg-yellow-50',
    green: 'border-green-400 bg-green-50',
    blue: 'border-blue-400 bg-blue-50',
    gray: 'border-gray-300 bg-gray-50'
  };

  return (
    <div className={`p-8 rounded-xl border-4 ${colorClasses[color]} transition-smooth hover:scale-105`}>
      <div className="mb-4 flex justify-center">
        {image ? (
          <img
            src={image}
            alt={label}
            className="w-14 h-14 object-contain"
          />
        ) : (
          <div className="text-5xl">{icon}</div>
        )}
      </div>
      <div className="text-sm text-gray-600 mb-2 font-medium">{label}</div>
      <div className="text-3xl font-bold text-gray-800">{value}</div>
      {subtitle && <div className="text-sm text-gray-500 mt-1">{subtitle}</div>}
    </div>
  );
}
