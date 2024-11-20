import { FaLinkedinIn, FaGithub, FaYoutube, FaTiktok } from "react-icons/fa";
import { NAV_ITEM_HOME } from "@static/constant";

const Footer = () => {
  return (
    <>
      <footer className="px-4 pt-16 pb-12 lg:px-24 xl:px-40 w-full bg-blue text-white">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-40 xl:gap-72">
          <div>
            <h1 className="text-3xl font-bold tracking-wider mb-3">DLN Tech</h1>
            <h2 className="text-xl font-semibold text-orange opacity-95 mb-2">Get in touch</h2>
            <p>tubagus.dylanr@gmail.com</p>
            <p className="text-sm">Bekasi, West Java</p>
            <p className="text-sm">17510</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Category</h2>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-orange">
                <a href="#">Life Story</a>
              </li>
              <li className="hover:text-orange">
                <a href="#">Electronics</a>
              </li>
              <li className="hover:text-orange">
                <a href="#">Information Technologies</a>
              </li>
              <li className="hover:text-orange">
                <a href="#">Finance</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Navigation</h2>
            <ul className="flex flex-col gap-2">
              {NAV_ITEM_HOME.map((item, index) => (
                <li className="hover:text-orange" key={index}>
                  <a href={item.path}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full mx-auto border-t-white border-t-2 border-opacity-50 mt-10 pt-10">
          <div className="flex justify-center items-center gap-3">
            <a className="socmed-style" href="#">
              <FaLinkedinIn size={20} />
            </a>
            <a className="socmed-style" href="#">
              <FaGithub size={20} />
            </a>
            <a className="socmed-style" href="#">
              <FaYoutube size={20} />
            </a>
            <a className="socmed-style" href="#">
              <FaTiktok size={20} />
            </a>
          </div>
          <p className="text-center mt-6 text-sm">Created with ❤️ by Tubagus Dylan Rachmat</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
