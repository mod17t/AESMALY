
const Banner = () => {
  return (
    <section
      className="p-16 mx-auto bg-cover bg-center flex items-center rounded-2xl my-3 
      bg-[linear-gradient(to_right,#042A1F,transparent_90%),url('/Hero/hero-bg.jpg')]"
    >
      <div className="container px-8 text-white md:max-w-2xl flex flex-col items-start ">
        <p className="uppercase tracking-widest text-sm mb-2">
          Bienvenue à l'AESMALY
        </p>
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
          L'association des Étudiants Maliens et Jeunes Actifs de Lyon
        </h1>
        <p className="text-xl mb-8">Unir • Accueillir • Accompagner</p>

        <div className="flex gap-4 flex-col sm:flex-row">
          <button className="bg-green-800 px-8 py-3 rounded-full hover:bg-green-900 font-semibold cursor-pointer">
            Découvrir l'association
          </button>
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full hover:bg-yellow-600 font-semibold cursor-pointer">
            Nous Rejoindre
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
