import React, { useState } from "react";

import css from "./listItem.module.css";

const ListItem = ({ text }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <li
      className={css.li}
      onClick={() => {
        setIsDone(!isDone);
      }}
    >
      {text}
      {isDone ? " ✅" : " ❌"}
    </li>
  );
};

export default ListItem;
