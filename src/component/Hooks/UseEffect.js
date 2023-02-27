import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  const initalData = 0;
  const [myNum, setmyNum] = useState(initalData);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });
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
      </div>
    </>
  );
};

export default UseEffect;
