import Navbar from "../Components/layouts/Navbar"
import Banner from "../Components/sections/banner"
import OurValue from "../Components/sections/OurValue";

const Acceuil = () => {
  return (
   
      
      <div>
        <div className="mx-[2%]">
        <Navbar />
        <Banner />
        </div>
        <OurValue />
      </div>
    
  );
}

export default Acceuil