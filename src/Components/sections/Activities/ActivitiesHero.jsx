const ActivitiesHero = () => {
  return (
    <>
      <header
        className="
        relative
        bg-[linear-gradient(to_right,#062E24_40%,transparent_75%),url(/Activities/header.png)]
        bg-cover bg-center bg-no-repeat
        flex items-center
        min-h-50 sm:min-h-70 md:min-h-90
        px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16
      "
      >
        <div className="text-white w-full max-w-[55%] sm:max-w-sm md:max-w-lg flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Nos activités
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            Des événements pour rassembler, valoriser et partager la culture
            malienne à Lyon.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-10 sm:h-10 md:h-15"
          >
            <path
              d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z"
              fill="white"
            />
          </svg>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center gap-4 text-center mx-10 px-6 sm:px-10 md:px-16 py-4 md:py-8">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-green-800 text-2xl md:text-3xl font-bold text-center">
            Les évènements phares (annuels)
          </h2>
          <div className="flex h-0.75 w-24 rounded-full">
            <div className="bg-green-700 flex-1"></div>
            <div className="bg-yellow-400 flex-1"></div>
            <div className="bg-red-600 flex-1"></div>
          </div>
        </div>
        <p>
          Chaque année, l’AESMALY organise des événements structurants qui
          rythment la vie de l’association. Ces rendez-vous incontournables
          traduisent nos valeurs de partage, de transmission et de mise en
          lumière de la culture.
        </p>
      </div>
    </>
  );
};

export default ActivitiesHero;
