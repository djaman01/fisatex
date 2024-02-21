import { useRef } from "react";
import { arrowRight } from "../assets/icons";
import { gantVisage, mainCreme, peauMorte } from "../assets/images";

import MyButton from "../components/MyButton";

const Bienfaits = () => {
  const bienfaitSection = useRef(null);

  const scrollToBienfait = () => {
    bienfaitSection.current &&
      bienfaitSection.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <h2 className="mt-[-80px] text-center font-palanquin text-2xl font-bold md:mt-[-80px] lg:text-[40px] ">
        Les <span className="text-coral-red">Bienfaits</span> de notre{" "}
        <span className="text-coral-red">Gant</span> de gommage
      </h2>
      <div className=" border border-slate-gray lg:border-none grid grid-cols-[1fr,1fr] mt-[35px] lg:grid lg:grid-cols-[350px,350px,500px] lg:grid-rows-[500px] lg:gap-10 ">
        <img
          className="h-full w-full cursor-pointer object-cover lg:h-full "
          src={peauMorte}
          alt="hammam"
          onClick={scrollToBienfait}
        />
        <img
          className=" h-full w-full cursor-pointer border object-cover lg:h-full "
          src={gantVisage}
          alt="hammam"
          onClick={scrollToBienfait}
        />

        <div
          className="prose min-w-full col-span-2 lg:col-span-1 lg:mb-5 lg:mt-5 rounded-lg py-5 shadow-2xl"
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

          <div className="mt-[-20px] flex flex-col items-center justify-center">
            <h2 className="font-palanquin text-2xl font-bold">Intéressés ?</h2>
            <MyButton label="Contactez-nous" iconURL={arrowRight} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bienfaits;
