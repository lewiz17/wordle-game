import { InfoIcon, StatIcon } from "./Icons";
import { ThemeToggle } from "./themeToggle";

export default function Header({ handleInfo, handleStat }): JSX.Element {
  return (
    <div className="hold-head bg-toolbar w-3/6 flex items-center px-[22px]">
      <button className="flex ico-info">
        <InfoIcon onClick={handleInfo} />
      </button>
      <h1 className="flex header-title text-foreground uppercase">Wordle</h1>
      <button className="flex items-center ico-options">
        <StatIcon onClick={handleStat} />
      </button>
      <ThemeToggle />
    </div>
  );
}
