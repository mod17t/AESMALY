import Navbar from "../Components/layouts/Navbar";
import Banner from "../Components/sections/banner";
import OurValue from "../Components/sections/OurValue";
import Mission from "../Components/sections/Mission";
import Footer from "../Components/sections/Footer";

const Acceuil = () => {
  return ( 
     <div>
        <div className="mx-[2%]">
        <Navbar />
        <Banner />
        </div>
        <OurValue />
        <Mission />
        <Footer/>
      </div>
    
  );
}

export default Acceuil