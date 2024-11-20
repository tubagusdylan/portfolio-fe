import Arduino from "@assets/icons/arduino.svg";
import Bootstrap from "@assets/icons/bootstrap.svg";
import CProgramming from "@assets/icons/c.svg";
import Cpp from "@assets/icons/cpp.svg";
import Easyeda from "@assets/icons/easyeda.png";
import Esp from "@assets/icons/esp.svg";
import Javascript from "@assets/icons/js.svg";
import NodeJS from "@assets/icons/nodejs.svg";
import Python from "@assets/icons/python.svg";
import React from "@assets/icons/react.svg";
import Tailwind from "@assets/icons/tailwind.svg";
import Hardware1 from "@assets/img/hardware_1.png";
import Hardware2 from "@assets/img/hardware_2.png";
import Hardware3 from "@assets/img/hardware_3.png";
import Software1 from "@assets/img/project1.png";
import Software2 from "@assets/img/project2.png";
import Software3 from "@assets/img/project3.png";
import Software4 from "@assets/img/project4.png";

type navItemHome = {
  path: string;
  text: string;
};

export const NAV_ITEM_HOME: navItemHome[] = [
  {
    path: "#home",
    text: "Home",
  },
  {
    path: "#about",
    text: "About",
  },
  {
    path: "#project",
    text: "Project",
  },
  {
    path: "#contact",
    text: "Contact",
  },
];

type skillImg = {
  src: string;
  text: string;
  category: string;
};

export const SKILL_IMG: skillImg[] = [
  {
    src: Arduino,
    text: "Arduino",
    category: "hardware",
  },
  {
    src: Bootstrap,
    text: "Bootstrap",
    category: "software",
  },
  {
    src: CProgramming,
    text: "C",
    category: "programming",
  },
  {
    src: Cpp,
    text: "C++",
    category: "programming",
  },
  {
    src: Easyeda,
    text: "EasyEDA",
    category: "hardware",
  },
  {
    src: Esp,
    text: "ESP32",
    category: "hardware",
  },
  {
    src: Javascript,
    text: "Javascript",
    category: "programming",
  },
  {
    src: NodeJS,
    text: "Node JS",
    category: "programming",
  },
  {
    src: Python,
    text: "Python",
    category: "programming",
  },
  {
    src: React,
    text: "React JS",
    category: "programming",
  },
  {
    src: Tailwind,
    text: "Tailwind CSS",
    category: "programming",
  },
];

type projectArray = {
  src: string;
  title: string;
  description: string;
  href?: string;
};

export const PROJECT_DATA: projectArray[] = [
  {
    src: Software1,
    title: "Monitoring Dashboard for Liquid Waste",
    description:
      "A dashboard that built with plain html, tailwind css, and js. Has a backend that built with express js and mysql database.",
    href: "https://monitor-limbah.vercel.app/",
  },
  {
    src: Software2,
    title: "Simple Quiz App",
    description: "A simple quiz app that built with React JS. This app get a quiz data from free public api.",
    href: "https://monitor-limbah.vercel.app/",
  },
  {
    src: Software3,
    title: "Simple Web App",
    description:
      "A web application that has frontend and backend. The frontend built with React JS and Bootstrap. The backend built with express js and mysql. This web implement jwt token for authentication.",
    href: "https://monitor-limbah.vercel.app/",
  },
  {
    src: Software4,
    title: "Simple E-Commerce App",
    description: "An e-commerce application built with Vue JS. This website get product data from public API. ",
    href: "https://monitor-limbah.vercel.app/",
  },
  {
    src: Hardware3,
    title: "Liquid Waste Monitoring",
    description:
      "A device can monitor ingredient of liquid waste. It has an indicator for warning user if one of the waste parameter is more than standard. ",
  },
  {
    src: Hardware1,
    title: "Flood Detection Prototype",
    description:
      "A prototype that can detect flood. It has two sensors, one for measure distance between water and the ground. And the another one is for detect the water it self.",
  },
  {
    src: Hardware2,
    title: "Energy Consumption Monitoring",
    description: "A prototype for monitoring energy consumption on a electronics hardware. It use PZEM-004t sensor.",
  },
];
