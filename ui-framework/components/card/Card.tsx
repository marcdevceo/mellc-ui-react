import React from "react";
import clsx from "clsx";
import { BaseCardProps } from "./types-cards";
import { bgColorClass, marginClass, marginXClass, marginYClass, paddingClass, paddingXClass, paddingYClass } from "../../theme";

const Card: React.FC<BaseCardProps> = ({
  children,
  bg = "accent",
  margin,
  mx,
  my,
  padding,
  px,
  py,
  rounded = true,
  shadow = true,
  className = "",
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "h-full w-full flex-col",
        margin && marginClass[margin],
        mx && marginXClass[mx],
        my && marginYClass[my],
        padding && paddingClass[padding],
        px && paddingXClass[px],
        py && paddingYClass[py],
        bgColorClass[bg],
        rounded && "rounded-xl",
        shadow && "shadow-xl",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;