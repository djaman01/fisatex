import { useRef } from "react";
import { arrowRight } from "../assets/icons";
import { gantVisage, mainCreme, peauMorte } from "../assets/images";

import MyButton from "../components/MyButton";

const Bienfaits = () => {

const bienfaitSection = useRef(null)

const scrollToBienfait = () => {
  (bienfaitSection.current) && bienfaitSection.current.scrollIntoView({behavior:"smooth"})
}


  return (
    <section>
      <h2 className="mt-[-80px] text-center font-palanquin text-2xl font-bold md:mt-[-80px] lg:text-[40px] ">
        Les <span className="text-coral-red">Bienfaits</span> de notre{" "}
        <span className="text-coral-red">Gant</span> de gommage
      </h2>
      <div className="lg:grid grid-cols-[300px,300px,500px] grid-rows-[500px] lg:gap-16 sm:mt-[50px]">
        <img
          className="cursor-pointer mt-[25px] h-[300px] lg:h-full w-full object-cover "
          src={peauMorte}
          alt="hammam"
          onClick={scrollToBienfait}
        />
        <img
          className=" cursor-pointer mt-[25px] h-[300px] lg:h-full w-full object-cover "
          src={gantVisage}
          alt="hammam"
          onClick={scrollToBienfait}
        />

        <div 
        className="py-5 prose mt-12 rounded-lg shadow-2xl mx-auto"
        ref={bienfaitSection}
        >
          <h2 className="text-center font-palanquin text-2xl font-bold">
            Refaite vous une <span className="text-coral-red">Nouvelle</span>{" "}
            peau !
          </h2>
          <ul className="font-palanquin text-xl">
            <li> Nettoie la peau en profondeur </li>
            <li> Elimine les cellules mortes de la peau </li>
            <li> Libère les pores </li>
            <li> Stimule la circulation sanguine </li>
            <li>
              Gant Disponible en <b>version visage et corps</b> pour un meilleur
              Confort
            </li>
          </ul>

          <div className=" mt-[-40px] mb-[10px] flex flex-col items-center justify-center">
            <h2 className="font-palanquin text-2xl font-bold">Intéressés ?</h2>
            <MyButton label="Contactez-nous" iconURL={arrowRight} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bienfaits;
