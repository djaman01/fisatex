import { gantsFond } from "../assets/images";
import MyButton from "../components/MyButton";

const VotreGant = () => {
  return (
    <section className=" flex items-center border bg-red-100 py-12 max-lg:flex-col">
      <div className="px-24 mt-[-50px] ">
        <h2 className="font-palanquin text-4xl font-bold ">
          <span className="text-coral-red">Personnalisez</span> Votre Gant !
        </h2>
        <p className="mt-4 lg:max-w-lg">Chez Fisatex, nous vous offrons la possibilité de personnaliser votre gant: Choisissez parmis une large gamme de couleurs et votre logo sur l'élastique</p>
        <p>C'est aussi possible pour le Kit-visage et le frotte-dos</p>
        {/* info-text et un custom style écrit dans index.js */}
        <div className="mt-6">
          <MyButton label="View Details info-text" />
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
