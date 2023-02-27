import React, { useState } from "react";
import "./style.css";

const UseState = () => {
  const initalData = 0;
  const [myNum, setmyNum] = useState(initalData);

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setmyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          className="button2"
          onClick={() => (myNum > 0 ? setmyNum(myNum - 1) : setmyNum(0))}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
