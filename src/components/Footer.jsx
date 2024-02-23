import { Link } from "react-router-dom";
import { fisatexLogo, fisatexNoBg } from "../assets/images";
import { facebook, instagram } from "../assets/icons";

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
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <img
                src={facebook}
                alt="Facebook Logo"
                width={24}
                height={24}
                className="" //je fais ça pour que prettier le formate verticalement
              />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <img
                src={instagram}
                alt="Instagram Logo"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-1 justify-between gap-20 flex-wrap lg:gap-10' >

      </div>
    </footer>
  );
};

export default Footer;
