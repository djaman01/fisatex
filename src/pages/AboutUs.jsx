import Header from "../components/Header";
import Footer from "../components/Footer";
import { carte4, usine1, bureau1 } from "../assets/images";
import MyButton from "../components/MyButton";
import { Link } from "react-router-dom";
import { arrowRight } from "../assets/icons";

const AboutUs = () => {
  //To go instantly to the top of the page, when redirecting to it
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <>
      <Header />

      <main>
        <div className="mx-16 my-10 grid grid-cols-2 grid-rows-[400px,400px,400px] gap-x-10 gap-y-20 border border-black">
          <div className="border border-black">
            <h1 className="mb-4 text-center font-palanquin text-3xl">
              Qui sommes-nous ?
            </h1>
            <p className="leading-7">
              Fondée au cœur du Maroc, Fisatex est une entreprise leader en
              Afrique dans la fabrication de gants de gommage pour le Hammam.
              Depuis notre création, nous nous sommes engagés à fournir des
              produits de qualité supérieure qui incarnent l'authenticité et la
              tradition du rituel du Hammam.
            </p>
            <br />
            <p className="leading-7">
              Au sein de notre usine de production moderne, située au Maroc,
              nous combinons habilement l'artisanat traditionnel avec des
              techniques de fabrication de pointe. Notre équipe hautement
              qualifiée et dévouée s'efforce constamment d'assurer la qualité et
              la précision à chaque étape du processus de production,
              garantissant ainsi des produits de premier ordre à nos clients.
            </p>
          </div>

          <div className="border border-red-500">
            <img className="h-full w-full" src={usine1} alt="usine" />
          </div>

          <div className="border border-red-500">
            <img className="h-full w-full" src={bureau1} alt="bureau" />
          </div>

          <div className="border border-black">
            <h1 className="mb-5 text-center font-palanquin text-3xl">
              Notre Bureau
            </h1>
            <p className="leading-7">
              Nous sommes heureux d'accueillir nos clients sur rendez-vous dans
              notre bureau situé à Casablanca, au Maroc
            </p>
            <br />
            <p className="leading-7">
              Notre équipe professionnelle est disponible pour répondre à toutes
              vos questions, discuter de vos besoins spécifiques en matière de
              gants de gommage pour le Hammam et vous fournir des conseils
              personnalisés. Pour prendre rendez-vous, veuillez nous contacter
              par téléphone ou par e-mail.
            </p>
            <div className=" w-max mx-auto mt-9">
              <Link
                to="/contactUs"
                className="no-underline"
                onClick={scrollToTop}
              >
                <MyButton label="Contactez-nous" iconURL={arrowRight} />
              </Link>
            </div>
          </div>

          <div className="border border-black">
            <h1 className="mb-5 text-center font-palanquin text-3xl">
              International
            </h1>
            <p className="leading-7">
              Fisatex est fière de servir une clientèle internationale. Nos
              gants de gommage pour le Hammam sont appréciés par des clients du
              monde entier, qui recherchent des produits de qualité pour
              enrichir leur expérience de bien-être.
            </p>
            <br />
            <p className="leading-7">
              Nous expédions nos produits dans de nombreux pays, offrant ainsi à
              nos clients internationaux un accès facile à nos produits de haute
              qualité.
            </p>

            <div className=" w-max mx-auto mt-9">
              <Link
                to="/contactUs"
                className="no-underline"
                onClick={scrollToTop}
              >
                <MyButton label="Contactez-nous" iconURL={arrowRight} />
              </Link>
            </div>
          </div>

          <div className="border border-red-500">
            <img className="h-full w-full" src={carte4} alt="carte" />
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
