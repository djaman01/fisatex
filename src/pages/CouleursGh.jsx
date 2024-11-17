import {
  bleuGH,
  diversGH,
  grisGH,
  marronGH,
  noirBlanc,
  roseGH,
  vertGH,
} from "../assets/images/indexGH";

import ColorComp from "../components/ColorComp";

import { Helmet } from "react-helmet-async";

const CouleursGh = () => {
  return (
    <>
      <Helmet>
        {/* Titre pour l'onglet */}
        <title>Couleurs gant Gamme Hôtel | Fisatex</title>

        {/* Pour exclure cette page du SEO, car inutile et pour qu'il se focalise sur d'autres pages plus importantes*/}
        {/*noindex: le contenu de cette page, y compris son titre, ne sera pas visible dans les résultats de recherche */}
        {/* follow : permet aux moteurs de recherche de suivre les liens présents sur cette page (ici: le lien de retour vers la page "Gants") / Cela va avoir un impact positif sur le référencement et donc le positionnement de la page gant dans les moteurs de recherches, même si la page kit et frotte n'est pas indexée. */}
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <ColorComp
        color1={diversGH}
        alt1="Divers couleurs 1"
        color2={bleuGH}
        alt2="Divers couleurs 2"
        color3={roseGH}
        alt3="Divers couleurs 3"
        color4={marronGH}
        alt4="Divers Marron"
        color5={vertGH}
        alt5="Divers couleurs 4"
        color6={grisGH}
        alt6="Divers couleurs 5"
        color7={noirBlanc}
        alt7="Blanc et Noir"
        bgColor="bg-[#1D77C3]"
        hoverBgColor="hover:bg-[#00539C]"
        link="/gants"
      />
    </>
  );
};

export default CouleursGh;
