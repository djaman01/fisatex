import { Link } from "react-router-dom";
import { arrowRight } from "../assets/icons";
import { gantsKitsCadrés } from "../assets/images";
import MyButton from "../components/MyButton";


import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const VotreGant = () => {

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
    <section className=" flex items-center justify-center border bg-red-100 py-12 max-lg:flex-col max-lg:px-5 max-lg:py-20">
      <div className="mt-[-50px] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:px-5 max-lg:pb-14 lg:px-24 ">
        <h2 className="font-palanquin text-[40px] font-bold max-lg:text-center ">
          <span className="text-coral-red">Personnalisez</span> Votre Gant !
        </h2>
        {/* max-w-lg:Limite la largeur du texte pour qu'il ne prenne pas trop de place */}
        <p className="mt-4 font-montserrat text-[19px] leading-9 lg:max-w-lg">
          Choisissez parmi une <b>vaste sélection de couleurs</b> et ajoutez{" "}
          <b>votre logo</b> sur l'élastique, afin de créer un produit{" "}
          <b>unique</b> qui correspond à votre marque
        </p>
        <div className="mt-6">
          <Link to="/contactUs" className="no-underline" onClick={scrollToTop}>
            <MyButton label="Contactez-nous" iconURL={arrowRight} />
          </Link>
        </div>
      </div>

      <div>
        <img
          className="rounded-2xl "
          src={gantsKitsCadrés}
          alt={gantsKitsCadrés}
          width={570}
          height={522}
          data-aos="flip-right"
        />
      </div>
    </section>
  );
};

export default VotreGant;
