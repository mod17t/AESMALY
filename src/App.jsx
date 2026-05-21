import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/layouts/Navbar";
import Accueil from "./Pages/Accueil";
import About from "./Pages/About";
import Activities from "./Pages/Activities";
import Adhesion from "./Pages/Adhesion";
import Contact from "./Pages/Contact";
import Footer from "./Components/layouts/Footer";
import Policies from "./Pages/Policies";
import Mentions from "./Pages/Mentions";
import ScrollToTop from "./Components/layouts/ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/adhesion" element={<Adhesion />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/Mentions-legales" element={<Mentions />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
