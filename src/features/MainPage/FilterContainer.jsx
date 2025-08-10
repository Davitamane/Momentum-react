import Button from "../../ui/Button";
import FilterCard from "./FilterCard";

function FilterContainer({ test }) {
  console.log(test);
  return (
    <div className="absolute z-10 bg-white border border-main mt-2 p-5 rounded-xl w-158.5 shadow-md flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <FilterCard />
        <FilterCard />
        <FilterCard />
      </div>
      <div className="flex justify-end">
        <Button type="rounded">არჩევა</Button>
      </div>
    </div>
  );
}

export default FilterContainer;
