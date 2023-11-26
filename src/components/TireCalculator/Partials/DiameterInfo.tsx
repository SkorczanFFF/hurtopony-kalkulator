import React from "react";

interface DiameterInfoProps {
  result: number;
}

const DiameterInfo: React.FC<DiameterInfoProps> = ({ result }) => {
  const formattedDiameter =
    Math.round(result) === 0 ? "???" : Math.round(result) + "mm";

  return (
    <h3 className="text-center mt-2">
      Średnica opony:{" "}
      <span className="text-[18px] font-bold">{formattedDiameter}</span>
    </h3>
  );
};

export default DiameterInfo;
