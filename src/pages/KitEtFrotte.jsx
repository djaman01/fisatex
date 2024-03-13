import {
  gantAroma,
  gantSensible,
  gantSup,
  gantTradi,
  kit1,
  kit2,
  frotteDos,
  frotteDosLogo
} from "../assets/images";
import Footer from "../components/Footer";
import Header from "../components/Header";

const KitEtFrotte = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div className="mx-16 my-10 grid grid-cols-2 gap-y-5 border border-black">
          <div>
            <img src={kit1} alt="kit-visage-face" className="w-[600px] rounded-lg"/>
          </div>
          <div className="row-span-2 border border-red-500 my-20 "></div>
          <div>
            <img src={kit2} alt="kit-visage-dos" className="w-[600px] rounded-lg" />
          </div>
        </div>
        <div className="mx-16 my-20 grid grid-cols-2 gap-y-5 border border-black">
          <div>
            <img src={frotteDos} alt="kit-visage-face" className="w-[600px] h-[400px] rounded-lg"/>
          </div>
          <div className="row-span-2 border border-red-500 my-20 "></div>
          <div>
            <img src={frotteDosLogo} alt="kit-visage-dos" className="w-[600px] h-[600px] rounded-lg" />
          </div>
        </div>
      </main>
      <footer className="padding-x bg-gray-800 pb-8 pt-8">
        <Footer />
      </footer>
    </div>
  );
};

export default KitEtFrotte;
