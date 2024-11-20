import MenuCMS from "@components/MenuCMS";
import { FC } from "react";

interface SidebarProps {
  handleCurrentMenu: (menu: string) => void;
}

const Sidebar: FC<SidebarProps> = ({ handleCurrentMenu }) => {
  return (
    <>
      <div className="hidden lg:block lg:w-[20%] lg:h-[100vh] bg-white left-0 top-0 border fixed">
        <div className="mt-[75.6px]">
          <MenuCMS handleCurrentMenu={(menu) => handleCurrentMenu(menu)} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
