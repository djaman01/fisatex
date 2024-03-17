import Header from "../components/Header";
import Footer from "../components/Footer";
import { carte4, usine1, bureau1 } from "../assets/images";

const AboutUs = () => {
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
              Qui sommes-nous ?
            </h1>
            <p className="leading-7">
              Fondée au cœur du Maroc, Fisatex est une entreprise leader en
              Afrique dans la fabrication de gants de gommage pour le Hammam.
              Depuis notre création, nous nous sommes engagés à fournir des
              produits de qualité supérieure qui incarnent l'authenticité et la
              tradition du rituel du Hammam.
            </p>
            <p className="leading-7">
              Au sein de notre usine de production moderne, située au Maroc,
              nous combinons habilement l'artisanat traditionnel avec des
              techniques de fabrication de pointe. Notre équipe hautement
              qualifiée et dévouée s'efforce constamment d'assurer la qualité et
              la précision à chaque étape du processus de production,
              garantissant ainsi des produits de premier ordre à nos clients.
            </p>
          </div>

          <div className="border border-black">
            <h1 className="mb-5 text-center font-palanquin text-3xl">
              Qui sommes-nous ?
            </h1>
            <p className="leading-7">
              Fondée au cœur du Maroc, Fisatex est une entreprise leader en
              Afrique dans la fabrication de gants de gommage pour le Hammam.
              Depuis notre création, nous nous sommes engagés à fournir des
              produits de qualité supérieure qui incarnent l'authenticité et la
              tradition du rituel du Hammam.
            </p>
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
