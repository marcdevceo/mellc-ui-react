import React from "react";
import { BaseTextProps } from "./types-typography";
import { fontTokens, textColorClass } from "../../theme";
import { fontSizeClass, fontWeightClass, textAlignClass } from "../../theme";
import clsx from "clsx";

const Subtitle: React.FC<BaseTextProps> = ({
  children,
  align = "left",
  color = "secondary",
  size = "subtitle",
  weight = "semibold",
  font = "heading",
  italic = false,
  className = "",
}) => {
  return (
    <h2
      className={clsx(
        align === "left" ? "w-auto" : "w-full",
        fontSizeClass[size],
        fontTokens[font],
        fontWeightClass[weight],
        textColorClass[color],
        textAlignClass[align],
        italic && "italic",
        className
      )}
    >
      {children}
    </h2>
  );
}

export default Subtitle;