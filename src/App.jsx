import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllSite from "./AllSite";
import Gants from "./pages/Gants";
import ContactUs from "./pages/ContactUs";
import Sandales from "./pages/Sandales";
import KitEtFrotte from "./pages/KitEtFrotte";
import AboutUs from "./pages/AboutUs";


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
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
