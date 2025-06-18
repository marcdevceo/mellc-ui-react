import React from "react";
import clsx from "clsx";
import { BaseContainerProps } from "./types-spacing";

import {
  bgColorClass,
  borderRadiusClass,
  displayClass,
  gridColsClass,
  gridGapClass,
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
  justifyContentClass,
  alignItemsClass,
  alignContentClass,
  placeItemsClass,
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

const GridContainer: React.FC<BaseContainerProps> = ({
  children,
  // Defaults
  bg = "none",
  display = "grid",
  justify = "start",
  alignItems = "start",

  gridCols = "primary",
  gridGap = "primary",
  padding = "md",

  // Grid
  alignContent,
  placeItems,

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
  return (
    <div
      className={clsx(
        // Visual
        bgColorClass[bg],
        borderRadius && borderRadiusClass[borderRadius],
        overflow && overflowClass[overflow],

        // Layout
        display && displayClass[display],
        spaceY && spaceYClass[spaceY],

        typeof height === "string"
          ? heightClass[height]
          : typeof height === "number"
          ? `h-[${height}px]`
          : undefined,

        typeof minHeight === "string"
          ? minHeightClass[minHeight]
          : typeof minHeight === "number"
          ? `min-h-[${minHeight}px]`
          : undefined,

        typeof maxHeight === "string"
          ? maxHeightClass[maxHeight]
          : typeof maxHeight === "number"
          ? `max-h-[${maxHeight}px]`
          : undefined,

        typeof width === "string"
          ? widthClass[width]
          : typeof width === "number"
          ? `w-[${width}px]`
          : undefined,

        typeof minWidth === "string"
          ? minWidthClass[minWidth]
          : typeof minWidth === "number"
          ? `min-w-[${minWidth}px]`
          : undefined,

        typeof maxWidth === "string"
          ? maxWidthClass[maxWidth]
          : typeof maxWidth === "number"
          ? `max-w-[${maxWidth}px]`
          : undefined,

        // Grid
        gridCols && gridColsClass[gridCols],
        gridGap && gridGapClass[gridGap],
        placeItems && placeItemsClass[placeItems],
        justifyContentClass[justify],
        alignItemsClass[alignItems],
        alignContent && alignContentClass[alignContent],

        // Positioning
        position && positionClass[position],
        top && insetClass[top],
        bottom && insetClass[bottom],
        left && insetClass[left],
        right && insetClass[right],
        zIndex && zIndexClass[zIndex],

        // Margin
        margin && marginClass[margin],
        mt && marginTopClass[mt],
        mb && marginBottomClass[mb],
        ml && marginLeftClass[ml],
        mr && marginRightClass[mr],
        mx && marginXClass[mx],
        my && marginYClass[my],

        // Padding
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

export default GridContainer;
