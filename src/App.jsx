import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllSite from "./AllSite";
import Gants from "./pages/Gants";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllSite />} />
        <Route path="gants" element={<Gants />} />
        <Route path="contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
