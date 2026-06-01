import { ClipboardList, MousePointerClick, CreditCard } from "lucide-react";

const HowToJoin = () => {
  return (
    <section className="py-8 md:py-12 px-5 sm:px-7 bg-stone-50/60">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 bg-yellow-600 text-white w-fit px-5 py-2.5 rounded-tl-full rounded-r-full mb-6 relative">
          <ClipboardList className="w-5 h-5" />
          <h2 className="font-bold text-sm sm:text-base">Comment adhérer ?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-6">
              Cliquez sur <strong>ce lien pour remplir le formulaire</strong> et
              régler la cotisation annuelle de 15€ :
            </p>

            <div className="flex flex-row items-center gap-5 sm:gap-6">
              <a
                href="https://www.helloasso.com/associations/aesmaly/adhesions/adhesion-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-800 hover:bg-green-900 text-white px-4 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 hover:underline underline-offset-2 decoration-white/50 w-fit"
              >
                Adhérer maintenant
                <MousePointerClick className="w-5 h-5" />
              </a>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-gray-600" />
                  <span className="font-bold text-blue-700 text-base">
                    HelloAsso
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                  Paiement sécurisé
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg order-1 md:order-2 mx-auto w-full">
            <img
              src="/Adhesion-img/communaute.jpg"
              alt="Membres de l'association"
              className="w-full aspect-3/2 object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;