//Je fais une nouvelle page couleurs Miami pour kit et frotte pour que le bouton retour emm_ne vers la page kit et frotte et non la page gant

import {
  bleu1,
  bleu2,
  divers1,
  marron1,
  orange1,
  pourpre1,
  rose1,
  vert1,
} from "../assets/images/index-couleurs";

import ColorComp from "../components/ColorComp";

const CouleursMiamiKit = () => {
  return (
    <>
      <ColorComp
        color1={bleu1}
        alt1={bleu1}
        color2={bleu2}
        alt2={bleu2}
        color3={divers1}
        alt3={divers1}
        color4={marron1}
        alt4={marron1}
        color5={orange1}
        alt5={orange1}
        color6={pourpre1}
        alt6={pourpre1}
        color7={rose1}
        alt7={rose1}
        color8={vert1}
        alt8={vert1}

        bgColor="bg-green-500"
        hoverBgColor="hover:bg-green-600"

        link="/KitEtFrotte"
      />
    </>
  );
};

export default CouleursMiamiKit;
