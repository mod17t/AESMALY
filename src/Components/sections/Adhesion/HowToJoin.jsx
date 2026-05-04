import { ClipboardList, MousePointerClick, CreditCard } from "lucide-react";

const HowToJoin = () => {
  return (
    <section className="py-10 sm:py-12 px-5 sm:px-7">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-3 bg-yellow-500 text-white px-5 py-2 rounded-tl-full rounded-r-full">
            <ClipboardList className="w-5 h-5" />
            <h2 className="font-bold text-sm sm:text-base">
              Comment adhérer ?
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-5">
              Cliquez sur{" "}
              <strong>ce lien pour remplir le formulaire</strong> et régler la
              cotisation annuelle de 15€ :
            </p>

            <a
              href="https://www.helloasso.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Adhérer maintenant
              <MousePointerClick className="w-5 h-5" />
            </a>

            <div className="mt-6">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <CreditCard className="w-7 h-7 text-gray-600" />
                <span className="font-bold text-blue-700 text-base">
                  HelloAsso
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Paiement sécurisé : Carte Bancaire • PayPal
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg order-first md:order-last">
            <img
              src="/Adhesion-img/communaute.jpg"
              alt="Membres de l'association"
              className="w-full aspect-3/2 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;