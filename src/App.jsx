import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllSite from "./AllSite";
import Gants from "./pages/Gants";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllSite />} />
        <Route path="gants" element={<Gants />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
