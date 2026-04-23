import Banner from "../Components/sections/Accueil/banner";
import OurValue from "../Components/sections/Accueil/OurValue";
import Mission from "../Components/sections/Accueil/Mission";

const Accueil = () => {
  return (
    <main>
      <div className="mx-[2%]">
        <Banner />
      </div>
      <OurValue />
      <Mission />
    </main>
  );
};

export default Accueil;
