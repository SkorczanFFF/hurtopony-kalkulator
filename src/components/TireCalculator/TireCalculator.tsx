import React, { useEffect, useState } from "react";
import TireInputSection from "./Partials/TireInputSection";
import Button from "./Partials/Button";
import TireSubstitutionChecker from "./Partials/TireSubstitutionChecker";
import DiameterInfo from "./Partials/DiameterInfo";

const TireCalculator: React.FC = () => {
  const [width, setWidth] = useState<number>(195);
  const [profile, setProfile] = useState<number>(65);
  const [diameter, setDiameter] = useState<number>(15);
  const [result, setResult] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(true);

  const [substituteWidth, setSubstituteWidth] = useState<number>(225);
  const [substituteProfile, setSubstituteProfile] = useState<number>(45);
  const [substituteDiameter, setSubstituteDiameter] = useState<number>(17);
  const [substituteResult, setSubstituteResult] = useState<number>(0);

  const calculateTireDiameter = (
    width: number,
    profile: number,
    diameter: number,
    setResultCallback: React.Dispatch<React.SetStateAction<number>>
  ): void => {
    //prettier-ignore
    const tireDiameter: number =
      ((width * profile) / 100 * 2) * 1.04 + 25.4 * diameter;
    setResultCallback(tireDiameter);
  };

  useEffect(() => {
    setDisabled(result === 0);
  }, [result]);

  return (
    <div className="flex flex-col w-full pt-10 items-center min-h-[100vh] h-[100%]">
      <h1 className="text-center text-[26px] md:text-[32px] italic font-[600] tracking-wide mb-8 mx-2">
        KOMPATYBILNOŚĆ ZAMIENNIKA
      </h1>
      <div className="flex flex-col lg:flex-row gap-5 p-5 bg-white border-[#e4e4e4] border-[1px] max-sm:w-full sm:w-[411px] md:w-auto overflow-hidden">
        <div className="flex flex-col justify-center bg-[#eceeef] p-5 rounded-sm pb-3">
          <h2 className="text-[20px] mb-2">AKTUALNY ROZMIAR</h2>
          <TireInputSection
            width={width}
            profile={profile}
            diameter={diameter}
            setWidth={setWidth}
            setProfile={setProfile}
            setDiameter={setDiameter}
            disabled={false}
          />
          <Button
            width={width}
            profile={profile}
            diameter={diameter}
            setResultCallback={setResult}
            handleClick={calculateTireDiameter}
            label="PRZELICZ"
            disabled={false}
          />
          <DiameterInfo result={result} />
        </div>
        <div
          className={`flex flex-col justify-center bg-[#eceeef] p-5 rounded-sm pb-3 ${
            disabled && "opacity-50"
          }`}
        >
          <h2 className="text-[20px] mb-2">ROZMIAR ZAMIENNIKA</h2>
          <TireInputSection
            width={substituteWidth}
            profile={substituteProfile}
            diameter={substituteDiameter}
            setWidth={setSubstituteWidth}
            setProfile={setSubstituteProfile}
            setDiameter={setSubstituteDiameter}
            disabled={disabled}
          />
          <Button
            width={substituteWidth}
            profile={substituteProfile}
            diameter={substituteDiameter}
            setResultCallback={setSubstituteResult}
            handleClick={calculateTireDiameter}
            label="SPRAWDŹ"
            disabled={disabled}
          />
          <DiameterInfo result={substituteResult} />
        </div>
      </div>
      <TireSubstitutionChecker
        result={result}
        substituteResult={substituteResult}
      />
    </div>
  );
};

export default TireCalculator;
