import React, { useState, useEffect } from "react";

interface TireSubstitutionCheckerProps {
  result: number;
  substituteResult: number;
}

interface SubstitutionInfoProps {
  formattedPercentage: string;
  compatibility: string;
}

const TireSubstitutionChecker: React.FC<TireSubstitutionCheckerProps> = ({
  result,
  substituteResult,
}) => {
  const [substitutionInfo, setSubstitutionInfo] =
    useState<SubstitutionInfoProps>({
      formattedPercentage: "",
      compatibility: "",
    });

  const calculateSubstituteResult = (): number => {
    return (1 - substituteResult / result) * -100;
  };

  const checkSubstituteValidity = (percentage: number): boolean => {
    return percentage >= -2 && percentage <= 1.5;
  };

  useEffect(() => {
    if (result > 0 && substituteResult > 0) {
      const calculatedPercentage = calculateSubstituteResult();
      const isValidSubstitute = checkSubstituteValidity(calculatedPercentage);

      const formattedPercentage = `${calculatedPercentage.toFixed(2)}%`;
      const compatibility = isValidSubstitute ? "TAK" : "NIE";

      setSubstitutionInfo({
        formattedPercentage,
        compatibility,
      });
    }
  }, [result, substituteResult]);

  return (
    <div
      className={`text-center mt-4 lg:mt-2 max-w-[410px] lg:max-w-auto max-sm:m-2 max-sm:pb-10 ${
        result > 0 && substituteResult > 0
          ? "flex flex-col items-center"
          : "hidden"
      }`}
    >
      <h3 className="pb-2 font-[600] uppercase my-4">
        Możliwość zastosowania zamiennika?
      </h3>
      <div
        className={`max-w-[450px] rounded-sm border-2 py-2 px-4 pb-3 text-white ${
          substitutionInfo.compatibility === "TAK"
            ? "bg-[#018524] border-[#006e1d]"
            : "bg-[#9e2727] border-[#832121]"
        } `}
      >
        <p className={`text-[28px] font-bold tracking-wider`}>
          {substitutionInfo.compatibility}
        </p>
        <p className="text-center">
          Różnica między zewnętrznymi średnicami{" "}
          <span className="font-bold underline">
            ({substitutionInfo.formattedPercentage})
          </span>{" "}
          opon {substitutionInfo.compatibility === "NIE" && "nie"} mieści się w
          zakresie +1,5% do -2%
        </p>
      </div>
    </div>
  );
};

export default TireSubstitutionChecker;
