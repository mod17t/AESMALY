import { HeartHandshake } from "lucide-react";

const SupportUs = () => {
  return (
    <>
      <section className="py-6 md:py-8 px-5 md:px-7 bg-red-50/40">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-3 bg-red-700 text-white px-5 py-2 rounded-tl-full rounded-r-full">
              <HeartHandshake className="w-6 h-6" />
              <h2 className="font-bold text-sm sm:text-base">
                Soutenir l'AESMALY
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:border-r border-red-300 ">
              Vous souhaitez{" "}
              <strong className="text-red-700">contribuer</strong> à nos actions
              et <strong className="text-red-700">soutenir</strong> la jeunesse
              malienne de Lyon ? Faite un don ! <br />
              <br />
              Chaque contribution compte. Merci de votre{" "}
              <strong className="text-red-700">soutien</strong> !
            </div>
            <div className="flex gap-2 items-center bg-red-100 p-4 rounded-lg">
              <div className="bg-red-700 rounded-full p-2">
                <img
                  src="/Adhesion-img/support.png"
                  alt="icone"
                  className="w-10 md:w-14"
                />
              </div>
              <p>
                <strong>
                  Les dons se feront sur la page "HelloAsso" car sans
                  commission.
                  <br />
                </strong>
                (PayPal et carte bancaire à ajouter si nécessaire)
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default SupportUs;
