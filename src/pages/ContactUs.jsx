import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import Header from "../components/Header";

import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { GiPositionMarker } from "react-icons/gi";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      // delay: 100,
    });
  });

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="">
        <div>
          <div className="mx-auto my-3">
            <h1 className="text-center font-montserrat text-[45px] text-coral-red max-lg:mt-4">
              Contactez-nous
            </h1>
          </div>

          <div className="mx-auto mb-16 flex h-2 w-24 overflow-hidden rounded">
            <div className=" flex-1 bg-orange-200"></div>
            {/* flex-1 = the element will grow to fill available space along the main axis */}
            <div className=" flex-1 bg-orange-400"></div>
            <div className=" flex-1 bg-orange-600"></div>
          </div>

          <div className=" mb-20 flex justify-center gap-20 max-lg:gap-12 max-lg:flex-col max-lg:items-center">
            <div
              data-aos="flip-left"
              className="flex h-60 w-72 flex-col items-center justify-center rounded-lg border border-gray-400 bg-gray-100"
            >
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

            <div
              data-aos="flip-up"
              className="flex h-60 w-72 flex-col items-center justify-center rounded-lg border border-gray-400 bg-gray-100"
            >
              <div className=" mb-4 flex justify-center rounded-full bg-red-400 px-3 py-3">
                <CiPhone color="white" size={20} />
              </div>
              <h2 className=" mb-3 text-2xl font-semibold text-gray-700">
                Téléphone
              </h2>
              <p className="font-palanquin text-xl text-gray-500">
                +212 5 22 30 33 67 <br />
                +212 5 22 31 70 07 <br />
                +212 5 22 44 51 96
              </p>
            </div>

            <div
              data-aos="flip-right"
              className=" flex h-60 w-72 flex-col items-center justify-center rounded-lg border border-gray-400 bg-gray-100 text-gray-700"
            >
              <div className=" mb-4 flex justify-center rounded-full bg-red-400 px-3 py-3">
                <GiPositionMarker color="white" size={20} />
              </div>
              <h2 className="mb-3 text-2xl font-semibold">Adresse</h2>
              <p className="text-center font-palanquin text-xl text-gray-500">
                7 Rue Bouchaib El Machrouhi, Derb Omar, en face du magasin "Cash
                Plus Safir Allal"
              </p>
            </div>

            {/* <div
              data-aos="flip-right"
              className=" flex h-60 w-72 flex-col items-center justify-center rounded-lg border border-gray-400 bg-gray-100 text-gray-700"
            >
              <div className=" mb-4 mt-[-45px] flex justify-center rounded-full bg-red-400 px-3 py-3">
                <IoShareSocialOutline color="white" size={20} />
              </div>
              <h2 className="mb-3 text-2xl font-semibold">Réseaux Sociaux</h2>
              <div className=" flex w-28 items-center justify-around">
                <FaFacebook size={28} className="cursor-pointer" />
                <BiLogoInstagramAlt size={32} className="cursor-pointer" />
              </div>
            </div> */}
          </div>

          <div className="padding-b ml-16 grid grid-cols-2 max-lg:mx-8 max-lg:flex max-lg:flex-col max-lg:gap-10 ">
            <div className="">
              {/* Aller sur google map, écrire adresse rue, puis si on veut changer la position, créer une nouvelle adresse et envoyer la demande à google */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.552428366631!2d-7.610663777547566!3d33.59229799397959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd0037ae0da1%3A0x46e27063613f50b!2sFisatex!5e0!3m2!1sfr!2sma!4v1728774903053!5m2!1sfr!2sma"
                width="600"
                height="450"
                style={{ border: "0" }} // Notice the use of curly braces to pass a JavaScript object
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full max-lg:h-96 "
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
