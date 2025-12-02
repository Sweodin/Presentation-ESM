import administrationImg from '../../assets/concepts/studiebild.png';
import kalkylerImg from '../../assets/concepts/Är kalkylen tydlig_Har jag räknat på rätt sätt_Är jag tillräckligt pedagogisk_Eller är mottagaren.jpeg';
import beslutImg from '../../assets/concepts/Sverige halkar efter – dags att kavla upp skjortärmarna_.jpeg';
import uppfoljningImg from '../../assets/concepts/förvaltade hus.png';

export default function BenefitSlide({ slide }) {
  const benefitImages = {
    administration: administrationImg,
    kalkyler: kalkylerImg,
    beslut: beslutImg,
    uppfoljning: uppfoljningImg
  };

  const imgSrc = slide.image && benefitImages[slide.image];

  return (
    <div className="h-screen flex flex-col items-center justify-center p-16 bg-gradient-to-br from-esm-green-primary to-esm-green-dark">
      <p className="text-2xl text-white/80 mb-4 text-center font-medium">
        {slide.subtitle}
      </p>
      
      <div className="mb-12 filter drop-shadow-2xl flex items-center justify-center animate-pulse">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={slide.title}
            className="w-40 h-40 object-cover rounded-3xl border-4 border-white/70"
          />
        ) : (
          <div className="text-9xl">
            {slide.icon}
          </div>
        )}
      </div>
      
      <h1 className="text-7xl font-bold text-white mb-12 text-center filter drop-shadow-lg">
        {slide.title}
      </h1>
      
      <div className="bg-white/95 backdrop-blur rounded-3xl p-12 shadow-2xl max-w-4xl">
        {Array.isArray(slide.content) ? (
          <ul className="text-3xl text-gray-800 leading-relaxed font-medium list-disc list-inside space-y-3 text-left">
            {slide.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-3xl text-gray-800 text-center leading-relaxed font-medium">
            {slide.content}
          </p>
        )}
      </div>
    </div>
  );
}
