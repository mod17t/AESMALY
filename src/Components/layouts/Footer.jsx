import { Mail, MapPin, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Footer = () => {
  return (
    <footer className="bg-green-950 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-10 py-12">
        <div className="flex flex-col gap-4 items-center md:items-start border-b md:border-b-0 md:border-r border-white/80 pb-6 md:pb-0 md:pr-8">
          <div className="flex items-center md:items-start gap-3">
            <img
              src="/Logo.png"
              alt="AESMALY Logo"
              className="w-14 h-14 object-contain"
            />
            <div>
              <h3 className="text-lg font-bold">AESMALY</h3>
              <p className="text-xs text-gray-100">
                Association des Étudiants et Jeunes Actifs Malien de Lyon
              </p>
            </div>
          </div>
          <p className="text-sm font-light text-center md:text-left">
            Une communauté soudée pour l'intégration, la réussite et
            l'épanouissement des étudiants et jeunes maliens à Lyon.
          </p>
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/aesmaly?igsh=MWYzbWFtaWszaW12NQ%3D%3D&utm_source=qr"
              className="p-2 rounded-full transition hover:scale-105 duration-300"
            >
              <img src="/instagram.png" alt="Instagram" className="w-7" />
            </a>
            <a
              href="https://www.linkedin.com/company/aesmaly/"
              className="p-2 rounded-full transition hover:scale-105 duration-300"
            >
              <img src="/linkedin.png" alt="LinkedIn" className="w-7" />
            </a>
            <a
              href="https://www.facebook.com/share/14TxZRGqpNU/?mibextid=wwXIfr"
              className="p-2 rounded-full transition hover:scale-105 duration-300"
            >
              <img src="/facebook.png" alt="Email" className="w-7" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start border-b md:border-b-0 lg:border-r border-white/80 pb-6 md:pb-0 md:px-8">
          <div className="w-fit">
            <h3 className="text-lg font-bold">Liens Rapides</h3>
            <div className="h-0.5 w-full bg-yellow-500 mt-1 mb-3" />
          </div>
          {[
            { name: "Accueil", lien: "/" },
            { name: "Nos activités", lien: "/activities" },
            { name: "Adhésion", lien: "/adhesion" },
            { name: "contact", lien: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.lien}
              className="text-sm text-gray-300 hover:text-white flex items-center gap-2 transition"
            >
              <span className="text-yellow-500">›</span> {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4 items-center md:items-start border-b md:border-b-0 md:border-r border-white/80 pb-6 md:pb-0 md:px-8">
          <div className="w-fit">
            <h3 className="font-bold text-lg">Coordonnées</h3>
            <div className="h-0.5 w-full bg-yellow-500 mt-1 mb-3" />
          </div>
          <div className="flex items-start gap-3 text-sm text-gray-300">
            <MapPin size={18} className="shrink-0 mt-0.5 text-white" />
            <a
              href="https://maps.app.goo.gl/eHQrurjN4oFck7MF6"
              target="_blank"
              className="hover:text-white transition"
            >
              25 rue Jaboulay
              <br />
              69007 Lyon, France
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <Mail size={18} className="shrink-0 text-white" />
            <a
              href="mailto:aesmalyon@gmail.com"
              target="_blank"
              className="hover:text-white transition"
            >
              {" "}
              aesmalyon@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start md:pl-8">
          <div className="w-fit">
            <h3 className="font-bold text-lg">Mentions légales</h3>
            <div className="h-0.5 w-full bg-yellow-500 mt-1 mb-3" />
          </div>
          <Link
            to="/Mentions-legales"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Mentions légales
          </Link>
          <Link
            to="/policies"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>

      <div className="relative ">
        <div className="absolute inset-0 flex">
          <div className="flex-1 bg-green-700" />
          <div className="flex-1 bg-yellow-600" />
          <div className="flex-1 bg-red-700" />
        </div>
        <p className="relative flex items-center justify-center text-xs text-white font-medium text-center px-4 py-2 min-h-8">
          © 2025 AESMALY – Association des Étudiants et Jeunes Maliens de Lyon •
          Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
