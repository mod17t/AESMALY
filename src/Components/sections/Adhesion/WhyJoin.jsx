import { Handshake } from "lucide-react";

const WhyJoin = () => {
  return (
    <section className="bg-linear-to-b from-white via-[#FFFBF5] to-[#FFFBF5] py-15 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 bg-green-800 text-white w-fit px-5 py-2 rounded-tl-full rounded-r-full mb-6">
          <Handshake className="w-5 h-5" />
          <h2 className="font-bold text-sm sm:text-base">
            Pourquoi nous rejoindre ?
          </h2>
        </div>

        <p className="text-sm sm:text-base mb-4 text-gray-800 leading-relaxed">
          <strong>Adhérer à l'AESMALY,</strong> c'est rejoindre une{" "}
          <strong>communauté</strong> soudée fondée sur la{" "}
          <strong>solidarité, l'entraide</strong> et la{" "}
          <strong>transmission.</strong>
        </p>
        <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
          C'est aussi <strong>bénéficier d'un réseau actif à Lyon</strong> et
          d'une <strong>association</strong> qui accompagne ses membres dans
          leur <strong>intégration</strong>, leur <strong>réussite</strong> et
          leur <strong>épanouissement.</strong>
        </p>

        <div className="relative bg-[#F4F1EA] rounded-lg px-10 py-8 md:px-14 md:py-10 mt-8">
          <span className="absolute top-2 left-4 md:top-3 md:left-5 text-5xl md:text-6xl text-green-800 font-serif font-bold leading-none select-none">
            &ldquo;
          </span>

          <p className="text-green-800 text-base md:text-lg mb-4 px-8 md:px-12 text-center">
            <strong>Grâce à vous,</strong> des étudiants trouvent enfin un
            logement, un stage, un repère.
          </p>

          <div className="text-sm text-gray-800 space-y-1 px-8 md:px-14 text-center">
            <p>
              Chaque jour, nous accompagnons des jeunes souvent seuls face à
              leurs démarches.
            </p>
            <p>
              Votre don nous aide à les orienter, les rassurer et leur offrir de
              vraies perspectives.
            </p>
            <p>
              En soutenant notre action, vous participez aussi à la{" "}
              <strong>lutte contre l'exclusion étudiante</strong>.
            </p>
          </div>

          <span className="absolute bottom-0 right-4 md:bottom-1 md:right-5 text-5xl md:text-6xl text-green-800 font-serif font-bold leading-none select-none">
            &rdquo;
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
