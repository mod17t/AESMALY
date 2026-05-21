const Mentions = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-20 text-center animate-[fadeIn_1s_ease-out]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-8">
            Mentions légales
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-emerald-800"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-emerald-800"></div>
            <div className="h-px w-16 bg-emerald-800"></div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <article className="space-y-8">
          <section>
            <p className="text-stone-700 leading-[1.9] text-[15px] md:text-base ">
              Le présent site est édité par :
            </p>
            <p className="text-stone-700 leading-[1.9] text-[15px] md:text-base mt-4">
              AESMALY
              <br />
              Association des Étudiants et Jeunes Maliens de Lyon
              <br />
              Adresse :
              <br />
              25 rue Jaboulay
              <br />
              69007 Lyon
              <br />
              France
              <br />
              <br />
              Adresse e-mail :
              <br />
              aesmalyon@gmail.com
              <br />
              <br />
              Directrice de la publication :
              <br />
              Maimouna Doumbia
              <br />
              Présidente en exercice de l'association AESMALY
            </p>
          </section>

          <section className="pt-10 border-t border-stone-200">
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mb-6 tracking-tight">
              Hébergement du site
            </h2>
            <p className="text-stone-700 leading-[1.9] text-[15px] md:text-base">
              Le site est hébergé par :
              <br />
              <br />
              Nom de l'hébergeur : À compléter
              <br />
              Adresse : À compléter
              <br />
              Site web : À compléter
              <br />
              <br />
              (Cette section sera complétée une fois l'hébergeur choisi.)
            </p>
          </section>

          <section className="pt-10 border-t border-stone-200">
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mb-6 tracking-tight">
              Propriété intellectuelle
            </h2>
            <p className="text-stone-700 leading-[1.9] text-[15px] md:text-base">
              L'ensemble des contenus présents sur ce site (textes, images,
              logos, documents, vidéos, etc.) sont la propriété exclusive de
              l'association AESMALY, sauf mention contraire.
              <br />
              <br />
              Toute reproduction, représentation ou diffusion, totale ou
              partielle, sans autorisation préalable est interdite.
            </p>
          </section>

          <section className="pt-10 border-t border-stone-200">
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mb-6 tracking-tight">
              Responsabilité
            </h2>
            <p className="text-stone-700 leading-[1.9] text-[15px] md:text-base">
              L'association AESMALY met tout en œuvre pour fournir des
              informations fiables sur ce site. Toutefois, elle ne peut garantir
              l'exactitude, la complétude ou l'actualité des informations
              diffusées.
              <br />
              <br />
              L'association ne pourra être tenue responsable des dommages
              directs ou indirects résultant de l'utilisation du site.
            </p>
          </section>

          <section className="pt-10 border-t border-stone-200">
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mb-6 tracking-tight">
              Liens externes — HelloAsso
            </h2>
            <p className="text-stone-700 leading-[1.9] text-[15px] md:text-base">
              Le site peut contenir des liens redirigeant vers la plateforme
              HelloAsso, utilisée pour la gestion des adhésions et des dons.
              <br />
              <br />
              AESMALY ne saurait être tenue responsable du contenu ou du
              fonctionnement de ces sites tiers.
            </p>
          </section>
        </article>

        <div className="flex items-center justify-center gap-4 mt-20 pt-10">
          <div className="h-px w-12 bg-emerald-800/30"></div>
          <div className="w-1 h-1 rotate-45 bg-emerald-800/30"></div>
          <div className="h-px w-12 bg-emerald-800/30"></div>
        </div>
      </main>
    </div>
  );
};

export default Mentions;
