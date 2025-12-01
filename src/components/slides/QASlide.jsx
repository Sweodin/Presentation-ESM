export default function QASlide({ slide }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-esm-green-primary to-esm-green-dark">
      <div className="text-9xl mb-16 animate-bounce">❓</div>
      
      <h1 className="text-9xl font-bold text-white mb-20 text-center filter drop-shadow-2xl">
        {slide.title}
      </h1>
      
      <div className="bg-white/95 backdrop-blur rounded-3xl p-12 shadow-2xl max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {slide.contact.company}
        </h2>
        
        <div className="space-y-4 text-2xl text-gray-700">
          <div className="flex items-center gap-4">
            <span className="text-3xl">👤</span>
            <span>{slide.contact.person}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl">📧</span>
            <a href={`mailto:${slide.contact.email}`} className="text-esm-green-primary hover:underline">
              {slide.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl">📞</span>
            <span>{slide.contact.phone}</span>
          </div>
        </div>
      </div>

      <div className="mt-12 text-white text-xl text-center opacity-80">
        <p>Tack för er uppmärksamhet!</p>
      </div>
    </div>
  );
}
