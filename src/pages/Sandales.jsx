import { newSandales, sandalesJet } from "../assets/images";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Helmet } from "react-helmet-async";

const Sandales = () => {
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
      <Helmet>
        {/* Titre de la page pour l'onglet et le SEO: entre 50 et 60 caractères */}
        <title>Sandales Hammam | Fisatex</title>

        {/* Description pour le moteur de recherche: 150 à 160 caractères */}
        <meta
          name="description"
          content="Découvrez nos sandales jetables pour Hammam, idéales pour une utilisation hygiénique et pratique"
        />

        {/* Open Graph pour les réseaux sociaux */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fisatex.com/sandales" />

        {/* Titre de la page lorsqu'elle est partagée sur les réseaux sociaux */}
        <meta property="og:title" content="Sandales Hammam | Fisatex" />

        {/* Description qui apparaît en-dessous du titre sur les réseaux sociaux */}
        <meta
          property="og:description"
          content="Découvrez nos sandales jetables pour Hammam, idéales pour une utilisation hygiénique et pratique"
        />

        {/* Image partagée sur les réseaux sociaux */}
        <meta
          property="og:image"
          content="https://www.fisatex.com/assets/new-sandales-BZ-iEbma.jpg"
        />
      </Helmet>

      <header>
        <Header />
      </header>

      <main className="padding-b overflow-hidden">
        <div className="my-5 rounded-3xl bg-[#f0f0f0] p-7 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-y-5 lg:mx-40 lg:grid lg:grid-cols-2 lg:gap-y-5">
          <div>
            <img
              src={sandalesJet}
              alt="sandales Hammam"
              className="h-[300px] w-[600px] rounded-3xl shadow-2xl"
              data-aos="fade-down"
            />
          </div>

          <div
            data-aos="fade-left"
            className="prose row-span-2 shadow-2xl max-lg:order-last max-lg:rounded-3xl max-lg:border max-lg:border-slate-400 max-lg:py-5 sm:w-[600px] lg:ml-9 lg:w-auto lg:rounded-r-full lg:border lg:border-slate-300 "
          >
            <h2 className=" text-coral-red max-lg:text-center lg:pl-10 lg:pt-5">
              Sandales Hammam
            </h2>
            <div className=" pt-12 font-bold max-lg:pl-5 max-lg:pt-0 lg:pl-5 ">
              <li>
                {" "}
                Nos sandales <span className="text-blue-600"> étanches</span>,
                spécialement conçues
                <br className="max-lg:hidden" /> pour une utilisation dans les
                hammams{" "}
              </li>
            </div>
          </div>

          <div>
            <img
              src={newSandales}
              alt="sandales hammam"
              className="h-[300px] w-[600px] rounded-3xl shadow-2xl"
              data-aos="fade-up"
            />
          </div>
        </div>
      </main>

      <footer className="padding-x bg-gray-800 pb-8 pt-8">
        <Footer />
      </footer>
    </>
  );
};

export default Sandales;
