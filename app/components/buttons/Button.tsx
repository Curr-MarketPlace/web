import React from "react";
import { IconType } from "react-icons";
type ButtonProps = {
  // onSubmit: (e:React.MouseEvent<HTMLButtonElement>)=> void
  btnLabel: string;
  rounded: string;
  size: string;
  icon?: IconType;
  mainButton:boolean;
  // outLine?: boolean;
  // icon?: IconType
};

const Button: React.FC<ButtonProps> = ({
  // onSubmit,
  btnLabel,
  rounded,
  size,
  icon: Icon,
  mainButton
  // outLine,
  // icon:Icon
}) => {
  return (
    <button
    style={{ background: 'linear-gradient(105.26deg, #3E06D6 0%, #901BB7 100%)'}}
      className={`flex gap-2 items-center  hover:opacity-90 text-white  
      !text-${size} ${rounded} ${mainButton?`py-2 px-6`:`py-1 px-4`} my-6 `}
    >
      {Icon && <Icon size={15} />}

      {btnLabel}
      
    </button>
  
  );
  
};

export default Button;


