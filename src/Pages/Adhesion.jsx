import AdhesionHero from "../Components/sections/Adhesion/AdhesionHero"
import WhyJoin from "../Components/sections/Adhesion/WhyJoin"
import HowToJoin from "../Components/sections/Adhesion/HowToJoin"

const Adhesion = () => {
  return (
    <main>
      <AdhesionHero />
      <div >
        <WhyJoin />
        <HowToJoin />
      </div>
    </main>
  );
}

export default Adhesion