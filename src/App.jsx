import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllSite from "./AllSite";
import Gants from "./pages/Gants";
import ContactUs from "./pages/ContactUs";
import Sandales from "./pages/Sandales";
import KitEtFrotte from "./pages/KitEtFrotte";
import AboutUs from "./pages/AboutUs";
import CouleursMiami from "./pages/CouleursMiami";
import Couleurs28 from "./pages/Couleurs28";
import CouleursGh from "./pages/CouleursGh";
import CouleursMiamiKit from "./pages/CouleursMiamiKit";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AllSite />} />
        <Route path="gants" element={<Gants />} />
        <Route path="KitEtFrotte" element={<KitEtFrotte />} />
        <Route path="sandales" element={<Sandales />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="couleursMiami" element={<CouleursMiami />} />
        <Route path="couleurs28" element={<Couleurs28 />} />
        <Route path="couleursGH" element={<CouleursGh />} />
        <Route path="couleursKit" element={<CouleursMiamiKit />} />
    
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
