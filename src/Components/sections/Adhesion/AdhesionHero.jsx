const AdhesionHero = () => {
  return (
    <section className="relative overflow-hidden mt-3 bg-[#F9EFE5]">
     
      <div className="absolute inset-0">
        <img
          src="/Adhesion-img/communaute.jpg"
          alt="Membres de la communauté partageant un repas"
          className="w-full h-full object-cover object-center md:object-right"
        />

        <div className="md:hidden absolute inset-0 bg-linear-to-b from-[#F9EFE5] from-0% via-[#F9EFE5]/70 via-40% to-transparent to-85%" />

        <div className="hidden md:block absolute inset-0 bg-linear-to-r from-[#F9EFE5] from-0% via-[#F9EFE5]/80 via-40% to-transparent to-65%" />
      </div>

      
      <div className="relative z-10 flex items-start md:items-center min-h-70 sm:min-h-80 md:min-h-90 lg:min-h-100">
        <div className="w-full md:w-1/2 px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-3 md:mb-4">
            Rejoindre / Adhérer
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-md">
            Unissez-vous à notre communauté et soutenez la jeunesse malienne de
            Lyon.
          </p>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full block"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C200,80 400,20 700,40 C1000,60 1200,20 1440,10 L1440,100 L0,100 Z"
            fill="white"
          />
          <path
            d="M0,60 C200,80 400,20 700,40 C1000,60 1200,20 1440,10"
            fill="none"
            stroke="url(#tricolor)"
            strokeWidth="7"
          />
          <defs>
            <linearGradient id="tricolor" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="33%" stopColor="#15803d" />
              <stop offset="33%" stopColor="#eab308" />
              <stop offset="66%" stopColor="#eab308" />
              <stop offset="66%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default AdhesionHero;
