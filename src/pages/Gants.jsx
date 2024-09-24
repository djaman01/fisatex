import { gants2cadrés, gants2Largeur, gantsCadré, gantsLargeur } from "../assets/images";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gants = () => {

  useEffect(() => {
    Aos.init({
      once: true,
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      // delay: 100,
    });
  });

  return (
    <>

      <header>
        <Header />
      </header>

      <main>

        <div className="prose mx-auto text-center">
          <h1 className="text[40xl]">Nos Gants Personnalisables</h1>
        </div>
        {/* Faire animation AOS flip */}
        <div data-aos="zoom-in" className=" mx-32 mb-20 mt-10 h-[600px] ">
          <img
            src={gants2Largeur}
            alt="3 types de gants personnalisables"
            className="h-full w-full rounded-full"
          />
        </div>

        <div className=" mb-20 grid h-96 grid-cols-3 text-center gap-x-5 mx-16 ">
          <div data-aos="fade-right" className="border border-red-500 prose prose-lg">
            <h2>Gant Miami</h2>
          </div>

          <div data-aos="fade-down" className="border border-green-500 prose prose-lg">
            <h2>Gant 28</h2>
          </div>

          <div data-aos="fade-left" className="border border-yellow-500 prose prose-lg">
            <h2>Gant Gamme Hôtel </h2>
          </div>
        </div>

      </main>

      <footer className="padding-x bg-gray-800 pb-8 pt-8">
        <Footer />
      </footer>
      
    </>
  );
};

export default Gants;
