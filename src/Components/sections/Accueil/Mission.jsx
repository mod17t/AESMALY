

const Mission = () => {

  const missions = [
    {
      icon: "/Mission/icons/icon-accueil.png",
      text: "Accueillir, orienter et accompagner",
      suite: "les nouveaux étudiants et jeunes actifs maliens à Lyon",
    },
    {
      icon: "/Mission/icons/icon-integration.png",
      text: "Favoriser l'intégration",
      suite: "sociale, culturelle et académique",
    },
    {
      icon: "/Mission/icons/icon-reseau.png",
      text: "Construire un réseau solidaire",
      suite: "et actif entre les membres",
    },
    {
      icon: "/Mission/icons/icon-insertion.png",
      text: "Soutenir l'insertion professionnelle",
      suite: "",
    },
    {
      icon: "/Mission/icons/icon-projets.png",
      text: "Développer des projets",
      suite: "éducatifs, culturels et sociaux",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-start gap-12 px-6 md:px-16 py-12 bg-white ">
      <div className="relative w-full lg:w-1/3 shrink-0 p-5">
      <div className="absolute top-0 left-0 w-25 h-45 bg-yellow-400 rounded-4xl z-0"></div>
      <div className="absolute bottom-5 right-2 w-20 h-20 bg-green-700 rounded-b-3xl z-0"></div>
      <div className="absolute -bottom-8 right-0 grid grid-cols-5 gap-2 z-0">{Array.from({length: 15}).map((_,i)=>(<span key={i} className="w-2 h-2 bg-green-800 rounded-full"></span>))}</div>
        <img
          src="/Mission/mission.jpg"
          className="relative z-10 w-full h-64 lg:h-full object-cover rounded-2xl"
          alt="Mission"
        />
      </div>
      <div className="flex flex-col w-full lg:w-2/3">
        <div className="w-fit">
          <h2 className="text-green-800 text-2xl lg:text-3xl font-extrabold mb-2">
            Notre Mission
          </h2>
          <div className="flex mb-4">
            <span className="h-0.5 flex-1 bg-green-700 rounded-full"></span>
            <span className="h-0.5 flex-1 bg-yellow-500 rounded-full"></span>
            <span className="h-0.5 flex-1 bg-red-600 rounded-full"></span>
          </div>
        </div>

        <div className="flex flex-col">
          {missions.map((mission, index)=>(
            <div 
              key={index}
              className="flex items-center gap-4 p-3 lg:py-2 border-b border-gray-200 last:border-none">
                <div className="bg-green-800 rounded-xl p-3 shrink-0">
                  <img src={mission.icon} alt={`Icone`} className="w-6 h-6 md:w-8 md:h-8 object-contain"/>
                </div>
                <p className="text-2XL md:text-3XL text-gray-700">
                  <strong>{mission.text}</strong> {mission.suite}
                </p>
              </div> ))}
            
              
        </div>
      </div>
    </section>
  );
}

export default Mission