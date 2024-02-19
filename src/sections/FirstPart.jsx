import {
  creme,
  femmeBain,
  gantsFond,
  massage,
  troisgants,
} from "../assets/images";

const FirstPart = () => {
  return (
    <section className="flex flex-col gap-5 my-10 lg:grid lg:grid-cols-[1.7fr,1fr] lg:gap-5 lg:my-10 lg:mx-7">
      <div className="row-span-2">
        <img
          src={femmeBain}
          alt="femme bain"
          className=" h-full rounded-lg object-cover cursor-pointer"
        />
      </div>
      <div>
        <img
          src={creme}
          alt="crème"
          className="rounded-lg object-cover cursor-pointer "
        />
      </div>
      <div>
        <img
          src={massage}
          alt="massage"
          className=" rounded-lg object-cover cursor-pointer"
        />
      </div>
    </section>
  );
};

export default FirstPart;
