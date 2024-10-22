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

const CouleursMiami = () => {
  return (
    <>
      <ColorComp
        color1={vert1}
        alt1='Divers vert'
        color2={orange1}
        alt2='Divers orange'
        color3={bleu1}
        alt3='Divers Bleu 1'
        color4={marron1}
        alt4='Divers Marron'
        color5={bleu2}
        alt5='Divers Bleu 2'
        color6={rose1}
        alt6='Divers Rouge'
        color7={pourpre1}
        alt7='Divers Rose'
        color8={noirBlanc}
        alt8='Blanc et Noir'

        bgColor='bg-green-500'
        hoverBgColor='hover:bg-green-600'

         link="/gants"
      />
    </>
  );
};

export default CouleursMiami;
