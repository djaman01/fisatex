import { Link } from "react-router-dom";
import {
  newSandales,
  gantsCadré,
  kitsCadré
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

  //To go instantly to the top of the page, when redirecting to it
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };



  return (
    <section className="mx-5 my-10 flex flex-col gap-5 lg:mx-10 lg:grid lg:grid-cols-[1.7fr,1fr] lg:grid-rows-[395px,200px] lg:gap-3 lg:mt-2">
      <div className="max-lg:h-[340px] lg:row-span-2 ">
        <Link to="/gants" onClick={scrollToTop}>
          <img
            src={gantsCadré}
            alt="Gants gommage"
            className=" h-full w-full cursor-pointer rounded-[20px] object-fill"
            data-aos="zoom-in"
          />
        </Link>
      </div>

      <div className="max-lg:h-[290px]">
        <Link to="/KitEtFrotte" onClick={scrollToTop}>
          <img
            src={kitsCadré}
            alt="Kit Visage et Frotte-dos"
            className="h-full w-full cursor-pointer rounded-[20px] object-fill "
            style={{ objectPosition: "center bottom" }}
            data-aos="zoom-in"
          />
        </Link>
      </div>

      <div className="max-lg:h-[200px]">
        <Link to="/sandales" onClick={scrollToTop}>
          <img
            src={newSandales}
            alt="sandales Hammam"
            className="w-full cursor-pointer rounded-[20px] object-fill max-md:h-[200px] md:h-[500px] lg:h-full"
            data-aos="zoom-in"
          />
        </Link>
      </div>
    </section>
  );
};

export default FirstPart;
