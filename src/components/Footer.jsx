import { Link } from "react-router-dom";
import { fisatexLogo, fisatexNoBg } from "../assets/images";
import { copyrightSign, facebook, instagram } from "../assets/icons";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link to="/">
            <img
              src={fisatexNoBg}
              alt="fisatex logo"
              width={150}
              height={46}
              className="cursor-pointer rounded-lg bg-white px-2 py-2"
            />
          </Link>
          <p className="mt-6 font-mono text-base leading-7 text-white-400 sm:max-w-sm">
            <b>F</b>abric <b>I</b>ndustrielle de <b>S</b>oie <b>A</b>cétate{" "}
            <b>T</b>extiles
          </p>
          <div className="mt-8 flex items-center justify-center gap-5">
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white">
              <img
                src={facebook}
                alt="Facebook Logo"
                width={24}
                height={24}
                className="" //je fais ça pour que prettier le formate verticalement
              />
            </div>
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white">
              <img
                src={instagram}
                alt="Instagram Logo"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between gap-20 mt-[-40px] lg:mt-10 lg:gap-10">
          {footerLinks.map((e) => (
            <div key={e}>
              <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
                {e.title}
              </h4>
              {/* Comme il y y a un array links, dans l'array footerLinks: on va mapper dessus */}
              <ul>
                {e.links.map((e) => (
                  <li
                    key={e.name}
                    className="mt-3 cursor-pointer text-base leading-normal text-white-400 hover:text-slate-gray"
                  >
                    <a>{e.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 items-center justify-start gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat"> Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
