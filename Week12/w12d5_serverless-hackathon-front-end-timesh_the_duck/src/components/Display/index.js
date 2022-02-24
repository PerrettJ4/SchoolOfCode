import React, { useState, useEffect } from "react";
import Item from "../Item";
import { useThemeContext } from "../../themeContext";

const Display = ({ refresh }) => {
  const [inventory, setInventory] = useState([]);
  const [LSDtheme] = useThemeContext();

  useEffect(() => {
    async function getItems() {
      const res = await fetch(
        "https://i4hdnof984.execute-api.us-east-1.amazonaws.com/dev/items"
      );
      const data = await res.json();
      console.log(data);
      setInventory(data);
    }
    getItems();
  }, [refresh]);

  return (
    <div className={`bg-${LSDtheme ? "listlsd" : "list"}`}>
      <h3 className={`text-${LSDtheme ? "textlistlsd" : "textlist"}`}>
        Inventory
      </h3>
      {inventory.map((item) => {
        return <Item info={item} />;
      })}
    </div>
  );
};

export default Display;
