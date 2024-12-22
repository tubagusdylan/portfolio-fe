import { FC } from "react";
import { FaRegTrashAlt, FaPencilAlt, FaPlus } from "react-icons/fa";

interface ButtonProps {
  width?: string;
  isLoading?: boolean;
  type?: "add" | "edit" | "delete";
  children?: string;
  size?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ width, isLoading, type, children, size, onClick }) => {
  return (
    <button
      className={`flex gap-x-2 items-center text-center lg:text-${size} bg-orange text-white py-2 px-3 rounded-md hover:bg-dark-orange transition-all duration-300 ease-in-out w-${width}`}
      onClick={onClick}
      disabled={isLoading}>
      <span>{type === "add" ? <FaPlus size={14} /> : type === "edit" ? <FaPencilAlt size={12} /> : type === "delete" ? <FaRegTrashAlt /> : ""}</span>
      {children}
    </button>
  );
};

export default Button;
