import { Link } from "react-router-dom";
import {
  newSandales,
  gantsCadré,
  kitsCadré,
  gants2cadrés
} from "../assets/images";



import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FirstPart = () => {

  useEffect(() => {
    Aos.init({
      once: true,
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      // delay: 100,
    });
  });

  return (
    <section className="mx-5 my-10 flex flex-col gap-5 lg:mx-16 lg:my-5 lg:grid lg:grid-cols-[1.7fr,1fr] lg:grid-rows-[300px,200px] lg:gap-3">
      <div className="lg:row-span-2 max-lg:h-[340px] ">
        <Link to="/gants">
          <img
            src={gantsCadré}
            alt="Gants gommage"
            className=" h-full w-full cursor-pointer rounded-[20px] object-cover object-bottom"
            data-aos="zoom-in"
          />
        </Link>
      </div>

      <div className="max-lg:h-[290px]">
        <Link to="/KitEtFrotte">
          <img
            src={kitsCadré}
            alt="Kit Visage et Frotte-dos"
            className="h-full w-full cursor-pointer rounded-[20px] object-cover "
            style={{ objectPosition: "center bottom" }}
            data-aos="zoom-in"
          />
        </Link>
      </div>

      <div className="max-lg:h-[200px]">
        <Link to="/sandales">
          <img
            src={newSandales}
            alt="sandales Hammam"
            className="w-full cursor-pointer rounded-[20px] object-cover max-md:h-[200px] md:h-[500px] lg:h-full"
            data-aos="zoom-in"
          />
        </Link>
      </div>
    </section>
  );
};

export default FirstPart;
