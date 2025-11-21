import React, { useState } from "react";
import "./style.css";
import Menu from "./menuAPI";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [...new Set(Menu.map((curElem) => curElem.category)), "All"];

const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);

  const filterItem = (category) => {
    const filteredData = category === "All" 
      ? Menu 
      : Menu.filter((curElem) => curElem.category === category);
    setmenuData(filteredData);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={uniqueList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
