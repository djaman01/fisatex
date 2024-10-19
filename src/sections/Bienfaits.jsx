import { useRef } from "react";
import { arrowRight } from "../assets/icons";
import { kitVisage, peauMorte } from "../assets/images";

import MyButton from "../components/MyButton";
import { Link } from "react-router-dom";


import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Bienfaits = () => {

  const bienfaitSection = useRef(null);

  const scrollToBienfait = () => {
    bienfaitSection.current &&
      bienfaitSection.current.scrollIntoView({ behavior: "smooth" });
  };

  //To go instantly to the top of the page, when redirecting to it
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

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
    <section>
      <h2 className="text-center font-palanquin text-3xl font-bold lg:text-[40px] ">
        Les <span className="text-coral-red">Bienfaits</span> de notre{" "}
        <span className="text-coral-red">Gant</span> de gommage
      </h2>
      <div className=" mt-[35px] grid grid-cols-[1fr,1fr] lg:grid lg:grid-cols-[350px,250px,500px] lg:grid-rows-[500px] lg:gap-10 lg:border-none lg:justify-center">
        <img
          className="h-full w-full cursor-pointer lg:h-full "
          src={peauMorte}
          alt="hammam"
          onClick={scrollToBienfait}
          data-aos="fade-up"
        />
        <img
          className=" lg:object-contain h-full w-full cursor-pointer border object-cover lg:h-full "
          src={kitVisage}
          alt="hammam"
          onClick={scrollToBienfait}
          data-aos="fade-down"
        />

        <div
          className="prose col-span-2 rounded-lg shadow-2xl max-lg:min-w-full lg:col-span-1"
          ref={bienfaitSection}
        >
          <h2 className="pt-4 text-center font-palanquin font-bold lg:pt-5 lg:text-3xl">
            Refaite vous une <span className="text-coral-red">Nouvelle</span>{" "}
            peau !
          </h2>
          <ul className="font-palanquin text-xl lg:text-[22px]">
            <li> Nettoie la peau en profondeur </li>
            <li> Elimine les cellules mortes</li>
            <li> Libère les pores </li>
            <li> Stimule la circulation sanguine </li>
            <li>
              Disponible en <b>version visage</b> et <b>corps</b> pour un
              meilleur Confort
            </li>
          </ul>

          <div className="flex flex-col items-center justify-center max-lg:mb-[15px] max-lg:mt-[-50px] lg:mt-[-40px]">
            <h2 className="font-palanquin font-bold max-lg:mb-[15px] lg:text-2xl">
              Intéressés ?
            </h2>
            <Link
              to="/contactUs"
              className="no-underline"
              onClick={scrollToTop}
            >
              <MyButton label="Contactez-nous" iconURL={arrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bienfaits;
