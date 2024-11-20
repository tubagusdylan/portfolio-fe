import { FC, ReactNode, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface TemplateProp {
  children: ReactNode;
}

const Template: FC<TemplateProp> = ({ children }) => {
  const [navFixed, setnavFixed] = useState("");

  const handleNav = () => {
    window.onscroll = () => {
      window.scrollY > 0 ? setnavFixed("navbar-fixed") : setnavFixed("");
    };
  };

  useEffect(() => {
    handleNav();
  }, []);

  return (
    <>
      <Header navFixed={navFixed} />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Template;
