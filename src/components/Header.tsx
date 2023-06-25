import { InfoIcon, StatIcon } from "./Icons";

export default function Header({ handleInfo, handleStat }): JSX.Element {
  return (
    <div className="hold-head w-3/6 flex items-center pl-[22px] pr-[27px]">
      <button className="flex ico-info">
        <InfoIcon onClick={handleInfo} />
      </button>
      <h1 className="flex header-title uppercase">Wordle</h1>
      <button className="flex items-center ico-options">
        <StatIcon onClick={handleStat} />
        <span>Modo</span>
      </button>
    </div>
  );
}
