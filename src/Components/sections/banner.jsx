const Banner = () => {
  return (
    <section
      className="
        mx-auto bg-cover bg-center flex items-center rounded-2xl my-3
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
          <button className="bg-green-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-green-900 font-semibold cursor-pointer text-sm sm:text-base">
            Découvrir l'association
          </button>
          <button className="bg-yellow-500 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-yellow-600 font-semibold cursor-pointer text-sm sm:text-base">
            Nous Rejoindre
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
