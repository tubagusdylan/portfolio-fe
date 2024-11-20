import { FC, ReactNode, useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { getLocalStorage, setLocalStorage } from "@utils/localStorage";

interface TemplateProp {
  children: ReactNode;
}

const Template: FC<TemplateProp> = ({ children }) => {
  const [currentMenu, setCurrentMenu] = useState("");
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const [isShowMenuFloat, setIsShowMenuFloat] = useState(false);

  const handleCurrentMenu = (menu: string) => {
    setCurrentMenu(menu);
    setLocalStorage("currentMenu", menu);
    setIsShowNavbar(false);
  };

  useEffect(() => {
    if (!getLocalStorage("currentMenu")) {
      setLocalStorage("currentMenu", "Dashboard");
    }
    const menu: string | null = getLocalStorage("currentMenu");
    if (menu) {
      setCurrentMenu(menu);
    }
  }, [currentMenu]);

  return (
    <>
      <Header
        currentMenu={currentMenu}
        handleCurrentMenu={(menu) => handleCurrentMenu(menu)}
        isShowNavbar={isShowNavbar}
        isShowMenuFloat={isShowMenuFloat}
        handleShowMenuFloat={() => setIsShowMenuFloat((prev) => !prev)}
        handleShowNavbar={() => setIsShowNavbar((prev) => !prev)}
      />
      <div className="lg:flex w-full">
        <Sidebar handleCurrentMenu={(menu) => handleCurrentMenu(menu)} />
        <div className="lg:w-[80%] lg:mt-28 lg:ml-[20%] lg:px-10">{children}</div>
      </div>
    </>
  );
};

export default Template;
