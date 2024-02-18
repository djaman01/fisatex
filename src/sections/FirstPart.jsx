import {
  creme,
  femmeBain,
  gantsFond,
  massage,
  troisgants,
} from "../assets/images";

const FirstPart = () => {
  return (
    <section className=" m-10 grid grid-cols-2 gap-5 border border-black">
      <div className="row-span-2">
        <img
          src={femmeBain}
          alt="femme bain"
          className=" h-full rounded-md border border-red-500 object-cover"
        />
      </div>
      <div className="">
        <img
          src={creme}
          alt="crème"
          className="h-[200px] w-full rounded-md border border-red-500 object-cover "
        />
      </div>
      <div className="">
        <img
          src={massage}
          alt="massage"
          className="h-[200px] w-full rounded-md border border-red-500 object-cover"
        />
      </div>
    </section>
  );
};

export default FirstPart;
