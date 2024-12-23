import { FC } from "react";
import { FaRegTrashAlt, FaPencilAlt, FaPlus, FaLongArrowAltLeft } from "react-icons/fa";

interface ButtonProps {
  width?: string;
  isLoading?: boolean;
  type?: "add" | "edit" | "delete" | "back";
  buttonType?: "submit" | "button";
  variant: "primary" | "secondary" | "outline";
  children?: string;
  size?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ width, isLoading, type, children, size, buttonType, variant, onClick }) => {
  return (
    <button
      className={`${variant === "primary" ? "primary-btn" : variant === "secondary" ? "secondary-btn" : "outline-btn"} lg:text-${size} w-${width}`}
      onClick={onClick}
      type={buttonType}
      disabled={isLoading}>
      {type && (
        <span>
          {type === "add" ? (
            <FaPlus size={12} />
          ) : type === "edit" ? (
            <FaPencilAlt size={12} />
          ) : type === "delete" ? (
            <FaRegTrashAlt size={12} />
          ) : type === "back" ? (
            <FaLongArrowAltLeft size={14} />
          ) : (
            ""
          )}
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
