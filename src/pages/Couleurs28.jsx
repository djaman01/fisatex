import {
  bleu28,
  divers28,
  marron28,
  violet28,
  rose28,
  vert28,
} from "../assets/images/index-28";

import ColorComp from "../components/ColorComp";

const couleurs28 = () => {
  return (
    <>
      <ColorComp
        color1={bleu28}
        alt1={bleu28}
        color2={divers28}
        alt2={divers28}
        color3={marron28}
        alt3={marron28}
        color4={violet28}
        alt4={violet28}
        color5={rose28}
        alt5={rose28}
        color6={vert28}
        alt6={vert28}
        
        bgColor='bg-[#A67C52]'
        hoverBgColor='hover:bg-[#8A5E3B]'

        link="/gants"
      />
    </>
  );
};

export default couleurs28;
