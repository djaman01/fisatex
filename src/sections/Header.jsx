import { hamburger } from "../assets/icons";
import { fisatexLogo } from "../assets/images";

const Header = () => {
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
          <p className="cursor-pointer">Accueil</p>
          <div className="group relative">
            <p className="cursor-pointer">Produits</p>
            <div className="left-[-50px] absolute hidden w-[180px] cursor-pointer rounded-lg bg-white px-2 py-5 font-serif text-gray-500 shadow-xl ring-1 ring-slate-900/5 group-hover:block">
              <p className="text-center">Gants de Gommage</p>
              <p className="py-2 text-center">Tissus de gants</p>
            </div>
          </div>
          <p className="cursor-pointer">À propos</p>
          <p className="cursor-pointer">Contact</p>
        </div>
        <div className="lg:hidden">
          <img src={hamburger} alt="menu-hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
