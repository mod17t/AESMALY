import { Send, Mail, Phone, MapPin, Clock, Quote, Lock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Modal from "../../ui/Modal.jsx";
import ErrorModal from "../../ui/ErrorModal.jsx";

const ContactContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data,e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xe0mmbx",
        "template_u2h0rtk",
        e.target,
        "A9LaqPE2GQbRW5nE6",
      )
      .then(
        () => {
          e.target.reset();
          setIsModalOpen(true);
        },
        (error) => setIsErrorModalOpen(true),
      );
  };
  return (
    <section className="bg-[#FEF9F5] py-12 md:py-16 lg:py-20 px-[5%] md:px-[10%]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-green-900">
              Envoyez-nous un message
            </h2>
            <div className="flex w-25 h-0.75 rounded-full overflow-hidden">
              <div className="flex-1 bg-green-600"></div>
              <div className="flex-1 bg-yellow-400"></div>
              <div className="flex-1 bg-red-500"></div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-green-900 font-semibold text-sm"
              >
                Nom complet *
              </label>
              <input
                id="name"
                type="text"
                placeholder="Votre nom"
                {...register("name", { required: "Le nom est requis" })}
                className="border-2 border-gray-200 rounded-md p-3 focus:outline-none focus:border-green-700 transition-colors"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-green-900 font-semibold text-sm"
              >
                Adresse e-mail *
              </label>
              <input
                id="email"
                type="email"
                placeholder="Votre adresse e-mail"
                {...register("email", {
                  required: "L'adresse e-mail est requise",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Adresse e-mail invalide",
                  },
                })}
                className="border-2 border-gray-200 rounded-md p-3 focus:outline-none focus:border-green-700 transition-colors"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="subject"
                className="text-green-900 font-semibold text-sm"
              >
                Sujet *
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Sujet de votre message"
                {...register("subject", { required: "Le sujet est requis" })}
                className="border-2 border-gray-200 rounded-md p-3 focus:outline-none focus:border-green-700 transition-colors"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs">{errors.subject.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-green-900 font-semibold text-sm"
              >
                Message *
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Votre message..."
                {...register("message", { required: "Le message est requis" })}
                className="border-2 border-gray-200 rounded-md p-3 focus:outline-none focus:border-green-700 transition-colors resize-y"
              />
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-md cursor-pointer transition-colors"
            >
              <Send className="w-4 h-4" />
              Envoyer le message
            </button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
              <Lock className="w-3 h-3" />
              Vos informations sont confidentielles et ne seront jamais
              partagées.
            </p>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col gap-2 mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-green-900">
                Nos coordonnées
              </h2>
              <div className="flex w-25 h-0.75 rounded-full overflow-hidden">
                <div className="flex-1 bg-green-600"></div>
                <div className="flex-1 bg-yellow-400"></div>
                <div className="flex-1 bg-red-500"></div>
              </div>
            </div>

            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-11 h-11 rounded-full bg-green-900 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-900">Adresse e-mail</p>
                  <a
                    href="mailto:contact@aes-malyon.org"
                    className="text-gray-600 text-sm hover:text-green-900 transition-colors"
                  >
                    aesmalyon@gmail.com
                  </a>
                </div>
              </li>

              <div className="border-t border-gray-100"></div>

              {/* Téléphone */}
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-900">Téléphone</p>
                  <a
                    href="tel:+33600000000"
                    className="text-gray-600 text-sm hover:text-green-900 transition-colors"
                  >
                    +33 6 00 00 00 00
                  </a>
                </div>
              </li>

              <div className="border-t border-gray-100"></div>

              {/* Adresse */}
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-11 h-11 rounded-full bg-red-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-900">Adresse postale</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    25 rue Jaboulay
                    <br />
                    69007 Lyon, France
                  </p>
                </div>
              </li>

              <div className="border-t border-gray-100"></div>

              <li className="flex items-start gap-3">
                <div className="shrink-0 w-11 h-11 rounded-full bg-green-900 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-900">Horaires</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lundi – Vendredi : 9h – 18h
                    <br />
                    Samedi : 10h – 14h
                    <br />
                    Dimanche : Fermé
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#F7F0EA] rounded-2xl p-6 md:p-8 shadow-sm text-center">
            <p className="font-semibold text-gray-900 mb-4">
              Suivez-nous sur
              <br />
              les réseaux sociaux
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="https://www.facebook.com/share/14TxZRGqpNU/?mibextid=wwXIfr"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <img src="/facebook.png" alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/aesmaly?igsh=MWYzbWFtaWszaW12NQ%3D%3D&utm_source=qr"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full  flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <img src="/instagram.png" alt="instagram" />
              </a>

              <a
                href="https://www.linkedin.com/company/aesmaly/"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <img src="/linkedin.png" alt="linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 shadow-sm flex items-center gap-4 md:gap-6">
          {/* <Quote
            className="shrink-0 w-8 h-8 md:w-10 md:h-10 text-gray-300"
            fill="currentColor"
          />*/}
          <span className="text-7xl md:text-8xl text-green-800 font-serif font-bold leading-none select-none">
            &ldquo;
          </span>
          <p className="flex-1 text-gray-950 text-base md:text-lg leading-relaxed">
            Ensemble, construisons une communauté{" "}
            <span className="font-bold text-green-700">forte</span>,{" "}
            <span className="font-bold text-green-700">solidaire</span> et
            tournée vers{" "}
            <span className="font-bold text-green-700">l'avenir</span>.
          </p>

          <img
            src="/Contact/handshake.png"
            alt=""
            className="shrink-0 w-16 h-16 md:w-20 md:h-20 object-contain hidden sm:block"
          />
        </div>
      </div>
      {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}

      {isErrorModalOpen && (
        <ErrorModal closeModal={() => setIsErrorModalOpen(false)} />)}

    </section>
  );
};

export default ContactContent;
