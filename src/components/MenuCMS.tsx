import { NavLink } from "react-router-dom";
import { MENU_CMS } from "@static/menuCms";
import { FC } from "react";

interface MenuCMSProps {
  handleCurrentMenu: (menu: string) => void;
}

const MenuCMS: FC<MenuCMSProps> = ({ handleCurrentMenu }) => {
  return (
    <div>
      {MENU_CMS.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          onClick={() => handleCurrentMenu(item.menu)}
          className="block pl-12 lg:pl-10 py-3 text-grey hover:bg-orange hover:bg-opacity-20 hover:border-r-orange hover:border-r-8"
        >
          <div className="flex items-center gap-2">
            {item.icon}
            {item.menu}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default MenuCMS;
