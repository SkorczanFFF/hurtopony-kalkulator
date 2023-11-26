import React from "react";

interface TireInputSectionProps {
  width: number;
  profile: number;
  diameter: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  setProfile: React.Dispatch<React.SetStateAction<number>>;
  setDiameter: React.Dispatch<React.SetStateAction<number>>;
  disabled: boolean;
}

const TireInputSection: React.FC<TireInputSectionProps> = ({
  width,
  profile,
  diameter,
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
    <div className="flex max-sm:gap-3 gap-5 justify-center max-sm:flex-col">
      <label className="flex flex-col">
        Szerokość (mm):
        <select
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          disabled={disabled}
          className="bg-white p-1 mt-2 rounded-sm pl-2 max-sm:mt-1"
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
          className="bg-white p-1 mt-2 rounded-sm pl-2 max-sm:mt-1"
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
          className="bg-white p-1 mt-2 rounded-sm pl-2 max-sm:mt-1"
        >
          {diameterOptions}
        </select>
      </label>
    </div>
  );
};

export default TireInputSection;
