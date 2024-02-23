import {
  creme,
  femmeBain,
  gantsFond,
  massage,
  troisgants,
} from "../assets/images";

const FirstPart = () => {
  return (
    <section className="mx-5 my-10 flex flex-col gap-5 lg:mx-16 lg:my-10 lg:grid lg:grid-cols-[1.7fr,1fr] lg:grid-rows-[250px,250px] lg:gap-5">
      <div className="row-span-2">
        <img
          src={femmeBain}
          alt="femme bain"
          className=" h-full w-full cursor-pointer rounded-lg object-cover"
        />
      </div>
      <div className="rounded-lg">
        <img
          src={creme}
          alt="crème"
          className="h-full w-full cursor-pointer rounded-lg object-cover "
        />
      </div>
      <div>
        <img
          src={massage}
          alt="massage"
          className="h-full w-full cursor-pointer rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default FirstPart;
