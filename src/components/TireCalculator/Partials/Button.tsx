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
      className="bg-[#920000] mt-2 text-white"
      onClick={() => handleClick(width, profile, diameter, setResultCallback)}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default CalculateButton;
