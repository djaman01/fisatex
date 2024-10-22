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

const CouleursGh = () => {
  return (
    <>
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

        bgColor='bg-[#1D77C3]'
        hoverBgColor='hover:bg-[#00539C]'

         link="/gants"
      />
    </>
  );
};

export default CouleursGh;
