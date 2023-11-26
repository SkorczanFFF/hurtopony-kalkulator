import React from "react";

interface TireSubstitutionCheckerProps {
  result: number;
  substituteResult: number;
}

const TireSubstitutionChecker: React.FC<TireSubstitutionCheckerProps> = ({
  result,
  substituteResult,
}) => {
  const calculateSubstituteResult = (
    substituteResult: number,
    result: number
  ): string => {
    //prettier-ignore
    const resultPercentage: number = (1 - (substituteResult / result)) * -100;
    const formattedResult: string = resultPercentage.toFixed(2) + "%";
    return formattedResult;
  };

  const calculateSubstituteValidity = (): string => {
    if (
      substituteResult >= result * 0.98 &&
      substituteResult <= result * 1.015
    ) {
      return "TAK";
    } else {
      return "NIE";
    }
  };

  return (
    <div className="flex flex-col text-center">
      {result > 0 && substituteResult > 0 && (
        <>
          <p className="text-[#ce3333] text-[20px]">
            {calculateSubstituteValidity()}
          </p>
          <p>{calculateSubstituteResult(substituteResult, result)}</p>
        </>
      )}
    </div>
  );
};

export default TireSubstitutionChecker;
