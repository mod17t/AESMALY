import React from "react";

const ContactHero = () => {
  return (
    <header
      className="
        relative
        bg-[linear-gradient(to_right,#FEF9F5_45%,transparent_65%),url(/Contact/contact-hero.png)]
        bg-cover bg-center bg-no-repeat
        flex items-center
        min-h-75 sm:min-h-85 md:min-h-100
        px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16 my-4
      "
    >
      <div className="w-full max-w-[50%] flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-green-700 text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Contactez-nous
          </h1>
          <div className="flex w-24 h-0.75">
            <div className="flex-1 bg-green-500"></div>
            <div className="flex-1 bg-yellow-500"></div>
            <div className="flex-1 bg-red-500"></div>
          </div>
        </div>
        <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
          Une question, une suggestion ou l'envie d'en savoir d'avantage sur
          l'AESMALY ? <br /> Vous souhaitez collaborer avec nous ? <br /> Nous
          sommes à votre écoute et ravis d'échanger avec vous.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-10"
        >
         
          <defs>
            <clipPath id="waveClip">
              <path d="M0,20 C300,-8 900,40 1200,8 L1200,40 L0,40 Z" />
            </clipPath>
          </defs>

          <rect
            x="0"
            y="0"
            width="400"
            height="40"
            fill="#16a34a"
            clipPath="url(#waveClip)"
          />

          <rect
            x="400"
            y="0"
            width="400"
            height="40"
            fill="#eab308"
            clipPath="url(#waveClip)"
          />

          <rect
            x="800"
            y="0"
            width="400"
            height="40"
            fill="#dc2626"
            clipPath="url(#waveClip)"
          />
        </svg>
      </div>
    </header>
  );
};

export default ContactHero;
