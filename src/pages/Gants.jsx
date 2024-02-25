import { gantSensible, gantSup, gantTradi } from "../assets/images";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Gants = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="grid grid-cols-[500px,1fr] grid-rows-[500px,500px,500px] border border-black">
          <img
            src={gantSensible}
            alt="gant peaux sensibles"
            className="m-auto h-[450px] w-[450px]"
          />

          <div className="border border-black">
            <p>ezdze</p>
          </div>

          <img
            src={gantTradi}
            alt="gant Traditionel"
            className=" m-auto h-[450px] w-[450px] px-2 py-2"
          />
          <div className="border border-black">
            <p>ezdze</p>
          </div>

          <img
            src={gantSup}
            alt="gant qualité Supérieure"
            className="m-auto h-[450px] w-[450px]"
          />

          <div className="border border-black">
            <p>ezdze</p>
          </div>
        </div>
      </main>
      <footer className="padding-x bg-gray-800 pb-8 pt-8">
        <Footer />
      </footer>
    </>
  );
};

export default Gants;
