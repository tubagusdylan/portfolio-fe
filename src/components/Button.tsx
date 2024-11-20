import { FC, ReactNode } from "react";

interface ButtonProp {
  href?: string;
  width?: string;
  status?: string;
  children: ReactNode;
}

const Button: FC<ButtonProp> = ({ href = "", width, status, children }) => {
  return (
    <>
      <a href={href}>
        <button
          className={`text-center lg:text-lg my-5 bg-orange text-white py-2 px-3 rounded-md hover:bg-dark-orange transition-all duration-300 ease-in-out w-${width}`}
          disabled={status === "submitting"}
        >
          {children}
        </button>
      </a>
    </>
  );
};

export default Button;
