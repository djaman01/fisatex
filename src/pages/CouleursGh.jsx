import {
  bleuGH,
  diversGH,
  grisGH,
  marronGH,
  roseGH,
  vertGH,
} from "../assets/images/indexGH";

import ColorComp from "../components/ColorComp";

const CouleursGh = () => {
  return (
    <>
      <ColorComp
        color1={bleuGH}
        alt1={bleuGH}
        color2={diversGH}
        alt2={diversGH}
        color3={grisGH}
        alt3={grisGH}
        color4={marronGH}
        alt4={marronGH}
        color5={roseGH}
        alt5={roseGH}
        color6={vertGH}
        alt6={vertGH}

        bgColor='bg-[#1D77C3]'
        hoverBgColor='hover:bg-[#00539C]'

         link="/gants"
      />
    </>
  );
};

export default CouleursGh;
