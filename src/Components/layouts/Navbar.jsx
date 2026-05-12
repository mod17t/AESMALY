import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Nos activités", href: "/activities" },
    { label: "Adhésion", href: "/adhesion" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="top-0 w-full z-50 transition all duration-300 ">
      <div className="max-w-8xl  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center space-x-3  shrink-0">
            <img
              src="/Logo.png"
              alt="Logo AESMALY"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain"
            />

            <div className="flex flex-col leading-tight mt-4">
              <span className="text-xl md:text-2xl font-semibold text-green-800 tracking-wide">
                AESMALY
              </span>
              <span className="text-[10px] md:text-xs text-gray-700 max-w-35">
                Association des Étudiants et Jeunes Maliens de Lyon
              </span>
            </div>
          </a>
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm md:text-base font-semibold text-gray-700 hover:text-green-800 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0  after:h-0.5 after:bg-green-800 after:transition-all after:duration-300 hover:after:w-full ${isActive && "text-green-800 transition duration-500"}`
                }
              >
                {({isActive}) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full flex">
                        <span className="flex-1 h-0.5 bg-green-700"></span>
                        <span className="flex-1 h-0.5 bg-yellow-400"></span>
                        <span className="flex-1 h-0.5 bg-red-600"></span>
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Link
             to={"/adhesion"}
             className="px-6 py-2 text-white bg-green-800 rounded-full font-medium hover:bg-green-900 transition-colors cursor-pointer">
              Adhérer
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden mt-4 cursor-pointer"
          >
            {isOpen ? (
              <img src="/close.png" alt="Close" className="w-6 h-6 " />
            ) : (
              <img src="/menu.png" alt="Menu" className="w-6 h-6 " />
            )}
          </button>

          {isOpen && (
            <div className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2"
              >
                <img src="/close.png" alt="Fermer" className="w-6 h-6" />
              </button>

              {links.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={({ isActive }) =>
                    `text-sm md:text-base font-semibold text-gray-700 hover:text-green-800 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0  after:h-0.5 after:bg-green-800 after:transition-all after:duration-300 hover:after:w-full ${isActive && "text-green-800 transition duration-500"}`
                  }
                >
                  {({isActive}) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full flex">
                          <span className="flex-1 h-0.5 bg-green-700"></span>
                          <span className="flex-1 h-0.5 bg-yellow-400"></span>
                          <span className="flex-1 h-0.5 bg-red-600"></span>
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              <button className="px-10 py-3 text-white bg-green-800 rounded-full font-medium hover:bg-green-900 transition-colors">
                Adhérer
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
