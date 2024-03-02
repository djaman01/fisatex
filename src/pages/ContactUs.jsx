import Footer from "../components/Footer";
import Header from "../components/Header";

import { gantAroma, gantSensible, gantSup, gantTradi } from "../assets/images";

const ContactUs = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div>

          <div className="mx-auto ">
            <h1 className="text-center text-coral-red font-montserrat text-[45px]">Contactez-nous</h1>
          </div>

          <div className="mb-10 flex mx-auto h-2 w-24 overflow-hidden rounded">
            <div className=" flex-1 bg-orange-200"></div>
            {/* flex-1 = the element will grow to fill available space along the main axis */}
            <div className=" flex-1 bg-orange-400"></div>
            <div className=" flex-1 bg-orange-600"></div>
          </div>
        </div>
      </main>

      <footer className="padding-x mt-20 bg-gray-800 pb-8 pt-8">
        <Footer />
      </footer>
    </>
  );
};

export default ContactUs;
