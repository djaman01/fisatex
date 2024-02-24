import { Link } from "react-router-dom";
import {
  creme,
  femmeBain,
  gantsFond,
  massage,
  troisgants,
  gantRen,
  rituKit,
  sandalesJet,
} from "../assets/images";



const FirstPart = () => {
  return (
    <section className="mx-5 my-10 flex flex-col gap-5 lg:mx-16 lg:my-10 lg:grid lg:grid-cols-[1.7fr,1fr] lg:grid-rows-[250px,250px] lg:gap-5">
      
      <div className="max-lg:h-[428px] lg:row-span-2 ">
        <Link to='/gants'>
        <img
          src={gantRen}
          alt="femme bain"
          className=" h-full w-full cursor-pointer rounded-lg object-cover object-bottom"
        />
        </Link>
      </div>
      <div className="max-lg:h-[428px]">
        <img
          src={rituKit}
          alt="crème"
          className="h-full w-full cursor-pointer rounded-lg object-cover "
        />
      </div>
      <div className="max-lg:h-[428px]">
        <img
          src={sandalesJet}
          alt="massage"
          className="h-full w-full cursor-pointer rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default FirstPart;
