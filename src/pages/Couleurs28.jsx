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

const couleurs28 = () => {
  return (
    <>
      <ColorComp
        color1={marron28}
        alt1='Divers Marron'
        color2={bleu28}
        alt2='Divers Bleu'
        color3={rose28}
        alt3='Divers Rose'
        color4={vert28}
        alt4='Divers Vert 1'
        color5={violet28}
        alt5='Divers Violet'
        color6={divers28}
        alt6='Divers Vert 2'
        color7={blackWhite}
        alt7='Blanc et Noir'
        
        bgColor='bg-[#A67C52]'
        hoverBgColor='hover:bg-[#8A5E3B]'

        link="/gants"
      />
    </>
  );
};

export default couleurs28;
