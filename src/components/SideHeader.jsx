import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useMyContext } from "../ContextComp";
import { cross } from "../assets/icons";

const SideHeader = () => {
  const { openSidebar, setOpenSidebar } = useMyContext();

  return (
    <>
      <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
        <Sidebar
          collapsed={!openSidebar}
          onBackdropClic={() => setOpenSidebar(false)}
          toggled={openSidebar}
          backgroundColor="#bcf3ff"
          breakPoint="all"
          className={`transition-width duration-500`}
        >
          <Menu>
            <MenuItem> Documentation</MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
            <MenuItem> Examples</MenuItem>
          </Menu>
          <div className="flex justify-center mt-10 cursor-pointer">
          <img
            className="sb-button"
            src={cross}
            alt="close sidebar"
            width={30}
            onClick={() => setOpenSidebar(!openSidebar)}
          />
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
