import { Link } from "react-router-dom";
import {
  frotteDos,
  frotteDosOpen,
  kitGommage,
  kitSavonnage,
} from "../assets/images";

import Footer from "../components/Footer";
import Header from "../components/Header";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Helmet } from "react-helmet-async";

const KitEtFrotte = () => {
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
    <div>
      <Helmet>
        {/* Titre de la page pour l'onglet et le SEO: entre 50 et 60 caractères */}
        <title>Kit-Visage et Frotte-Dos | Fisatex</title>

        {/* Description pour le moteur de recherche: 150 à 160 caractères */}
        <meta
          name="description"
          content="Découvrez nos Kit-visage et Frotte-dos, faits avec le tissus pour peaux sensibles"
        />

        {/* Open Graph pour les réseaux sociaux */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fisatex.com/KitEtFrotte" />

        {/* Titre de la page lorsqu'elle est partagée sur les réseaux sociaux */}
        <meta
          property="og:title"
          content="Kit-visage et Frotte-dos | Fisatex"
        />

        {/* Description qui apparaît en-dessous du titre sur les réseaux sociaux */}
        <meta
          property="og:description"
          content="Découvrez nos Kit-visage et Frotte-dos, faits avec le tissus pour peaux sensibles"
        />

        {/* Image partagée sur les réseaux sociaux */}
        <meta
          property="og:image"
          content="https://www.fisatex.com/assets/kit-gommage-C4Cnna8Z.jpg"
        />
      </Helmet>

      <header>
        <Header />
      </header>

      <main className="padding-b overflow-hidden">
        <div className="my-5 rounded-3xl bg-[#f0f0f0] p-7 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-y-5 lg:mx-40 lg:grid lg:grid-cols-2 lg:gap-y-5">
          <div>
            <img
              src={kitGommage}
              alt="kit-visage-face"
              className="h-[300px] w-[600px] rounded-3xl shadow-2xl"
              data-aos="fade-down"
            />
          </div>

          <div
            data-aos="fade-left"
            className=" prose row-span-2 shadow-2xl max-lg:order-last max-lg:rounded-3xl max-lg:border max-lg:border-slate-400 max-lg:py-5 sm:w-[600px] lg:ml-9 lg:w-auto lg:rounded-r-full lg:border lg:border-slate-300 "
          >
            <h2 className=" text-blue-600 max-lg:text-center lg:pl-20 lg:pt-5">
              Kit Visage
            </h2>
            <div className=" pt-12 font-bold max-lg:pl-5 max-lg:pt-0 lg:pl-5 ">
              <li> Notre gant de gommage spécial Visage</li>
              <li className="lg:w-[500px]">
                Fait avec le tissus du gant de gommage pour{" "}
                <span className="text-blue-600">peaux sensible </span> afin de
                respecter la peau du visage
              </li>

              <li>
                Dispose aussi d'une{" "}
                <span className="text-blue-600"> face pour le Savonnage</span>:
                Tourner l'élastique pour l'utiliser
              </li>

              <li className="font-mono">Composition: 100% Viscose</li>
              <li style={{ color: "#ff0921" }}>
                Possibilité d'ajouter votre logo sur l'élastique
              </li>
            </div>

            <div className="mt-10 w-max max-lg:mx-auto max-lg:mt-5 lg:ml-16">
              <Link to="/couleursKit" onClick={scrollToTop}>
                <button className="mt-2 h-[34px] rounded-full bg-green-500 bg-gradient-to-r font-bold text-white transition duration-150 ease-in-out hover:bg-green-600 max-lg:w-60 lg:w-80">
                  Voir les Couleurs Disponibles
                </button>
              </Link>
            </div>
          </div>

          <div>
            <img
              src={kitSavonnage}
              alt="kit-visage-dos"
              className="h-[300px] w-[600px] rounded-3xl shadow-2xl"
              data-aos="fade-up"
            />
          </div>
        </div>

        <div className="my-10 rounded-3xl bg-[#f0f0f0] p-7 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-y-5 lg:mx-40 lg:grid lg:grid-cols-2 lg:gap-y-5">
          <div>
            <img
              src={frotteDos}
              alt="frotte-dos"
              className="h-[300px] w-[600px] rounded-3xl shadow-2xl"
              data-aos="fade-down"
            />
          </div>

          <div
            data-aos="fade-left"
            className=" prose row-span-2 shadow-2xl max-lg:order-last max-lg:rounded-3xl max-lg:border max-lg:border-slate-400 max-lg:py-5 sm:w-[600px] lg:ml-9 lg:w-auto lg:rounded-r-full lg:border lg:border-slate-300 "
          >
            <h2 className=" text-blue-600 max-lg:text-center lg:pl-20 lg:pt-5">
              Frotte-Dos
            </h2>
            <div className=" pt-12 font-bold max-lg:pl-5 max-lg:pt-0 lg:pl-5 ">
              <li> Pour un gommage facile et efficace du Dos</li>
              <li>
                Fait avec le tissus du gant de gommage pour{" "}
                <span className="text-blue-600">peaux sensible </span>
              </li>

              <li>
                Dispose aussi d'une{" "}
                <span className="text-blue-600"> face pour le Savonnage</span>
              </li>

              <li className="font-mono">Composition: 100% Viscose</li>
              <li style={{ color: "#ff0921" }}>
                Possibilité d'ajouter votre logo sur l'élastique
              </li>
            </div>

            <div className="mt-10 w-max max-lg:mx-auto max-lg:mt-5 lg:ml-16">
              <Link to="/couleursKit" onClick={scrollToTop}>
                <button className="mt-2 h-[34px] rounded-full bg-green-500 bg-gradient-to-r font-bold text-white transition duration-150 ease-in-out hover:bg-green-600 max-lg:w-60 lg:w-80">
                  Voir les Couleurs Disponibles
                </button>
              </Link>
            </div>
          </div>

          <div>
            <img
              src={frotteDosOpen}
              alt="frotte-dos-ouvert"
              className="h-[300px] w-[600px] rounded-3xl shadow-2xl "
              data-aos="fade-up"
            />
          </div>
        </div>
      </main>

      <footer className="padding-x bg-gray-800 pb-8 pt-8">
        <Footer />
      </footer>
    </div>
  );
};

export default KitEtFrotte;
