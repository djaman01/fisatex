import { gantAroma, gantSensible, gantSup, gantTradi } from "../assets/images";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Gants = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div className=" max-lg:mb-16 max-lg:mt-10 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-8 lg:mb-20 lg:ml-52 lg:grid lg:grid-cols-[500px,1fr] lg:grid-rows-[500px,500px,500px] lg:items-center lg:gap-8">
          <img
            src={gantAroma}
            alt="gant peaux sensibles"
            className="rounded max-lg:h-4/6 max-lg:w-[330px] max-lg:rounded-t-full lg:h-5/6 lg:w-5/6 lg:rounded-l-full"
          />

          <div className="prose bg-slate-300 shadow-3xl max-lg:h-[400px] max-lg:w-[330px] max-lg:rounded-b-full lg:h-5/6 lg:w-5/6 lg:rounded-r-full lg:pt-20">
            <h2 className="text-blue-600 max-lg:pt-4 max-lg:text-center lg:pl-24 lg:pt-2">
              Gant Peaux Sensibles
            </h2>
            <div className="lg:pl-5 pt-2 font-bold max-lg:pl-5 ">
              <li> Notre gant de gommage pour les peaux sensibles</li>
              <li>
                Associe un gommage performant tout en étant respectueux des
                peaux fragiles et sujettes aux irritations.
              </li>
            </div>
          </div>

          <img
            src={gantAroma}
            alt="gant peaux sensibles"
            className="rounded max-lg:h-4/6 max-lg:w-[330px] max-lg:rounded-t-full lg:h-5/6 lg:w-5/6 lg:rounded-l-full"
          />

          <div className="prose bg-slate-300 shadow-3xl max-lg:h-[400px] max-lg:w-[330px] max-lg:rounded-b-full lg:h-5/6 lg:w-5/6 lg:rounded-r-full lg:pt-20">
            <h2 className="text-blue-600 max-lg:pt-4 max-lg:text-center lg:pl-24 lg:pt-2">
              Gant Traditionnel
            </h2>
            <div className=" lg:pl-5 pt-2 font-bold max-lg:pl-5 ">
              <li> Le gant de gommage originel </li>
              <li>Adapté aux peaux Résistantes, pour un gommage profond</li>
            </div>
          </div>

          <img
            src={gantAroma}
            alt="gant peaux sensibles"
            className="rounded max-lg:h-4/6 max-lg:w-[330px] max-lg:rounded-t-full lg:h-5/6 lg:w-5/6 lg:rounded-l-full"
          />

          <div className="prose bg-slate-300 shadow-3xl max-lg:h-[400px] max-lg:w-[330px] max-lg:rounded-b-full lg:h-5/6 lg:w-5/6 lg:rounded-r-full lg:pt-20">
            <h2 className="text-blue-600 max-lg:pt-4 max-lg:text-center lg:pl-24 lg:pt-2">
              Gant Qualité Supérieure
            </h2>
            <div className=" lg:pl-5 pt-2 font-bold max-lg:pl-5 ">
              <li>
                Notre gant de gommage avec la technologie la plus aboutie
              </li>
              <li>Convient à tout type de peaux et offre un gommage optimal</li>
            </div>
          </div>
        </div>
      </main>
      <footer className="padding-x bg-gray-800 pb-8 pt-8">
        <Footer />
      </footer>
    </div>
  );
};

export default Gants;
