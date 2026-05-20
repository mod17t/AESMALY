import { Link } from "react-router-dom";
import ActivityCard from "../../ui/ActivityCard";

const OurActivities = () => {
  const cards = [
    {
      title: "Cocktail d'ouverture",
      titleColor: "green",
      images: [
        "/Activities/cocktail-1.jpg",
        "/Activities/cocktail-3.jpg",
        "/Activities/cocktail-2.jpg",
      ],
      icon: "/Activities/cocktail-icon.png",
      description:
        "Le cocktail d’ouverture marque le lancement officiel de l’année associative. Il constitue un moment privilégié de rencontre entre les nouveaux membres, les anciens et les partenaires de l’AESMALY. Cet événement favorise l’intégration, le réseautage et la création de liens dans une ambiance conviviale. Il incarne l’esprit d’accueil et de cohésion qui anime l’association dès le début de l’année.",
    },
    {
      title: "Sourafana Parfait",
      titleColor: "amber",
      images: [
        "/Activities/SP-1.jpeg",
        "/Activities/SP-2.jpeg",
        "/Activities/SP-3.jpg",
      ],
      icon: "/Activities/SP-icon.png",
      description:
        "Le Sourafana Parfait (ou «  Dîner Parfait » ) est un événement emblématique de l’AESMALY, profondément ancré dans les traditions maliennes. Il met à l’honneur les plats traditionnels maliens, valeurs de partage, de solidarité et de transmission culturelle.Cet événement est un moment de rassemblement fort, permettant de renforcer les liens entre les membres.",
    },
    {
      title: "Journée Professionnelle",
      titleColor: "red",
      images: [
        "/Activities/SP-1.jpeg",
        "/Activities/SP-2.jpeg",
        "/Activities/SP-3.jpg",
      ],
      icon: "/Activities/pro-icon.png",
      description:
        "La Journée Professionnelle est dédiée à l’accompagnement des membres dans leur parcours académique et professionnel. Elle réunit étudiants et intervenants issus de divers secteurs afin de partager leurs expériences et leurs conseils.",
    },
    {
      title: "La Journée Culturelle",
      titleColor: "green",
      images: [
        "/Activities/SP-1.jpeg",
        "/Activities/SP-2.jpeg",
        "/Activities/SP-3.jpg",
      ],
      icon: "/Activities/JC-icon.png",
      description:
        "La Journée culturelle est un temps fort consacré à la valorisation du patrimoine malien. Elle propose diverses activités (performances et animations) permettant de découvrir et de célébrer la richesse culturelle du Mali.",
    },
  ];
  const otherActivities = [
    {
      title: "La FAN CAN Zone",
      titleColor: "green",
      images: [
        "/Activities/SP-1.jpeg",
        "/Activities/SP-2.jpeg",
        "/Activities/SP-3.jpg",
      ],
      icon: "/Activities/JC-icon.png",
      description:
        "La Fan Can Zone est un événement autour des grandes compétitions de football africain, notamment la Coupe d’Afrique des Nations (CAN). Elle offre un espace de rassemblement pour les passionnés de football, permettant de suivre les matchs dans une ambiance festive et conviviale. Cet événement favorise le partage de la passion pour le football et renforce les liens entre les membres de l’association.",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-center mx-10 px-6 sm:px-10 md:px-16 py-4 md:py-8">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-green-800 text-2xl md:text-3xl font-bold text-center">
            Les évènements phares (annuels)
          </h2>
          <div className="flex h-0.75 w-35 rounded-full">
            <div className="bg-green-700 flex-1"></div>
            <div className="bg-yellow-400 flex-1"></div>
            <div className="bg-red-600 flex-1"></div>
          </div>
        </div>
        <p className="text-gray-700 text-sm md:text-lg">
          Chaque année, l’AESMALY organise des événements structurants qui
          rythment la vie de l’association. Ces rendez-vous incontournables
          traduisent nos valeurs de partage, de transmission et de mise en
          lumière de la culture.
        </p>
      </div>
      <div className="py-2 mx-5 md:mx-12 lg:mx-40">
        <div className="flex flex-col items-center gap-5">
          {cards.map((card, index) => (
            <ActivityCard
              key={index}
              title={card.title}
              titleColor={card.titleColor}
              images={card.images}
              icon={card.icon}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-center mx-10 px-6 sm:px-10 md:px-16 py-4 md:py-8">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-green-800 text-2xl md:text-3xl font-bold text-center">
            Les évènements ponctuels et participations
          </h2>
          <div className="flex h-0.75 w-35 rounded-full">
            <div className="bg-green-700 flex-1"></div>
            <div className="bg-yellow-400 flex-1"></div>
            <div className="bg-red-600 flex-1"></div>
          </div>
        </div>
        <p className="text-gray-700 text-sm md:text-lg">
          Au-delà de ses événements annuels, l’AESMALY s’inscrit dans une
          dynamique active en participant et en organisant des événements
          ponctuels, en lien avec l’actualité culturelle et associative.
        </p>
      </div>
      <div className="py-2 mx-5 md:mx-12 lg:mx-40">
        <div className="flex flex-col items-center gap-5">
          {otherActivities.map((card, index) => (
            <ActivityCard
              key={index}
              title={card.title}
              titleColor={card.titleColor}
              images={card.images}
              icon={card.icon}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-center mx-10 px-6 sm:px-10 md:px-16 py-4 md:py-8">
        <div className="flex h-0.75 w-35 rounded-full">
          <div className="bg-green-700 flex-1"></div>
          <div className="bg-yellow-400 flex-1"></div>
          <div className="bg-red-600 flex-1"></div>
        </div>
        <p>
          Rejoignez nous pour plus d'activités et de moments de partage autour
          de la culture malienne à Lyon !
        </p>
        <Link
          to="/adhesion"
          className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition-colors"
        >
          En savoir plus
        </Link>
      </div>
    </>
  );
};

export default OurActivities;
