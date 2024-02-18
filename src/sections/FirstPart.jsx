import {
  creme,
  femmeBain,
  gantsFond,
  massage,
  troisgants,
} from "../assets/images";

const FirstPart = () => {
  return (
    <section className=" m-10 grid grid-cols-[1.7fr,1fr] gap-5">
      <div className="row-span-2">
        <img
          src={femmeBain}
          alt="femme bain"
          className=" h-full rounded-md object-cover cursor-pointer"
        />
      </div>
      <div>
        <img
          src={creme}
          alt="crème"
          className="rounded-md object-cover cursor-pointer "
        />
      </div>
      <div>
        <img
          src={massage}
          alt="massage"
          className=" rounded-md object-cover cursor-pointer"
        />
      </div>
    </section>
  );
};

export default FirstPart;
