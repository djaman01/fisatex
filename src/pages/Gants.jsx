import { gantAroma, gantSensible, gantSup, gantTradi } from "../assets/images";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Gants = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mx-16 mt-5">
        <div className="grid grid-cols-[500px,1fr] grid-rows-[500px,500px,500px] ">
          <img
            src={gantAroma}
            alt="gant peaux sensibles"
            className="h-5/6 w-5/6 rounded-l-full"
          />

          <div className="m prose h-3/6 border border-black">
            <h2 className="pt-2 text-center text-blue-600">
              Gant Peaux Sensibles
            </h2>
            <ul className="pt-2">
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
          <div className="prose h-3/6 border border-black">
            <h2 className="pt-2 text-center text-blue-600">
              Gant Peaux Sensibles
            </h2>
            <ul className="pt-2">
              <li>Notre gant de gommage pour les peaux sensibles</li>
              <li>
                Associe un gommage performant tout en étant respectueux des
                peaux fragiles et sujettes aux irritations.
              </li>
            </ul>
          </div>

          <img
            src={gantAroma}
            alt="gant qualité Supérieure"
            className="h-5/6 w-5/6 rounded-l-full"
          />

          <div className="prose h-3/6 border border-black">
            <h2 className="pt-2 text-center text-blue-600">
              Gant Peaux Sensibles
            </h2>
            <ul className="pt-2">
              <li>Notre gant de gommage pour les peaux sensibles</li>
              <li>
                Associe un gommage performant tout en étant respectueux des
                peaux fragiles et sujettes aux irritations.
              </li>
            </ul>
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
