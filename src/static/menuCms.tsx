import { FaUserCog, FaPager } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { ReactNode } from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { TbStars } from "react-icons/tb";
import PATH from "@config/path";

type menuCMS = {
  path: string;
  icon: ReactNode;
  menu: string;
};

export const MENU_CMS: menuCMS[] = [
  {
    path: PATH.DASHBOARD_PAGE,
    icon: <RxDashboard />,
    menu: "Dashboard",
  },
  {
    path: PATH.USERS_PAGE,
    icon: <FaUserCog />,
    menu: "Manage User",
  },
  {
    path: PATH.BLOGS_PAGE,
    icon: <FaPager />,
    menu: "Manage Blog",
  },
  {
    path: PATH.PROJECTS_PAGE,
    icon: <GoProjectRoadmap />,
    menu: "Manage Project",
  },
  {
    path: PATH.TESTI_PAGE,
    icon: <TbStars />,
    menu: "Manage Testimonie",
  },
];
