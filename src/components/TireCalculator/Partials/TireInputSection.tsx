import React from "react";

interface TireInputSectionProps {
  width: number;
  profile: number;
  diameter: number;
  result: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  setProfile: React.Dispatch<React.SetStateAction<number>>;
  setDiameter: React.Dispatch<React.SetStateAction<number>>;
  disabled: boolean;
}

const TireInputSection: React.FC<TireInputSectionProps> = ({
  width,
  profile,
  diameter,
  result,
  setWidth,
  setProfile,
  setDiameter,
  disabled,
}) => {
  const widthOptions: JSX.Element[] = [];
  for (let i: number = 125; i <= 355; i += 10) {
    widthOptions.push(
      <option key={i} value={i} disabled={disabled}>
        {i}
      </option>
    );
  }

  const profileOptions: JSX.Element[] = [];
  for (let i: number = 25; i <= 85; i += 5) {
    profileOptions.push(
      <option key={i} value={i} disabled={disabled}>
        {i}
      </option>
    );
  }

  const diameterOptions: JSX.Element[] = [];
  for (let i: number = 13; i <= 22; i += 1) {
    diameterOptions.push(
      <option key={i} value={i} disabled={disabled}>
        {i}
      </option>
    );
  }

  return (
    <div className="flex gap-5 justify-center">
      <label className="flex flex-col">
        Szerokość (mm):
        <select
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          disabled={disabled}
        >
          {widthOptions}
        </select>
      </label>
      <label className="flex flex-col">
        Profil (%):
        <select
          value={profile}
          onChange={(e) => setProfile(Number(e.target.value))}
          disabled={disabled}
        >
          {profileOptions}
        </select>
      </label>

      <label className="flex flex-col">
        Średnica (cale):
        <select
          value={diameter}
          onChange={(e) => setDiameter(Number(e.target.value))}
          disabled={disabled}
        >
          {diameterOptions}
        </select>
      </label>
      <h3 className="text-center">
        Średnica: <br />
        {Math.round(result)}mm
      </h3>
    </div>
  );
};

export default TireInputSection;
