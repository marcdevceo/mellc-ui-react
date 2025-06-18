import React from "react";
import { BaseTextProps } from "./types-typography";
import { fontTokens, textColorClass } from "../../theme";
import { fontSizeClass, fontWeightClass, textAlignClass } from "../../theme";
import clsx from "clsx";

const Title: React.FC<BaseTextProps> = ({
  children,
  align = "center",
  color = "primary",
  size = "title",
  weight = "bold",
  font = "heading",
  italic,
  className = "",
}) => {
  return (
    <h1
      className={clsx(
        align === "left" ? "w-auto" : "w-full",
        fontSizeClass[size],
        fontWeightClass[weight],
        fontTokens[font],
        textColorClass[color],
        textAlignClass[align],
        italic && "italic",
        className
      )}
    >
      {children}
    </h1>
  );
}

export default Title;