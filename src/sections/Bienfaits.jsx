import { arrowRight } from "../assets/icons";
import { gantVisage, mainCreme, peauMorte } from "../assets/images";

import MyButton from "../components/MyButton";

const Bienfaits = () => {
  return (
    <section>
      <h2 className="mt-[-80px] text-center font-palanquin text-2xl font-bold md:mt-[-80px] lg:text-[40px] ">
        Les <span className="text-coral-red">Bienfaits</span> de notre{" "}
        <span className="text-coral-red">Gant</span> de gommage
      </h2>
      <div className="grid grid-cols-[300px,300px,500px] grid-rows-[500px] gap-16 sm:mt-[50px]">
        <img
          className="mt-[25px] h-full w-full object-cover "
          src={peauMorte}
          alt="hammam"
        />
        <img
          className=" mt-[25px] h-full w-full object-cover "
          src={gantVisage}
          alt="hammam"
        />

        <div className="prose mt-12 rounded-lg shadow-2xl">
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
              Gant Disponible en version visage et Corps pour un meilleur
              Confort
            </li>
          </ul>

          <div className="mt-[-30px] flex flex-col items-center justify-center">
            <h2 className="font-palanquin text-2xl font-bold">Intéressés ?</h2>
            <MyButton label="Contactez-nous" iconURL={arrowRight} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bienfaits;
