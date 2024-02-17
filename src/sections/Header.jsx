import { useEffect, useState } from "react";
import { cross, hamburger } from "../assets/icons";
import { fisatexLogo } from "../assets/images";
import SideHeader from "../components/SideHeader";

import { useMyContext } from "../ContextComp";

const Header = () => {
  const { openSidebar, setOpenSidebar } = useMyContext();

  useEffect(()=>{
    console.log(openSidebar)
  },[openSidebar])

  return (
    <header className="padding-x absolute z-10 w-full py-8">
      {/* items-center et max-container à supprimer */}
      <nav className="max-container flex items-center justify-between">
        <a href="/">
          <img
            className="cursor-pointer"
            src={fisatexLogo}
            alt="Fisatex Logo"
            width={130}
            height={29}
          />
        </a>
        <div className="flex flex-1 items-center justify-center gap-16 font-montserrat text-lg leading-normal text-slate-gray max-lg:hidden">
          <p className="cursor-pointer hover:text-green-600">Accueil</p>
          <div className="group relative">
            <p className="cursor-pointer hover:text-green-600">Produits</p>
            <div className="absolute left-[-50px] hidden w-[180px] cursor-pointer rounded-lg bg-white px-2 py-5 font-serif text-gray-500 shadow-xl ring-1 ring-slate-900/5 group-hover:block">
              <p className="text-center hover:text-green-600">
                Gants de Gommage
              </p>
              <p className="py-2 text-center hover:text-green-600">
                Tissus de gants
              </p>
            </div>
          </div>
          <p className="cursor-pointer hover:text-green-600">À propos</p>
          <p className="cursor-pointer hover:text-green-600">Contact</p>
        </div>
        <div className="hidden max-lg:block">
          {openSidebar === false && (
            <img
              className="cursor-pointer"
              src={hamburger}
              alt="menu-hamburger"
              width={25}
              height={25}
              onClick={() => setOpenSidebar(true)}
            />
          ) }
        </div>
      </nav>

      <div className="hidden max-lg:block">
        {openSidebar && <SideHeader className="lg:hidden" />}
      </div>
    </header>
  );
};

export default Header;
