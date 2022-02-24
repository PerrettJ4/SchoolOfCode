import React from "react";
import { useThemeContext } from "../../themeContext";

const Item = ({ info }) => {
  console.log(info);
  const { name, category, quantity, image } = info;
  const [theme] = useThemeContext();
  console.log(theme);
  const textColor = theme ? "textlistlsd" : "textlist";
  return (
    <li
      className={`flex flex-row w-96 justify-center m-3 pl-5 pr-5 items-center content-evenly space-x-7 rounded-lg bg-${
        theme ? "itemlsd" : "item"
      }`}
    >
      <div>
        <img alt="item" src={image} className="h-20 mw-20 rounded-lg" />
      </div>
      <p className={`text-${textColor}`}>{name}</p>
      <div className="flex flex-col">
        <p className={`text-${textColor}`}>Category</p>
        <p className={`text-${textColor}`}>{category}</p>
      </div>
      <div className="flex flex-col">
        <button> + </button>
        <p className={`text-${textColor}`}>Quantity</p>
        <p className={`text-${textColor}`}>{quantity}</p>
        <button> - </button>
      </div>
    </li>
  );
};

export default Item;
