import ValueCard from "../layouts/ValueCard"

const OurValue = () => {
    const values = [
      {
        image: "/OurValues/images/inclusion.jpg",
        icon: "/OurValues/icons/icon-inclusion.png",
        title: "Inclusion",
        color: { text: "text-green-700", bg: "bg-green-700", border: "border-green-700" },
        description:
          "Accueillir chacun sans distinction dans un esprit d'ouverture et de respect. Créer un cadre où chaque voix compte et où chacun peut trouver sa place.",
      },
      {
        image: "/OurValues/images/hospitalite.jpg",
        icon: "/OurValues/icons/icon-hospitalite.png",
        title: "Hospitalité",
        color: { text: "text-yellow-600", bg: "bg-yellow-500", border: "border-yellow-500" },
        description:
          "Valeur centrale de notre culture, la djatiguiya incarne l'esprit de famille, d'entraide et de respect qui guide nos actions au quotidien.",
      },
      {
        image: "/OurValues/images/transmission.jpg",
        icon: "/OurValues/icons/icon-transmission.png",
        title: "Transmission",
        color: { text: "text-red-600", bg: "bg-red-600", border: "border-red-600" },
        description:
          "Partager nos cultures, nos savoirs et nos expériences entre générations et entre parcours. Un pont Mali-France, entre nos racines et nos parcours à Lyon.",
      },
    ];

  return (
    <section className=" bg-[#F8F4EF] pt-6 pb-15 mb-12">
      <h2 className="text-3xl text-green-800 font-bold text-center mb-5">Nos Valeurs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {values.map((value)=> (
          <ValueCard
            key={value.title}
            image={value.image}
            icon={value.icon}
            title={value.title}
            colors={value.color}
            description={value.description}
          />
        ))}

      </div>
    </section>
  );
}

export default OurValue