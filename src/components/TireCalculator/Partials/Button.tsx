import React from "react";

interface CalculateButtonProps {
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

const CalculateButton: React.FC<CalculateButtonProps> = ({
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
      className={`bg-[#ff0000] mt-4 text-white hover:cursor-pointer hover:brightness-125 duration-150 font-[500] p-1 text-xl rounded-sm ${
        disabled && "disabled:cursor-not-allowed disabled:hover:brightness-100"
      }`}
      onClick={() => handleClick(width, profile, diameter, setResultCallback)}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default CalculateButton;
