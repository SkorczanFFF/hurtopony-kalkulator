import React from "react";

interface DiameterInfoProps {
  result: number;
}

const DiameterInfo: React.FC<DiameterInfoProps> = ({ result }) => {
  const formattedDiameter = Math.round(result) > 0 && Math.round(result) + "mm";

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-2 text-center w-full mt-3">
        <div className="text-[18px] font-bold bg-gradient-to-r from-transparent via-white to-transparent py-1 h-[48px] tracking-wide">
          <h3 className="text-xs font-[400] non-italic">średnica opony</h3>
          <span className={`${!formattedDiameter ? "italic opacity-50" : ""}`}>
            {formattedDiameter ? formattedDiameter : "b.d."}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiameterInfo;
