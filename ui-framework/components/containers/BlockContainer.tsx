import React from "react";
import clsx from "clsx";
import { BaseContainerProps } from "./types-spacing";

import {
  bgColorClass,
  borderRadiusClass,
  displayClass,
  marginClass,
  paddingClass,
  heightClass,
  minHeightClass,
  maxHeightClass,
  widthClass,
  minWidthClass,
  maxWidthClass,
  overflowClass,
  positionClass,
  insetClass,
  zIndexClass,
  spaceYClass,
  marginBottomClass,
  marginLeftClass,
  marginRightClass,
  marginTopClass,
  marginXClass,
  marginYClass,
  paddingBottomClass,
  paddingLeftClass,
  paddingRightClass,
  paddingTopClass,
  paddingXClass,
  paddingYClass,
} from "../../theme";

const BlockContainer: React.FC<BaseContainerProps> = ({
  children,
  // Defaults
  bg = "none",
  display = "block",

  // Layout Props
  height,
  minHeight,
  maxHeight,
  width,
  minWidth,
  maxWidth,

  // Positioning
  position,
  top,
  bottom,
  left,
  right,
  zIndex,

  // Spacing
  margin,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  padding,
  pt,
  pb,
  pl,
  pr,
  px,
  py,
  spaceY,

  // Visual
  borderRadius,
  overflow,
  className,
}) => {
  const dynamicStyle: React.CSSProperties = {
    ...(typeof height === "number" ? { height: `${height}px` } : {}),
    ...(typeof minHeight === "number" ? { minHeight: `${minHeight}px` } : {}),
    ...(typeof maxHeight === "number" ? { maxHeight: `${maxHeight}px` } : {}),
    ...(typeof width === "number" ? { width: `${width}px` } : {}),
    ...(typeof minWidth === "number" ? { minWidth: `${minWidth}px` } : {}),
    ...(typeof maxWidth === "number" ? { maxWidth: `${maxWidth}px` } : {}),
  };

  return (
    <div
      style={dynamicStyle}
      className={clsx(
        bgColorClass[bg],
        borderRadius && borderRadiusClass[borderRadius],
        overflow && overflowClass[overflow],
        display && displayClass[display],
        spaceY && spaceYClass[spaceY],

        typeof height === "string" ? heightClass[height] : undefined,

        typeof minHeight === "string" ? minHeightClass[minHeight] : undefined,

        typeof maxHeight === "string" ? maxHeightClass[maxHeight] : undefined,

        typeof width === "string" ? widthClass[width] : undefined,

        typeof minWidth === "string" ? minWidthClass[minWidth] : undefined,

        typeof maxWidth === "string" ? maxWidthClass[maxWidth] : undefined,

        position && positionClass[position],
        top && insetClass[top],
        bottom && insetClass[bottom],
        left && insetClass[left],
        right && insetClass[right],
        zIndex && zIndexClass[zIndex],

        margin && marginClass[margin],
        mt && marginTopClass[mt],
        mb && marginBottomClass[mb],
        ml && marginLeftClass[ml],
        mr && marginRightClass[mr],
        mx && marginXClass[mx],
        my && marginYClass[my],

        padding && paddingClass[padding],
        pt && paddingTopClass[pt],
        pb && paddingBottomClass[pb],
        pl && paddingLeftClass[pl],
        pr && paddingRightClass[pr],
        px && paddingXClass[px],
        py && paddingYClass[py],

        className
      )}
    >
      {children}
    </div>
  );
};

export default BlockContainer;
