import { useState, FC } from "react";
import HamburgerMenu from "@components/HamburgerMenu";
import logo from "@assets/img/logo.png";
import { NAV_ITEM_HOME } from "@static/constant";

interface HeaderProps {
  navFixed: string;
}

const Header: FC<HeaderProps> = ({ navFixed }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const onToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <header className={`px-4 py-3 lg:px-24 xl:px-40 w-full top-0 left-0 ${navFixed} fixed bg-white z-50`}>
        <nav className="flex items-center justify-between">
          <div className="cursor-pointer">
            <img src={logo} alt="logo-dylan" width={50} />
          </div>
          <div className="hidden lg:flex gap-10 items-center text-lg">
            {NAV_ITEM_HOME.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="hover:text-orange hover:underline-offset-8 hover:underline transition-all duration-200 ease-in-out"
              >
                {item.text}
              </a>
            ))}
          </div>
          <div className="lg:hidden" onClick={onToggleMenu}>
            <HamburgerMenu toggleMenu={toggleMenu} />
          </div>
        </nav>
        <nav hidden={!toggleMenu} className="lg-hidden mb-4">
          <div className="flex flex-col gap-4 mt-4 ml-2 lg:hidden">
            {NAV_ITEM_HOME.map((item, index) => (
              <a
                key={index}
                href={item.path}
                onClick={onToggleMenu}
                className="hover:text-orange hover:underline-offset-8 hover:underline transition-all duration-200 ease-in-out"
              >
                {item.text}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
