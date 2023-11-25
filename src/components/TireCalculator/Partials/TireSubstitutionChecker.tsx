import React from "react";

interface TireSubstitutionCheckerProps {
  result: number;
  substituteResult: number;
}

const TireSubstitutionChecker: React.FC<TireSubstitutionCheckerProps> = ({
  result,
  substituteResult,
}) => {
  const calculateSubstituteResult = (): string => {
    const resultPercentage: number = (1 - substituteResult / result) * -100;
    return resultPercentage.toFixed(2) + "%";
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
          <p>{calculateSubstituteValidity()}</p>
          <p>{calculateSubstituteResult()}</p>
        </>
      )}
    </div>
  );
};

export default TireSubstitutionChecker;
