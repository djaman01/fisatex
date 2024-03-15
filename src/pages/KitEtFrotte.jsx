import {
  gantAroma,
  gantSensible,
  gantSup,
  gantTradi,
  kit1,
  kit2,
  frotteDos,
  frotteDosLogo,
} from "../assets/images";
import Footer from "../components/Footer";
import Header from "../components/Header";

const KitEtFrotte = () => {

  window.scrollTo({
    top:0,
    behavior:"instant",
  })
  
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div className="md:items-center my-10 rounded-lg bg-[#f0f0f0] p-5 max-lg:flex max-lg:flex-col max-lg:gap-y-5 lg:mx-40 lg:grid lg:grid-cols-2 lg:gap-y-5">
          <div>
            <img
              src={kit1}
              alt="kit-visage-face"
              className="w-[600px] h-[300px] rounded-lg"
            />
          </div>

          <div className="prose row-span-2 max-lg:order-last lg:ml-9">
            <h2 className="text-center text-blue-600">Kit Visage</h2>
            <div className="pt-2 font-bold max-lg:pl-5 max-lg:pt-0 lg:pl-5 ">
              <li> Notre gant de gommage spécial Visage</li>
              <li>
                Fait avec le tissus du gant de gommage pour{" "}
                <span className="text-blue-600">peaux sensible </span>
                afin de respecter la peau du visage
              </li>
              <li>
                Dispose aussi d'une{" "}
                <span className="text-blue-600"> face pour le Savonnage</span>:
                <br />
                Tourner l'élastique pour l'utiliser
              </li>
              <li style={{ color: "#ff0921" }}>
                Disponible dans une large variété de couleurs
              </li>
              <li style={{ color: "#ff0921" }}>
                Possibilité d'ajouter votre logo sur l'élastique
              </li>
            </div>
          </div>

          <div>
            <img
              src={kit2}
              alt="kit-visage-dos"
              className="w-[600px] h-[300px] rounded-lg"
            />
          </div>
        </div>

        <div className=" md:items-center max-lg: my-10 rounded-lg bg-[#f0f0f0] p-5 max-lg:flex max-lg:flex-col max-lg:gap-y-5 lg:mx-40 lg:grid lg:grid-cols-2 lg:gap-y-5">
          <div>
            <img
              src={frotteDos}
              alt="frotte-dos"
              className="w-[600px] h-[300px] rounded-lg"
            />
          </div>

          <div className="prose row-span-2 max-lg:order-last lg:ml-9">
            <h2 className="text-center text-blue-600">Frotte-Dos</h2>
            <div className="pt-2 font-bold max-lg:pl-5 max-lg:pt-0 lg:pl-5 ">
              <li> Notre produit pour un gommage facile et efficace du Dos</li>
              <li>
                Fait avec le tissus du gant de gommage pour{" "}
                <span className="text-blue-600">peaux sensible </span>
              </li>

              <li>
                Dispose aussi d'une{" "}
                <span className="text-blue-600"> face pour le Savonnage</span>
              </li>

              <li style={{ color: "#ff0921" }}>
                Disponible dans une large variété de couleurs
              </li>
              <li style={{ color: "#ff0921" }}>
                Possibilité d'ajouter votre logo sur l'élastique
              </li>
            </div>
          </div>

          <div className="lg:pl-32 max-lg:pl-14">
            <img
              src={frotteDosLogo}
              alt="frotte-dos-logo"
              className="h-[300px] w-[250px] -rotate-90 rounded-lg"
            />
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
