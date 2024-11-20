import { FC } from "react";

interface MenuProp {
  toggleMenu: boolean;
}

const HamburgerMenu: FC<MenuProp> = ({ toggleMenu }) => {
  const hamburgeClass = toggleMenu ? "hamburger-active" : "";

  return (
    <div className={`flex flex-col gap-2 cursor-pointer ${hamburgeClass}`}>
      <div className="hamburger-line origin-top-left"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line origin-bottom-left"></div>
    </div>
  );
};

export default HamburgerMenu;
