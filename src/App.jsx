import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllSite from "./AllSite";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllSite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
