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
      <div
        className="prose"
        style={{ display: "flex", height: "100%", minHeight: "400px" }}
      >
        <Sidebar
          backgroundColor="#ededed"
          breakPoint="all" 
          transitionDuration={500} 
          toggled={openSidebar}
        >
          <Menu transitionDuration={300}>
            <MenuItem
              component={<Link to="/" />}
              icon={<IoHomeOutline size={18} />}
            >
              Accueil
            </MenuItem>

            <SubMenu icon={<RiProductHuntLine size={20} />} label="Produits">
              <MenuItem> Gants</MenuItem>
              <MenuItem> Tissus Gants</MenuItem>
            </SubMenu>
            <MenuItem icon={<BsInfoSquare />}> À propos </MenuItem>
            <MenuItem icon={<MdOutlineContactPhone size={18} />}>
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
