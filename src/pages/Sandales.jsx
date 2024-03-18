import {newSandales, sandalesJet } from "../assets/images";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Sandales = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div className="my-10 rounded-3xl bg-[#f0f0f0] p-7 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-y-5 lg:mx-40 lg:grid lg:grid-cols-2 lg:gap-y-5">
          <div>
            <img
              src={sandalesJet}
              alt="sandales Hammam"
              className="h-[300px] w-[600px] rounded-3xl shadow-2xl"
            />
          </div>

          <div className="prose row-span-2 shadow-2xl max-lg:order-last max-lg:rounded-3xl max-lg:border max-lg:border-slate-400 max-lg:py-5 sm:w-[600px] lg:ml-9 lg:w-auto lg:rounded-r-full lg:border lg:border-slate-300 ">
            <h2 className=" text-coral-red max-lg:text-center lg:pl-10 lg:pt-5">
              Sandales Hammam
            </h2>
            <div className=" pt-12 font-bold max-lg:pl-5 max-lg:pt-0 lg:pl-5 ">
              <li> Nos sandales <span className="text-blue-600"> étanches</span>, spécialement conçues<br className="max-lg:hidden"/> pour une utilisation dans les hammams </li>
            
      
            </div>
          </div>

          <div>
            <img
              src={newSandales}
              alt="sandales hammam"
              className="h-[300px] w-[600px] rounded-3xl shadow-2xl"
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

export default Sandales;
