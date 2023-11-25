import React, { useEffect, useState } from "react";
import Button from "./Partials/Button";
import TireInputSection from "./Partials/TireInputSection";
import TireSubstitutionChecker from "./Partials/TireSubstitutionChecker";

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
    const tireDiameter: number =
      width * (profile / 100) * 2 * 1.04 + 25.4 * diameter;
    setResultCallback(Math.round(tireDiameter));
  };

  useEffect(() => {
    if (result !== 0 || result == null) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [result, disabled]);

  return (
    <div className="flex flex-col w-full p-10 items-center">
      <h2 className="text-center">Kalkulator opon</h2>
      <div className="flex flex-col justify-center bg-slate-300 max-w-[600px] p-5">
        <TireInputSection
          width={width}
          profile={profile}
          diameter={diameter}
          result={result}
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
      </div>
      <div
        className={`flex flex-col justify-center bg-slate-400 max-w-[600px] p-5 ${
          disabled && "opacity-70"
        }`}
      >
        <TireInputSection
          width={substituteWidth}
          profile={substituteProfile}
          diameter={substituteDiameter}
          result={substituteResult}
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
      </div>
      <TireSubstitutionChecker
        result={result}
        substituteResult={substituteResult}
      />
    </div>
  );
};

export default TireCalculator;
