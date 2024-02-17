import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useMyContext } from "../ContextComp";
import { cross } from "../assets/icons";

const SideHeader = () => {
  const { openSidebar, setOpenSidebar } = useMyContext();

  return (
    <>
      <div className="prose" style={{ display: "flex", height: "100%", minHeight: "400px" }}>
        <Sidebar
          collapsed={!openSidebar}
          onBackdropClic={() => setOpenSidebar(false)}
          toggled={openSidebar}
          backgroundColor="#bcf3ff"
          breakPoint="all"
        >
          <Menu>
            <MenuItem> Documentation</MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
            <MenuItem> Examples</MenuItem>
          </Menu>
          <div className="mt-10 flex cursor-pointer justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              src={cross}
              alt="close sidebar"
              width={30}
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              Sortie
            </button>
          </div>
        </Sidebar>
        <main style={{ display: "flex", padding: 10 }}>
          <div></div>
        </main>
      </div>
    </>
  );
};

export default SideHeader;
