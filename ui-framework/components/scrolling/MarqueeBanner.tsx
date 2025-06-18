"use client";

import React from "react";
import clsx from "clsx";
import {
  bgColorClass,
  displayClass,
  fontTokens,
  fontSizeClass,
  overflowClass,
  paddingXClass,
  paddingYClass,
  positionClass,
  textColorClass,
  widthClass,
} from "../../theme";
import { ScrollingProps } from "./types-scrolling";

const MarqueeBanner: React.FC<ScrollingProps> = ({
  message,
  speed = 15,
  bg = "none",
  color = "neutral",
  position = "relative",
  overflow = "hidden",
  width = "full",
  px,
  py,
  display = "inlineBlock",
  fontSize = "md",
  font = "display",
  className = "",
}) => {
  return (
    <div
      className={clsx(
        bgColorClass[bg],
        positionClass[position],
        overflowClass[overflow],
        widthClass[width],
        px && paddingXClass[px],
        py && paddingYClass[py],
        className
      )}
    >
      <div
        className={clsx(
          textColorClass[color],
          displayClass[display],
          fontSizeClass[fontSize],
          fontTokens[font],
          "whitespace-nowrap tracking-wide"
        )}
        style={{
          animation: `scroll-left ${speed}s linear infinite`,
        }}
      >
        {message}
      </div>
    </div>
  );
};

export default MarqueeBanner;
