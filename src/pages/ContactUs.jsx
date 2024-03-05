import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import Header from "../components/Header";

import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const ContactUs = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <div className="mx-auto ">
            <h1 className="text-center font-montserrat text-[45px] text-coral-red">
              Contactez-nous
            </h1>
          </div>

          <div className="mx-auto mb-10 flex h-2 w-24 overflow-hidden rounded">
            <div className=" flex-1 bg-orange-200"></div>
            {/* flex-1 = the element will grow to fill available space along the main axis */}
            <div className=" flex-1 bg-orange-400"></div>
            <div className=" flex-1 bg-orange-600"></div>
          </div>
          <div className="my-16 flex justify-center gap-20">
            <div className="flex h-60 w-72 flex-col items-center justify-center rounded-lg bg-gray-100 hover:shadow-2xl">
              <div className=" mb-4 mt-[-45px] flex justify-center rounded-full bg-red-400 px-3 py-3">
                <IoMailOutline color="white" size={20} />
              </div>
              <h2 className=" mb-3 text-2xl font-semibold text-gray-700">
                E-mail
              </h2>
              <p className="font-palanquin text-xl text-gray-500">
                fisatex@fisatex.com
              </p>
            </div>
            <div className="flex h-60 w-72 flex-col items-center justify-center rounded-lg bg-gray-100 hover:shadow-2xl">
              <div className=" mb-4 mt-[-45px] flex justify-center rounded-full bg-red-400 px-3 py-3">
                <CiPhone color="white" size={20} />
              </div>
              <h2 className=" mb-3 text-2xl font-semibold text-gray-700">
                Téléphone
              </h2>
              <p className="font-palanquin text-xl text-gray-500">
              +212-5-22-30-33-67
              </p>
            </div>
            <div className=" flex h-60 w-72 flex-col items-center justify-center rounded-lg bg-gray-100 text-gray-700 hover:shadow-2xl">
              <div className=" mb-4 mt-[-45px] flex justify-center rounded-full bg-red-400 px-3 py-3">
                <IoShareSocialOutline color="white" size={20} /> 
              </div>
              <h2 className="mb-3 text-2xl font-semibold">Réseaux Sociaux</h2>
             <div className=" flex w-28 justify-around items-center">
             <FaFacebook size={28} className="cursor-pointer" />
             <BiLogoInstagramAlt size={32} className="cursor-pointer" />
             </div>
            </div>
          </div>

          <div className="padding-b grid grid-cols-2 ml-16 ">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5190186332275!2d-7.612445924970957!3d33.59183544190202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd62408f3ef9%3A0xf0df71d96535da97!2s7%20Rue%20Bouchaib%20El%20Machrouhi%2C%20Casablanca%2020250!5e0!3m2!1sfr!2sma!4v1709150151948!5m2!1sfr!2sma"
                width="600"
                height="450"
                style={{ border: "0" }} // Notice the use of curly braces to pass a JavaScript object
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              ></iframe>
            </div>

            <div>
              <FormContact />
            </div>
          </div>
        </div>
      </main>

      <footer className="padding-x bg-gray-800 pb-8 pt-8">
        <Footer />
      </footer>
    </>
  );
};

export default ContactUs;
