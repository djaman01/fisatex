import Header from "../components/Header";
import Footer from "../components/Footer";
import { mainCreme } from "../assets/images";

const AboutUs = () => {
  return (
    <>
      <Header />

      <main>
        <div className="mx-16 my-10 grid grid-cols-2 grid-rows-[400px,400px,400px] border border-black">
          <div>
            <h1>Hey</h1>
          </div>

          <div className="border border-red-500">
            <img className="h-96" src={mainCreme} alt="usine" />
          </div>

          <div className="border border-red-500">
            <img className="h-96" src={mainCreme} alt="usine" />
          </div>

          <div>
            <h1>Hey</h1>
          </div>

          <div>
            <h1>Hey</h1>
          </div>

          <div className="border border-red-500">
            <img className="h-96" src={mainCreme} alt="usine" />
          </div>
        </div>
      </main>

      <footer className="padding-x bg-gray-800 pb-8 pt-8">
        <Footer />
      </footer>
    </>
  );
};

export default AboutUs;
