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
        <div className=" grid grid-cols-[500px,1fr] grid-rows-[500px,500px,500px] items-center gap-8 ml-40">
          <img
            src={gantAroma}
            alt="gant peaux sensibles"
            className="h-5/6 w-5/6 rounded-l-full"
          />

          <div className="prose h-5/6 w-5/6 rounded-r-full bg-slate-300 shadow-3xl">
            <h2 className="pt-2 pl-24 text-blue-600">
              Gant Peaux Sensibles
            </h2>
            <ul className="pt-2 font-bold ">
              <li>Notre gant de gommage pour les peaux sensibles</li>
              <li>
                Associe un gommage performant tout en étant respectueux des
                peaux fragiles et sujettes aux irritations.
              </li>
            </ul>
          </div>

          <img
            src={gantAroma}
            alt="gant Traditionel"
            className="h-5/6 w-5/6 rounded-l-full"
          />
          <div className="prose h-5/6 w-5/6 rounded-r-full bg-slate-300 shadow-3xl">
            <h2 className="pt-2 pl-24 text-blue-600">
              Gant Traditionnel
            </h2>
            <ul className="pt-2 font-bold">
              <li>Le gant de gommage Classique</li>
              <li>Convient aux peaux résistantes</li>
            </ul>
          </div>

          <img
            src={gantAroma}
            alt="gant qualité Supérieure"
            className="h-5/6 w-5/6 rounded-l-full"
          />

          <div className="prose h-5/6 w-5/6 rounded-r-full bg-slate-300 shadow-3xl">
            <h2 className="pt-2 pl-24 text-blue-600">
              Gant Qualité Supérieure
            </h2>
            <ul className="pt-2 font-bold">
              <li>Notre gant de gommage avec la technologie la plus aboutie</li>
              <li>Convient à tout type de peaux et offre un gommage optimal</li>
            </ul>
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
