import { cross, hamburger } from "../assets/icons";
import { fisatexLogo } from "../assets/images";
import SideHeader from "./SideHeader";

import { useMyContext } from "../ContextComp";
import { Link } from "react-router-dom";

const Header = () => {
  const { openSidebar, setOpenSidebar } = useMyContext();

  return (
    <header className="padding-x w-full pt-1 mb-[-10px]">
      {/* items-center et max-container à supprimer */}
      <nav className="max-container flex items-center justify-between">
        <Link to="/">
          <img
            className="cursor-pointer"
            src={fisatexLogo}
            alt="Fisatex Logo"
            width={130}
            height={29}
          />
        </Link>

        <div className="mr-28 flex flex-1 items-center justify-center gap-16 font-montserrat text-lg leading-normal text-slate-gray max-lg:hidden">
          <Link to="/">
            <p className="cursor-pointer hover:text-green-500">Accueil</p>
          </Link>
          <div className="group relative">
            <p className="cursor-pointer hover:text-green-500">Produits</p>
            <div className="absolute left-[-50px] z-10 hidden w-[180px] cursor-pointer rounded-lg bg-white px-2 py-5 font-serif text-gray-500 shadow-xl ring-1 ring-slate-900/5 group-hover:block">
              <Link to="/gants">
                <p className="text-left hover:text-green-500">
                  Gants de Gommage
                </p>
              </Link>
              <Link to="/KitEtFrotte">
                <p className="py-2 text-left hover:text-green-500">
                  Kit Visage <br /> Et <br /> Frotte-Dos
                </p>
              </Link>
              <Link to="/sandales">
                <p className="text-left hover:text-green-500">
                  Sandales Hammam
                </p>
              </Link>
            </div>
          </div>
          <Link to="/about">
            <p className="cursor-pointer hover:text-green-500">À propos</p>
          </Link>
          <Link to="/contactUs">
            <p className="cursor-pointer hover:text-green-500">Contact</p>
          </Link>
        </div>
        <div className="hidden max-lg:block">
          <SideHeader className="lg:hidden" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
