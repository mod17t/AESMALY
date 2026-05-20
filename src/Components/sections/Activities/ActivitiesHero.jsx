const ActivitiesHero = () => {
  return (
    <>
      <header
        className="
        relative
        bg-[linear-gradient(to_right,#062E24_40%,transparent_75%),url(/Activities/header.png)]
        bg-cover bg-center bg-no-repeat
        flex items-center
        min-h-65 sm:min-h-75 md:min-h-90
        px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16
      "
      >
        <div className="text-white w-full max-w-[55%] sm:max-w-sm md:max-w-lg flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Nos activités
          </h1>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
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
    </>
  );
};

export default ActivitiesHero;
