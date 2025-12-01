export default function BenefitSlide({ slide }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-esm-green-primary to-esm-green-dark">
      <p className="text-2xl text-white/80 mb-4 text-center font-medium">
        {slide.subtitle}
      </p>
      
      <div className="text-9xl mb-12 filter drop-shadow-2xl animate-bounce">
        {slide.icon}
      </div>
      
      <h1 className="text-7xl font-bold text-white mb-12 text-center filter drop-shadow-lg">
        {slide.title}
      </h1>
      
      <div className="bg-white/95 backdrop-blur rounded-3xl p-12 shadow-2xl max-w-4xl">
        <p className="text-3xl text-gray-800 text-center leading-relaxed font-medium">
          {slide.content}
        </p>
      </div>
    </div>
  );
}
