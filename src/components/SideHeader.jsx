import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { IoHomeOutline } from "react-icons/io5";
import { RiProductHuntLine } from "react-icons/ri";
import { BsInfoSquare } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const SideHeader = () => {

  const [toggled, setToggled] = useState(false);

  return (
    <>
      <div className="prose" style={{ display: "flex", height: "100%" }}>
        <Sidebar
          backgroundColor="#ededed"
          breakPoint="all"
          onBackdropClick={() => setToggled(false)} //permet de mettre faux quand on clique hors de la sidebar
          toggled={toggled}
          transitionDuration={600}
        >
          <Menu  className="mt-10">
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
              <MenuItem component={<Link to="/KitEtFrotte" />}>
                {" "}
                Kit Visage Et Frotte-Dos{" "}
              </MenuItem>
              <MenuItem component={<Link to="/Sandales" />}>
                {" "}
                Sandales Hammam{" "}
              </MenuItem>
            </SubMenu>
            <MenuItem icon={<BsInfoSquare />} component={<Link to="/about" />}>
              {" "}
              À propos{" "}
            </MenuItem>
            <MenuItem
              icon={<MdOutlineContactPhone size={18} />}
              component={<Link to="/contactUs" />}
            >
              Contact
            </MenuItem>
          </Menu>
        </Sidebar>
        {/* Le npm est codé de tel sorte à ce que le bouton apparaisse seul, puis quand on appuie la sidebar apparait */}
        <button className="cursor-pointer" onClick={() => setToggled(!toggled)}>
          {toggled ? <RxCross1 size={28} /> : <RxHamburgerMenu size={28} />}{" "}
          {/* //Si toggled==true fait apparaitre la Croix, sinon le menu Hamburger*/}
        </button>
      </div>
    </>
  );
};

export default SideHeader;
