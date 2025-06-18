import React from "react";
import { BaseTextProps } from "./types-typography";
import { fontTokens, textColorClass } from "../../theme";
import { fontSizeClass, fontWeightClass, textAlignClass } from "../../theme";
import clsx from "clsx";

const BodyText: React.FC<BaseTextProps> = ({
  children,
  align = "left",
  color = "neutral",
  size = "body",
  weight = "normal",
  font = "body",
  italic = false,
  className = "",
}) => {
  return (
    <p
      className={clsx(
        "w-auto",
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
    </p>
  );
}

export default BodyText;