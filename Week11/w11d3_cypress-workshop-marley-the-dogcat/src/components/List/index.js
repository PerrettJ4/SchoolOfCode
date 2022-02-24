import React from "react";

import css from "./list.module.css";

import ListItem from "../ListItem";

const List = ({ list }) => {
  return (
    <ol className={css.list}>
      {list.map(({ text, id }) => (
        <ListItem key={id} text={text} />
      ))}
    </ol>
  );
};

export default List;
