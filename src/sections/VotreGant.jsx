import { arrowRight } from "../assets/icons";
import { gantsFond } from "../assets/images";
import MyButton from "../components/MyButton";

const VotreGant = () => {
  return (
    <section className=" flex items-center border bg-red-100 py-12 max-lg:py-20 max-lg:flex-col max-lg:items-center">
      <div className="mt-[-50px] px-24 max-lg:pb-14 ">
        <h2 className="font-palanquin text-4xl font-bold ">
          <span className="text-coral-red">Personnalisez</span> Votre Gant !
        </h2>
        {/* max-w-lg:Limite la largeur du texte pour qu'il ne prenne pas trop de place */}
        <p className="mt-4 font-montserrat text-2xl leading-10 lg:max-w-lg">
          Choisissez parmi une <b>vaste sélection de couleurs</b> et ajoutez{" "}
          <b>votre logo</b> sur l'élastique, afin de créer un produit{" "}
          <b>unique</b> qui correspond à votre marque
        </p>
        <div className="mt-6">
          <MyButton label="Contactez-nous" iconURL={arrowRight} />
        </div>
      </div>

      <div>
        <img
          className="rounded-2xl "
          src={gantsFond}
          alt={gantsFond}
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};

export default VotreGant;
