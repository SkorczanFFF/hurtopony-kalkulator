import React, { useState, useEffect } from "react";

interface TireSubstitutionCheckerProps {
  result: number;
  substituteResult: number;
}

interface SubstitutionInfoProps {
  formattedPercentage: string;
  compatibility: boolean;
}

const TireSubstitutionChecker: React.FC<TireSubstitutionCheckerProps> = ({
  result,
  substituteResult,
}) => {
  const [substitutionInfo, setSubstitutionInfo] =
    useState<SubstitutionInfoProps>({
      formattedPercentage: "",
      compatibility: false,
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
      const compatibility = isValidSubstitute ? true : false;

      setSubstitutionInfo({
        formattedPercentage,
        compatibility,
      });
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [result, substituteResult]);

  return (
    <div
      className={`text-center max-w-[360px] lg:max-w-[410px] m-5 mt-0 ${
        result > 0 && substituteResult > 0
          ? "flex flex-col items-center"
          : "hidden"
      }`}
    >
      <h3 className="font-[600] uppercase mx-2 my-6">
        Możliwość zastosowania zamiennika?
      </h3>
      <div
        className={`max-w-[450px] border-2 py-2 px-4 pb-3 text-white ${
          substitutionInfo.compatibility
            ? "bg-tropical-forest border-overgrown-temple"
            : "bg-red border-redbox"
        } `}
      >
        <p className={`text-[28px] font-bold tracking-wider`}>
          {substitutionInfo.compatibility ? "TAK" : "NIE"}
        </p>
        <p className="text-center">
          Różnica między zewnętrznymi średnicami opon{" "}
          <span className="font-bold underline">
            ({substitutionInfo.formattedPercentage})
          </span>{" "}
          {!substitutionInfo.compatibility && "nie"} mieści się w zakresie +1,5%
          do -2%
        </p>
      </div>
    </div>
  );
};

export default TireSubstitutionChecker;
