const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition all duration-300 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20 md:h-24">
            <a href="">
                <img
                  src="/Logo.png"
                  alt="Logo AESMALY"
                  className="h-14 sm:h-16 md:h-20 w-auto object-contain"
                />
            
                <div className="sm:flex flex-col leading-tight">
                  <span className="text-xl md:text-2xl font-semibold text-green-900 tracking-wide">
                    AESMALY
                  </span>
                  <span className="text-[10px] md:text-xs text-gray-700 max-w-35">Association des Étudiants et Jeunes Maliens de Lyon</span>
                </div>
            </a>
          </div>
          <div className="flex items-center space-x-4 text-gray-700 group-hover:text-gray-900 transition duration-300">
            <a href="/">Acceuil</a>
            <a href="/about">Qui sommes-nous ?</a>
            <a href="/Adhesion">Adhésion</a>
            <a href="/contact">Contact</a>
            <a href="/Adherer">Adhérer</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
