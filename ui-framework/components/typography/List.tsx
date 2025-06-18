import React from "react";
import clsx from "clsx";
import { ListsProps } from "./types-typography";
import { textColorClass } from "../../theme";

const List = <T,>({
  color = "neutral",
  lists,
  renderItem,
}: ListsProps<T>): React.ReactElement => {
  return (
    <ul className={clsx("list-disc pl-6", textColorClass[color])}>
      {lists.map((item, index) => renderItem(item, index))}
    </ul>
  );
};

export default List;
