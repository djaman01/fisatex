import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllSite from "./AllSite";
import Gants from "./pages/Gants";
import ContactUs from "./pages/ContactUs";
import KitVisage from "./pages/KitVisage";
import FrotteDos from "./pages/FrotteDos";
import Sandales from "./pages/Sandales";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AllSite />} />
        <Route path="gants" element={<Gants />} />
        <Route path="kitVisage" element={<KitVisage />} />
        <Route path="frotteDos" element={<FrotteDos />} />
        <Route path="sandales" element={<Sandales />} />
        <Route path="contactUs" element={<ContactUs />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
