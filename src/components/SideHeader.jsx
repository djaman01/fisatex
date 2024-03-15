import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useMyContext } from "../ContextComp";
import { cross } from "../assets/icons";
import { IoHomeOutline } from "react-icons/io5";
import { RiProductHuntLine } from "react-icons/ri";
import { BsInfoSquare } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const SideHeader = () => {
  const { openSidebar, setOpenSidebar } = useMyContext();

  return (
    <>
      <div className="prose" style={{ display: "flex", height: "100%" }}>
        <Sidebar
          backgroundColor="#ededed"
          breakPoint="all"
          onBackdropClick={() => setOpenSidebar(false)} //permet de mettre faux quand on clique hors de la sidebar
          toggled={openSidebar}
          transitionDuration={5000}
        >
          <Menu>
            <MenuItem
              component={<Link to="/" />}
              icon={<IoHomeOutline size={18} />}
            >
              Accueil
            </MenuItem>

            <SubMenu icon={<RiProductHuntLine size={20} />} label="Produits">
              <MenuItem component={<Link to="/gants" />}>
                Gants de gommage
              </MenuItem>
              <MenuItem component={<Link to="/KitEtFrotte" />}> Kit Visage Et Frotte-Dos </MenuItem>
              <MenuItem component={<Link to="/Sandales" />}> Sandales Hammam </MenuItem>
            </SubMenu>
            <MenuItem icon={<BsInfoSquare />}> À propos </MenuItem>
            <MenuItem icon={<MdOutlineContactPhone size={18} />} component={<Link to="/contactUs" />}>
              Contact
            </MenuItem>
          </Menu>
          <div className="mt-10 flex cursor-pointer justify-center">
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 active:bg-blue-700"
              src={cross}
              alt="close sidebar"
              width={30}
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              Sortie
            </button>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default SideHeader;
