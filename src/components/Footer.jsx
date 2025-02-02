import { Link } from "react-router-dom";
import { fisatexLogo, fisatexNoBg } from "../assets/images";
import { copyrightSign, facebook, instagram } from "../assets/icons";
import { footerLinks } from "../constants";
import CopyrightUpdate from "./CopyrightUpdate";

const Footer = () => {
  //To go instantly to the top of the page, when redirecting to it
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <footer className="max-container lg:h-52">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:gap-10 ">
        <div className="flex flex-col items-start">
          <Link to="/">
            <img
              src={fisatexNoBg}
              alt="fisatex logo"
              width={150}
              height={46}
              className="cursor-pointer rounded-lg bg-white px-2 py-2 max-sm:ml-20"
              onClick={scrollToTop}
            />
          </Link>
          <p className=" lg:ml-[-30px] mt-6 font-mono text-base leading-7 text-white-400 sm:max-w-sm">
            <b>Fabricant de gant de gommage Marocain</b>
          </p>
        </div>

        <div className=" flex flex-1 flex-wrap justify-between gap-20 max-sm:justify-center lg:gap-10">
          <div className="max-sm:w-48">
            <h4 className=" mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
              Contact
            </h4>

            {/* Comme il y y a un array links, dans l'array footerLinks: on va mapper dessus */}
            <ul>
              <li className="mt-3 cursor-pointer text-base leading-normal text-white-400 hover:text-slate-gray">
                Mail: fisatex@fisatex.com
              </li>
              <li className="mt-3 cursor-pointer text-base leading-normal text-white-400 hover:text-slate-gray">
                Tel 1: +212 5 22 30 33 67
              </li>
              <li className="mt-3 cursor-pointer text-base leading-normal text-white-400 hover:text-slate-gray">
                Tel 2: +212 5 22 31 70 07
              </li>
              <li className="mt-3 cursor-pointer text-base leading-normal text-white-400 hover:text-slate-gray">
                Tel 3: +212 5 22 44 51 96
              </li>
            </ul>
          </div>

          <div className="max-sm:w-48">
            <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
              Infos
            </h4>

            {/* Comme il y y a un array links, dans l'array footerLinks: on va mapper dessus */}
            <ul>
              <Link to="/about" onClick={scrollToTop}>
                <li className="mt-3 cursor-pointer text-base leading-normal text-white-400 hover:text-slate-gray">
                  À propos
                </li>
              </Link>
            </ul>
          </div>

          <div className=" mr-5 max-sm:w-48">
            <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
              Produits
            </h4>

            {/* Comme il y y a un array links, dans l'array footerLinks: on va mapper dessus */}
            <ul>
              <Link to="/gants" onClick={scrollToTop}>
                <li className="mt-3 cursor-pointer text-base leading-normal text-white-400 hover:text-slate-gray">
                  Gant de Gommage
                </li>
              </Link>

              <Link to="/KitEtFrotte" onClick={scrollToTop}>
                <li className="mt-3 cursor-pointer text-base leading-normal text-white-400 hover:text-slate-gray">
                  Kit Visage et Frotte-Dos
                </li>
              </Link>

              <Link to="/sandales" onClick={scrollToTop}>
                <li className="mt-3 cursor-pointer text-base leading-normal text-white-400 hover:text-slate-gray">
                  Sandales Hammam
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-lg:mb-[-25px] lg:mt-5 flex justify-center gap-2 font-montserrat text-sm text-white-400 max-lg:mt-8">
        <p>
          Copyright
          <CopyrightUpdate /> - Fisatex
        </p>
      </div>
    </footer>
  );
};

export default Footer;
