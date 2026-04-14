
const Navbar = () => {
  const links = [
    { label: "Accueil", href: "#accueil" },
    { label: "Qui sommes-nous ?", href: "#about" },
    { label: "Nos activités", href: "#activites" },
    { label: "Adhésion", href: "#adhesion" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="top-0 w-full z-50 transition all duration-300 ">
      <div className="max-w-8xl  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="" className="flex items-center space-x-3  shrink-0">
            <img
              src="/Logo.png"
              alt="Logo AESMALY"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain"
            />

            <div className="sm:flex flex-col leading-tight mt-4">
              <span className="text-xl md:text-2xl font-semibold text-green-800 tracking-wide">
                AESMALY
              </span>
              <span className="text-[10px] md:text-xs text-gray-700 max-w-35">
                Association des Étudiants et Jeunes Maliens de Lyon
              </span>
            </div>
          </a>
          <div className="flex items-center space-x-8 text-gray-700 group font-semibold hover:text-gray-900 transition duration-300">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm md:text-base font-medium text-gray-700 hover:text-green-800 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0  after:h-0.5 after:bg-green-800 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <button className="px-6 py-2 text-white bg-green-800 rounded-full font-medium hover:bg-green-900 transition-colors cursor-pointer">
              Adhérer
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
