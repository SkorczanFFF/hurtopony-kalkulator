import React from "react";

interface ButtonProps {
  width: number;
  profile: number;
  diameter: number;
  setResultCallback: React.Dispatch<React.SetStateAction<number>>;
  handleClick: (
    width: number,
    profile: number,
    diameter: number,
    setResultCallback: React.Dispatch<React.SetStateAction<number>>
  ) => void;
  label: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({
  width,
  profile,
  diameter,
  setResultCallback,
  handleClick,
  label,
  disabled,
}) => {
  return (
    <button
      className={`bg-blood-moon mt-2 xs:mt-3 text-white cursor-pointer hover:bg-redbox duration-150 text-[20px] tracking-[1px] h-[40px] border-[1px] border-blood-moon ${
        disabled
          ? "disabled:cursor-not-allowed disabled:hover:bg-blood-moon"
          : ""
      }`}
      onClick={() => handleClick(width, profile, diameter, setResultCallback)}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
