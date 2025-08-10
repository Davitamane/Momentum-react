import { useState } from "react";
import checkEmpty from "../../assets/checkEmpty.svg";
import checkFull from "../../assets/check.svg";

function FilterCard() {
  const [check, setCheck] = useState(false);

  return (
    <button className="flex gap-3" onClick={() => setCheck(!check)}>
      {check ? (
        <img src={checkFull} className="size-6" />
      ) : (
        <img src={checkEmpty} className="size-6" />
      )}

      <p>მაღალი</p>
    </button>
  );
}

export default FilterCard;
