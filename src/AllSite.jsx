import Bienfaits from "./sections/Bienfaits";
import FirstPart from "./sections/FirstPart";
import Header from "./components/Header";
import VotreGant from "./sections/VotreGant";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet-async";

const AllSite = () => {
  return (
    <main>
      <Helmet>
        {/* Titre de la page pour les onglets et le SEO:  entre 50 et 60 caractères  */}
        {/* Les moteurs de recherches utilise cetet balise pour l'indexation */}
        <title>Fisatex | Fabricant de gants de gommage pour Hammam</title>

        {/*Résumé qui va apparaitre dans les moteurs de recherche: 150 à 160 caractères*/}
        <meta
          name="description"
          content="Fisatex est le leader de la fabrication de gants de gommage Marocains pour Hammam et offre des modèles pour le Visage et le Corps"
        />

        {/* Open Graph pour les réseaux sociaux */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fisatex.com/" />

        {/*Titre de la page lorsqu'elle est partagée sur les réseaux sociaux: mettre le même titre que l'onglet */}
        <meta
          property="og:title"
          content="Fisatex | Fabricant de gants de gommage pour Hammam"
        />

        {/*Texte qui va s'afficher en-dessous du titre: mettre la même description que celle du moteur de recherche*/}
        <meta
          property="og:description"
          content="Fisatex est le leader de la fabrication de gants de gommage Marocains pour Hammam et offre des modèles pour le Visage et le Corps"
        />
        
        {/* Image lors du partage sur les réseaux sociaux: mettre l'url absolue de l'image sur le site */}
        <meta
          property="og:image"
          content="https://www.fisatex.com/assets/gants-kits-cadr%C3%A9s-CXujVyO_.jpg"
        />
      </Helmet>

      <header>
        <Header />
      </header>

      <section>
        <FirstPart />
      </section>
      <section className="padding-b">
        <Bienfaits />
      </section>
      <section className="padding-b">
        <VotreGant />
      </section>

      <footer className="padding-x bg-gray-800 pb-8 pt-8">
        <Footer />
      </footer>
    </main>
  );
};

export default AllSite;
