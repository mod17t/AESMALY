import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  const [showSection, setShowSection] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (showSection && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showSection]);
  return (
    <>
      <section
        className="
        mx-[2%] bg-cover bg-center flex items-center rounded-2xl mt-3 mb-3
        min-h-75 sm:min-h-96 md:min-h-130
        px-6 py-12 sm:px-10 sm:py-16 md:px-16
        bg-[linear-gradient(to_right,#042A1F,transparent_90%),url('/Hero/hero-bg.jpg')]
      "
      >
        <div className="text-white w-full sm:max-w-lg md:max-w-2xl flex flex-col items-start gap-4">
          <p className="uppercase tracking-widest text-xs sm:text-sm">
            Bienvenue à l'AESMALY
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            L'association des Étudiants Maliens et Jeunes Actifs de Lyon
          </h1>

          <p className="text-base sm:text-lg md:text-xl">
            Unir • Accueillir • Accompagner
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-2">
            <button
              className="bg-green-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-green-900 font-semibold cursor-pointer text-sm sm:text-base"
              onClick={() => setShowSection(true)}
            >
              Découvrir l'association
            </button>
            <button
              className="bg-yellow-500 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-yellow-600 font-semibold cursor-pointer text-sm sm:text-base"
              onClick={() => navigate("/adhesion")}
            >
              Nous Rejoindre
            </button>
          </div>
        </div>
      </section>

      {showSection && (
        <section
          ref={sectionRef}
          className={`px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-16 animate-fadeInUp will-change-[opacity,transform]`}
        >
          <h2 className="text-3xl text-green-800 font-bold text-center ">
            Qui sommes-nous ?
          </h2>
          <p className="text-2XL md:text-4XL text-gray-700 text-center py-6 ">
            Créée en <strong className="text-green-700">2003</strong> par et
            pour les étudiants et jeunes professionnels maliens.{" "}
            <strong className="text-green-700">
              L’Association des Étudiants et Jeunes Maliens de Lyon (AESMALY)
            </strong>{" "}
            est une structure dynamique qui accompagne l’intégration, rassemble
            et valorise la jeunesse malienne présente à Lyon et dans sa région.
            Nous agissons pour créer un environnement bienveillant où chaque
            étudiant ou jeune actif peut{" "}
            <strong className="text-green-700">
              s’intégrer, réussir et s’épanouir.
            </strong>
          </p>
        </section>
      )}
    </>
  );
};

export default Banner;
