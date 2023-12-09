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
      <option
        key={i}
        value={i}
        disabled={disabled}
        className="hover:bg-strong-grey"
      >
        {i}
      </option>
    );
  }

  return (
    <div className="flex gap-3 justify-center xs:flex-col">
      <label className="flex flex-col w-full">
        Szerokość
        <select
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          disabled={disabled}
          className="bg-white py-2 mt-1 px-2 cursor-pointer border-grey border-[1px] rounded-[3px] shadow-[inset_0_4px_3px_rgba(226,226,226,1)]"
        >
          {widthOptions}
        </select>
      </label>
      <label className="flex flex-col w-full">
        Profil
        <select
          value={profile}
          onChange={(e) => setProfile(Number(e.target.value))}
          disabled={disabled}
          className="bg-white py-2 mt-1 px-2 cursor-pointer border-grey border-[1px] rounded-[3px] shadow-[inset_0_4px_3px_rgba(226,226,226,1)]"
        >
          {profileOptions}
        </select>
      </label>

      <label className="flex flex-col w-full">
        Średnica
        <select
          value={diameter}
          onChange={(e) => setDiameter(Number(e.target.value))}
          disabled={disabled}
          className="bg-white py-2 mt-1 px-2 cursor-pointer border-grey border-[1px] rounded-[3px] shadow-[inset_0_4px_3px_rgba(226,226,226,1)]"
        >
          {diameterOptions}
        </select>
      </label>
    </div>
  );
};

export default TireInputSection;
