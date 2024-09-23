import { gantsCadré, gantsLargeur } from "../assets/images";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Gants = () => {
  return (
    <>

      <header>
        <Header />
      </header>

      <main>

        <div className="prose mx-auto text-center">
          <h1 className="text[40xl]">Nos Gants Personnalisables</h1>
        </div>
        {/* Faire animation AOS flip */}
        <div className=" mx-32 mb-20 mt-10 h-[600px] ">
          <img
            src={gantsLargeur}
            alt="3 types de gants personnalisables"
            className="h-full w-full rounded-full"
          />
        </div>

        <div className=" mb-20 grid h-96 grid-cols-3 text-center ">
          <div className="border border-red-500">
            <h2>Gant Miami</h2>
          </div>

          <div className="border border-green-500">
            <h2>Gant 28</h2>
          </div>

          <div className="border border-yellow-500">
            <h2>Gant Gamme Hôtel </h2>
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
