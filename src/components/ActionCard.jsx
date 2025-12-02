export default function ActionCard({ action, isSelected, onToggle }) {
  return (
    <div
      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                  ${isSelected 
                    ? 'border-esm-green-primary bg-green-50 shadow-md' 
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'}`}
      onClick={onToggle}
    >
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
          className="mt-1 w-6 h-6 cursor-pointer accent-esm-green-primary"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {action.name}
          </h3>
          <p className="text-xs text-gray-600 mb-2 italic">{action.description}</p>
          <div className="space-y-1 text-sm text-gray-700">
            <div>
              <span className="font-medium">Investering:</span>{' '}
              <span className="font-semibold text-gray-800">
                {action.investment.toLocaleString('sv-SE')} kr
              </span>
            </div>
            <div>
              <span className="font-medium">Besparing:</span>{' '}
              <span className="font-semibold text-green-600">
                {action.savingsPerYear.toLocaleString('sv-SE')} kr/år
              </span>
            </div>
            <div>
              <span className="font-medium">CO₂-minskning:</span>{' '}
              <span className="font-semibold text-green-600">
                -{action.co2Reduction} ton/år
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
