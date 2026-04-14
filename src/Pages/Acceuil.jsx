import Navbar from "../Components/layouts/Navbar";
import Banner from "../Components/sections/banner";
import OurValue from "../Components/sections/OurValue";
import Mission from "../Components/sections/Mission";

const Acceuil = () => {
  return ( 
     <div>
        <div className="mx-[2%]">
        <Navbar />
        <Banner />
        </div>
        <OurValue />
        <Mission />
      </div>
    
  );
}

export default Acceuil