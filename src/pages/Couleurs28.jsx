import {
  bleu28,
  divers28,
  marron28,
  violet28,
  rose28,
  vert28,
  blackWhite,
} from "../assets/images/index-28";

import ColorComp from "../components/ColorComp";

import { Helmet } from "react-helmet-async";

const couleurs28 = () => {
  return (
    <>
      <Helmet>
        {/* Titre pour l'onglet */}
        <title>Couleurs gant Kessel28 | Fisatex</title>

        {/* Pour exclure cette page du SEO, car inutile et pour qu'il se focalise sur d'autres pages plus importantes*/}
        {/*noindex: le contenu de cette page, y compris son titre, ne sera pas visible dans les résultats de recherche */}
        {/* follow : permet aux moteurs de recherche de suivre les liens présents sur cette page (ici: le lien de retour vers la page "Gants") / Cela va avoir un impact positif sur le référencement et donc le positionnement de la page gant dans les moteurs de recherches, même si la page kit et frotte n'est pas indexée. */}
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <ColorComp
        color1={marron28}
        alt1="Divers Marron"
        color2={bleu28}
        alt2="Divers Bleu"
        color3={rose28}
        alt3="Divers Rose"
        color4={vert28}
        alt4="Divers Vert 1"
        color5={violet28}
        alt5="Divers Violet"
        color6={divers28}
        alt6="Divers Vert 2"
        color7={blackWhite}
        alt7="Blanc et Noir"
        bgColor="bg-[#A67C52]"
        hoverBgColor="hover:bg-[#8A5E3B]"
        link="/gants"
      />
    </>
  );
};

export default couleurs28;
