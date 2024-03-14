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
  newSandales,
  frotteKit45,
} from "../assets/images";

const FirstPart = () => {
  return (
    <section className="mx-5 my-10 flex flex-col gap-5 lg:mx-16 lg:my-5 lg:grid lg:grid-cols-[1.7fr,1fr] lg:grid-rows-[300px,200px] lg:gap-3">
      <div className="lg:row-span-2 ">
        <Link to="/gants">
          <img
            src={gantRen}
            alt="Gants gommage"
            className=" h-full w-full cursor-pointer rounded-lg object-cover object-bottom"
          />
        </Link>
      </div>

      <div className="">
        <Link to="/KitEtFrotte">
          <img
            src={rituKit}
            alt="Kit Visage et Frotte-dos"
            className="h-full w-full cursor-pointer rounded-lg object-cover "
          />
        </Link>
      </div>

      <div className="">
        <img
          src={newSandales}
          alt="sandales Hammam"
          className="max-md:h-[200px] md:h-[500px] lg:h-full w-full cursor-pointer rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default FirstPart;
