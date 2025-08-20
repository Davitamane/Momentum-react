import { useContext } from "react";
import Button from "../../ui/Button";
import FilterCard from "./FilterCard";
import { MainPageContext } from "../../context/MainPageContext";

function FilterContainer({ data, type }) {
  const { dispatch } = useContext(MainPageContext);

  return (
    <div className="absolute z-10 bg-white border border-main mt-2 p-5 rounded-xl w-158.5 shadow-md flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        {data.map((el) => (
          <FilterCard data={el} key={el.id} type={type} />
        ))}
      </div>
      <div className="flex justify-end">
        <div className="flex justify-end gap-3">
          <Button onClick={() => dispatch({ type: "APPLY_FILTERS" })}>
            არჩევა
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FilterContainer;
