import Header from "../components/Header";
import Footer from "../components/Footer";
import { carte4, gantsFond2, deal } from "../assets/images";
import MyButton from "../components/MyButton";
import { Link } from "react-router-dom";
import { arrowRight } from "../assets/icons";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Helmet } from "react-helmet-async";

const AboutUs = () => {
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
      <Helmet>
        {/* Titre de la page pour les onglets et le SEO:  entre 50 et 60 caractères  */}
        {/* Les moteurs de recherches utilise cetet balise pour l'indexation */}
        <title>À propos | Fisatex</title>

        {/*Résumé qui va apparaitre dans les moteurs de recherche: 150 à 160 caractères*/}
        <meta
          name="description"
          content="Basée à Casablanca, au Maroc, Fisatex est spécialisée dans la fabrication de gants de gommage pour le Hammam et exporte à l'international"
        />
        {/* Lors du partage de lien sur les réseaux sociaux: facebook, linkedin...etc. permet d'avoir un meilleur présentation visuelle du lien */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fisatex.com/about" />

        {/*Titre de la page lorsqu'elle est partagée sur les réseaux sociaux */}
        <meta
          property="og:title"
          content="À propos | Fisatex "
        />

        {/*Texte qui va s'afficher en-dessous du titre*/}
        <meta
          property="og:description"
          content="Basée à Casablanca, au Maroc, Fisatex est spécialisée dans la fabrication de gants de gommage pour le Hammam et exporte à l'international"
        />

        {/* Image lors du partage sur les réseaux sociaux: mettre l'url absolue de l'image sur le site*/}
        <meta
          property="og:image"
          content="https://www.fisatex.com/assets/gants-fond2-K51BcB7N.jpg"
        />
      </Helmet>

      <Header />

      <main className="padding-b mt-1 overflow-hidden">
        <div className="my-10 grid grid-cols-2 grid-rows-[400px,400px,400px] max-lg:mx-5 max-lg:flex max-lg:flex-col max-lg:gap-y-5 lg:mx-16 lg:gap-x-14 lg:gap-y-20 ">
          <div
            data-aos="fade-right"
            className="max-lg:order-1 max-lg:rounded-lg max-lg:border max-lg:border-slate-400 max-lg:px-5 max-lg:py-2 max-lg:shadow-xl "
          >
            <h1 className="mb-4 text-center font-montserrat text-3xl font-bold text-blue-600">
              Qui sommes-nous ?
            </h1>
            <p className="font-roboto text-lg leading-7">
              Basée à Casablanca, au Maroc, Fisatex est une entreprise leader dans la
              fabrication de gants de gommage Marocain de haute qualité,
              incarnant l'authenticité et la tradition du rituel du Hammam.
            </p>
            <br />
            <p className="font-roboto text-lg leading-7">
              Au sein de notre usine de production à la pointe de la
              technologie, notre équipe qualifiée assure une qualité et une
              précision constantes à chaque étape de production, garantissant
              ainsi des produits de premier ordre à nos clients.
            </p>
          </div>

          <div data-aos="fade-left" className="max-lg:order-2">
            <img
              className="h-full w-full rounded-xl"
              src={gantsFond2}
              alt="Gants de gommage pour Hammam"
            />
          </div>

          <div data-aos="fade-right" className="max-lg:order-4">
            <img
              className="h-full w-full rounded-xl"
              src={deal}
              alt="Faire Affaire avec nous"
            />
          </div>

          <div
            data-aos="fade-left"
            className="max-lg:order-3 max-lg:rounded-lg max-lg:border max-lg:border-slate-400 max-lg:px-5 max-lg:py-2 max-lg:pb-5 max-lg:shadow-xl"
          >
            <h1 className="mb-5 text-center font-montserrat text-3xl font-bold text-blue-600">
              Notre Bureau
            </h1>
            <p className="font-roboto text-lg leading-7">
              Nous sommes heureux d'accueillir nos clients sur rendez-vous dans
              notre bureau situé à Casablanca, au Maroc
            </p>
            <br />
            <p className=" font-roboto text-lg leading-7">
              Notre équipe professionnelle est disponible pour répondre à toutes
              vos questions, discuter de vos besoins spécifiques en matière de
              gants de gommage pour le Hammam et vous fournir des conseils
              personnalisés.
            </p>
            <div className=" mx-auto mt-9 w-max">
              <Link
                to="/contactUs"
                className="no-underline"
                onClick={scrollToTop}
              >
                <MyButton label="Contactez-nous" iconURL={arrowRight} />
              </Link>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="max-lg:order-5 max-lg:rounded-lg max-lg:border max-lg:border-slate-400 max-lg:px-5 max-lg:py-2 max-lg:pb-5 max-lg:shadow-xl"
          >
            <h1 className="mb-5 text-center font-montserrat text-3xl font-bold text-blue-600">
              International
            </h1>
            <p className="font-roboto text-lg leading-7">
              Nous collaborons avec une clientèle à l'internationale:
            </p>
            <br />
            <p className=" font-roboto text-lg leading-7">
              Nous expédions nos produits dans de nombreux pays, offrant ainsi à
              nos clients internationaux un accès facile à nos produits.
            </p>

            <div className=" mx-auto mt-9 w-max">
              <Link
                to="/contactUs"
                className="no-underline"
                onClick={scrollToTop}
              >
                <MyButton label="Contactez-nous" iconURL={arrowRight} />
              </Link>
            </div>
          </div>

          <div data-aos="fade-left" className="max-lg:order-6">
            <img
              className="h-full w-full rounded-xl"
              src={carte4}
              alt="carte du monde"
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

export default AboutUs;
