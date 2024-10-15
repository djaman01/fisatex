import { Link } from "react-router-dom";
import { gants2Largeur } from "../assets/images";
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

      <main className="overflow-hidden">
        <div className="prose mx-auto w-max text-center max-lg:mt-5 max-lg:w-full">
          <h1 className="font-roboto text-4xl text-[#4A4A4A] max-lg:text-3xl">
            Nos Gants de Gommage Personnalisables
          </h1>
        </div>

        <div
          data-aos="zoom-in"
          className=" mx-auto mb-20 mt-10 h-[550px] w-[1150px] max-lg:mx-auto max-lg:h-[320px] max-lg:w-full "
        >
          <img
            src={gants2Largeur}
            alt="3 types de gants personnalisables"
            className="h-full w-full rounded-full"
          />
        </div>

        <div className=" mx-14 mb-20 grid h-96 grid-cols-3 gap-x-5 text-center max-lg:mx-auto max-lg:mb-[1000px] max-lg:flex max-lg:w-[375px] max-lg:flex-col max-lg:gap-5">
          <div
            data-aos="fade-right"
            className="prose rounded-3xl border-green-800 bg-[#E9F7EF] hover:border-2"
          >
            <div className="h-80 border border-transparent">
              <p className="mt-5 text-center text-3xl font-bold text-[#007F56]">
                Gant Miami Haut de Gamme
              </p>

              <p className="mt-[-15px] font-bold text-gray-700 max-lg:mx-auto max-lg:w-80">
                Notre gant de gommage pour les peaux sensibles
              </p>

              <ul className="mx-auto w-[415px] text-left font-semibold marker:text-black max-lg:w-[370px] ">
                <li>
                  Associe un gommage{" "}
                  <span className="underline">performant</span> tout en étant
                  respectueux des peaux fragiles et sujettes aux irritations.
                </li>
                <li className="font-mono">Composition: 100% Viscose</li>
                <li className="text-[#ff0921]">
                  Possibilité d'ajouter votre logo sur l'élastique
                </li>
              </ul>
            </div>

            <div className="">
              <Link to="/couleursMiami" onClick={scrollToTop}>
                <button className=" mt-2 h-[34px] w-80 rounded-full bg-green-500 bg-gradient-to-r font-bold text-white transition duration-150 ease-in-out hover:bg-green-600">
                  Voir les Couleurs Disponibles
                </button>
              </Link>
            </div>
          </div>

          <div
            data-aos="fade-down"
            className="prose rounded-3xl border-orange-800 bg-[#F5F5DC] hover:border-2 hover:shadow-2xl"
          >
            <div className="h-80 border border-transparent">
              <p className="mt-5 text-center text-3xl font-bold text-[#b27538]">
                Gant 28
              </p>

              <p className="mt-[-15px] font-bold text-gray-700">
                Notre gant de gommage pour les peaux résistantes
              </p>

              <ul className="mx-auto  w-[415px] text-left font-semibold marker:text-black max-lg:w-[370px] ">
                <li>
                  Un gant dur pour un gommage{" "}
                  <span className="underline">profond</span>
                </li>
                <li className="font-mono">Composition: 100% Viscose</li>

                <li className="text-[#ff0921]">
                  Possibilité d'ajouter votre logo sur l'élastique
                </li>
              </ul>
            </div>

            <div className="">
              <Link to="/couleursMiami" onClick={scrollToTop}>
                <button className=" mt-2 h-[34px] w-80 rounded-full bg-[#A67C52] bg-gradient-to-r font-bold text-white transition duration-150 ease-in-out hover:bg-[#8A5E3B]">
                  Voir les Couleurs Disponibles
                </button>
              </Link>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="prose rounded-3xl border-blue-800 bg-[#f1f2f3] hover:border-2 hover:shadow-2xl "
          >
            <div className="h-80 border border-transparent">
              <p className="mt-5 text-center text-3xl font-bold text-[#446e98]">
                Gant Gamme Hôtel
              </p>

              <p className="mt-[-15px] font-bold text-gray-700 ">
                Notre gant de gommage doté d'une innovation textile avancée
              </p>

              <ul className="mx-auto  w-[415px] text-left font-semibold marker:text-black max-lg:w-[370px]">
                <li>
                  Convient à{" "}
                  <span className="underline">tout type de peaux</span> et offre
                  un gommage optimal
                </li>
                <li className="font-mono">
                  Composition: 70% Viscose / 30% Acétate
                </li>

                <li className="text-[#ff0921]">
                  Possibilité d'ajouter votre logo sur l'élastique
                </li>
              </ul>
            </div>

            <div className="">
              <Link to="/couleursMiami" onClick={scrollToTop}>
                <button className=" mt-2 h-[34px] w-80 rounded-full bg-[#1D77C3] bg-gradient-to-r font-bold text-white transition duration-150 ease-in-out hover:bg-[#00539C]">
                  Voir les Couleurs Disponibles
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-20 mt-[-30px] w-max max-lg:mt-[-350px]">
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
