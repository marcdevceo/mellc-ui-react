import React from "react";
import clsx from "clsx";
import {
  fontSizeClass,
  fontTokens,
  fontWeightClass,
  textAlignClass,
  textColorClass,
} from "../../theme";
import { BaseTextProps } from "./types-typography";

const CaptionText: React.FC<BaseTextProps> = ({
  children,
  align = "left",
  color = "neutral",
  size = "caption",
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
};

export default CaptionText;
