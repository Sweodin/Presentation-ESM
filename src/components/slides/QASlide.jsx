import danielImg from '../../assets/concepts/Daniel.jpg';

export default function QASlide({ slide }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-esm-green-primary to-esm-green-dark">
      <div className="mb-12">
        <img
          src={danielImg}
          alt={slide.contact.person}
          className="w-48 h-48 object-cover rounded-full border-4 border-white/80 shadow-2xl"
        />
      </div>
      
      <h1 className="text-9xl font-bold text-white mb-20 text-center filter drop-shadow-2xl">
        {slide.title}
      </h1>
      
      <div className="bg-white/95 backdrop-blur rounded-3xl p-12 shadow-2xl max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {slide.contact.company}
        </h2>
        
        <div className="space-y-4 text-2xl text-gray-700 text-center">
          <div>
            <span className="font-semibold">{slide.contact.person}</span>
          </div>
          <div>
            <a
              href={`mailto:${slide.contact.email}`}
              className="text-esm-green-primary hover:underline"
            >
              {slide.contact.email}
            </a>
          </div>
          <div>
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
