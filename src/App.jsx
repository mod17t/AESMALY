import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/layouts/Navbar";
import Accueil from "./Pages/Accueil";
import About from "./Pages/About";
import Activities from "./Pages/Activities";
import Adhesion from "./Pages/Adehsion";
import Contact from "./Pages/Contact";
import Footer from "./Components/sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/adhesion" element={<Adhesion />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
