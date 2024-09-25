import { Link } from "react-router-dom";
import {
  gants2cadrés,
  gants2Largeur,
  gantsCadré,
  gantsLargeur,
} from "../assets/images";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import MyButton from "../components/MyButton";
import { arrowRight } from "../assets/icons";

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

  //To go instantly to the top of the page, when redirecting to it
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <div className="prose mx-auto text-center w-max">
          <h1 className="font-roboto text-4xl text-[#4A4A4A]">Nos Gants de Gommage Personnalisables</h1>
        </div>
        {/* Faire animation AOS flip */}
        <div data-aos="zoom-in" className=" mx-32 mb-20 mt-10 h-[600px] ">
          <img
            src={gants2Largeur}
            alt="3 types de gants personnalisables"
            className="h-full w-full rounded-full"
          />
        </div>

        <div className=" mx-14 mb-20 grid h-96 grid-cols-3 gap-x-5 text-center">
          <div
            data-aos="fade-right"
            className="prose rounded-3xl border-green-800 bg-[#E9F7EF] hover:border-2 hover:shadow-2xl"
          >
            <div>
              <p className="text-center text-3xl font-bold text-[#007F56]">
                Gant Miami
              </p>

              <p className="font-medium text-gray-700 ">
                Notre gant de gommage pour les peaux sensibles
              </p>

              <ul className="mx-auto  w-[415px] text-left font-bold marker:text-black ">
                <li>
                  Associe un gommage performant tout en étant respectueux des
                  peaux fragiles et sujettes aux irritations.
                </li>
                <li className="text-[#ff0921]">
                  Disponible dans une large variété de couleurs
                </li>
                <li className="text-[#ff0921]">
                  Possibilité d'ajouter votre logo sur l'élastique
                </li>
              </ul>
            </div>
          </div>

          <div
            data-aos="fade-down"
            className="prose rounded-3xl border-orange-800 bg-[#F5F5DC] hover:border-2 hover:shadow-2xl"
          >
            <div>
              <p className="text-center text-3xl font-bold text-[#b27538]">
                Gant 28
              </p>

              <p className="font-medium text-gray-700 ">
                Notre gant de gommage pour les peaux résistantes
              </p>

              <ul className="mx-auto  w-[415px] text-left font-bold marker:text-black ">
                <li>Le gant de gommage originel, pour un gommage profond</li>
                <li className="text-[#ff0921]">
                  Disponible dans une large variété de couleurs
                </li>
                <li className="text-[#ff0921]">
                  Possibilité d'ajouter votre logo sur l'élastique
                </li>
              </ul>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="prose rounded-3xl border-blue-800 bg-[#f1f2f3] hover:border-2 hover:shadow-2xl "
          >
            <div>
              <p className="text-center text-3xl font-bold text-[#446e98]">
                Gant Gamme Hôtel
              </p>

              <p className="font-medium text-gray-700 ">
                Notre gant de gommage avec une innovation textile avancée
              </p>

              <ul className="mx-auto  w-[415px] text-left font-bold marker:text-black ">
                <li>
                  Convient à tout type de peaux et offre un gommage optimal
                </li>
                <li className="text-[#ff0921]">
                  Disponible dans une large variété de couleurs
                </li>
                <li className="text-[#ff0921]">
                  Possibilité d'ajouter votre logo sur l'élastique
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-20 mt-[-30px] w-max">
          <Link to="/contactus" onClick={scrollToTop}>
            <MyButton label="Contactez-nous" iconURL={arrowRight} />
          </Link>
        </div>
      </main>

      <footer className="padding-x bg-gray-800 pb-8 pt-8">
        <Footer />
      </footer>
    </>
  );
};

export default Gants;
