import Logo from "@assets/img/logo.png";
import MenuCMS from "@components/MenuCMS";
import { FC } from "react";
import { useAppSelector } from "@services/hooks";
import { AuthState } from "@services/auth/state";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface HeaderProps {
  currentMenu: string;
  isShowNavbar: boolean;
  isShowMenuFloat: boolean;
  handleCurrentMenu: (menu: string) => void;
  handleShowNavbar: () => void;
  handleShowMenuFloat: () => void;
}

const Header: FC<HeaderProps> = ({ currentMenu, handleCurrentMenu, isShowMenuFloat, isShowNavbar, handleShowMenuFloat, handleShowNavbar }) => {
  const auth = useAppSelector((state) => state.auth);
  const { setLogoutUserState } = AuthState();

  return (
    <header className="w-full top-0 left-0 fixed bg-white z-50 shadow-sm">
      <nav className="flex items-center justify-between px-4 py-3 lg:p-0 relative w-full">
        <div className="flex items-center justify-center lg:w-[20%] lg:border lg:py-3">
          <img src={Logo} alt="DLN" width={50} />
          <h1 className="font-bold text-orange text-3xl lg:hidden">CMS</h1>
          <h1 className="font-bold text-orange text-lg hidden lg:block">Content Management</h1>
        </div>
        <div className="flex items-center lg:w-[80%] lg:justify-between lg:px-10">
          <div className="hidden lg:flex items-center gap-5">
            <RxHamburgerMenu size={25} className="text-grey cursor-pointer" />
            <h2 className="text-grey text-lg">{currentMenu}</h2>
          </div>
          <div className="flex items-center gap-1 lg:gap-5 cursor-pointer" onClick={handleShowMenuFloat}>
            <CgProfile size={30} className="text-grey" />
            <div>
              <p className="hidden lg:block text-grey font-semibold">{auth.profileName}</p>
              <p className="hidden lg:block text-grey text-sm">{auth.role}</p>
            </div>
            {!isShowMenuFloat ? <IoIosArrowDown className="text-grey" /> : <IoIosArrowUp className="text-grey" />}
          </div>
        </div>
        {isShowMenuFloat && (
          <div className="absolute top-20 right-4 lg:right-10  bg-white shadow-md">
            <div className="py-4 px-6 border-b border-grey lg:hidden">
              <p className="text-grey font-semibold">{auth.profileName}</p>
              <p className="text-grey text-sm">{auth.role}</p>
            </div>
            <div className="py-4 px-6 hover:bg-slate-100 hover:bg-opacity-30 cursor-pointer">
              <RiLogoutBoxLine className="text-grey inline-block mr-2" size={20} />
              <span className="text-grey" onClick={setLogoutUserState}>
                Log out
              </span>
            </div>
          </div>
        )}
      </nav>
      <nav
        className="px-4 py-3 border-t-2 border-b-2 border-grey border-opacity-50 hover:bg-grey hover:bg-opacity-10 cursor-pointer lg:hidden"
        onClick={handleShowNavbar}>
        <div className="flex items-center gap-3">
          {!isShowNavbar ? <IoIosArrowDown className="text-grey" /> : <IoIosArrowUp className="text-grey" />}
          <h2 className="text-grey">{currentMenu}</h2>
        </div>
      </nav>
      <nav className="lg:hidden">{isShowNavbar && <MenuCMS handleCurrentMenu={(menu) => handleCurrentMenu(menu)} />}</nav>
    </header>
  );
};

export default Header;
