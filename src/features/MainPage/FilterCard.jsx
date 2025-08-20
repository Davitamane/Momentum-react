import { useContext } from "react";
import checkEmpty from "../../assets/checkEmpty.svg";
import checkFull from "../../assets/check.svg";
import { MainPageContext } from "../../context/MainPageContext";

function FilterCard({ data, type }) {
  const { dispatch, filters } = useContext(MainPageContext);

  // derive checked state from temp
  const isChecked =
    type === "employee"
      ? filters.temp.employee === data.id
      : filters.temp[type].includes(data.id);

  return (
    <button
      className="flex gap-3"
      onClick={() => dispatch({ type: `toggle_${type}`, payload: data.id })}
    >
      <img src={isChecked ? checkFull : checkEmpty} className="size-6" />

      {type === "employee" ? (
        <div className="flex items-center gap-2">
          <img
            src={data.avatar}
            alt={data.name}
            className="size-7 rounded-full object-cover object-center"
          />
          <p>
            {data.name} {data.surname}
          </p>
        </div>
      ) : (
        <p>{data.name}</p>
      )}
    </button>
  );
}
export default FilterCard;
