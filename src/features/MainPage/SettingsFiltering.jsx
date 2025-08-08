import SettingsFilteringComponent from "./SettingsFilteringComponent";

function SettingsFiltering() {
  return (
    <div className="flex gap-3 pt-6 items-center">
      <SettingsFilteringComponent children={"მაღალი"} />
      <SettingsFilteringComponent children={"დიზაინი"} />
      <SettingsFilteringComponent children={"ჯონ დოე"} />
      <button className="flex gap-1 text-gray-400 font-thin">გასუფთავება</button>
    </div>
  );
}

export default SettingsFiltering;
