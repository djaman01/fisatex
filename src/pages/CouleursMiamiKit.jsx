//Je fais une nouvelle page couleurs Miami pour kit et frotte pour que le bouton retour emm_ne vers la page kit et frotte et non la page gant

import {
  bleu1,
  bleu2,
  noirBlanc,
  marron1,
  orange1,
  pourpre1,
  rose1,
  vert1,
} from "../assets/images/index-couleurs";

import ColorComp from "../components/ColorComp";

import { Helmet } from "react-helmet-async";

const CouleursMiamiKit = () => {
  return (
    <>
      <Helmet>
        {/* Titre pour l'onglet */}
        <title>Couleurs kit-visage et frotte-dos | Fisatex</title>

        {/* Pour exclure cette page du SEO, car inutile et pour qu'il se focalise sur d'autres pages plus importantes*/}
        {/*noindex: le contenu de cette page, y compris son titre, ne sera pas visible dans les résultats de recherche */}
        {/* follow : permet aux moteurs de recherche de suivre les liens présents sur cette page (ici: le lien de retour vers la page "Gants") / Cela va avoir un impact positif sur le référencement et donc le positionnement de la page gant dans les moteurs de recherches, même si la page kit et frotte n'est pas indexée. */}
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <ColorComp
        color1={vert1}
        alt1="Divers vert"
        color2={orange1}
        alt2="Divers orange"
        color3={bleu1}
        alt3="Divers Bleu 1"
        color4={marron1}
        alt4="Divers Marron"
        color5={bleu2}
        alt5="Divers Bleu 2"
        color6={rose1}
        alt6="Divers Rouge"
        color7={pourpre1}
        alt7="Divers Rose"
        color8={noirBlanc}
        alt8="Blanc et Noir"
        bgColor="bg-green-500"
        hoverBgColor="hover:bg-green-600"
        link="/KitEtFrotte"
      />
    </>
  );
};

export default CouleursMiamiKit;
