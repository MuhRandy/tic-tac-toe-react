import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setValue("X");
  };
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
