import React from "react";
import { IconType } from "react-icons";
import { FaReact } from "react-icons/fa";
type ButtonProps = {
  // onSubmit: (e:React.MouseEvent<HTMLButtonElement>)=> void
  btnLabel: string;
  rounded: string;
  px: string;
  py: string;
  size: string;
  icon?: IconType;
  // outLine?: boolean;
  // icon?: IconType
};

const Button: React.FC<ButtonProps> = ({
  // onSubmit,
  btnLabel,
  rounded,
  py,
  px,
  size,
  icon: Icon,
  // outLine,
  // icon:Icon
}) => {
  return (
    <button
    style={{ background: 'linear-gradient(105.26deg, #3E06D6 0%, #901BB7 100%)'}}
      className={`flex gap-2 items-center  hover:opacity-90 text-white  text-${size} ${rounded} py-${py} px-${px} my-6 `}
    >
      {Icon && <Icon size={15} />}

      {btnLabel}
    </button>
  );
};

export default Button;


