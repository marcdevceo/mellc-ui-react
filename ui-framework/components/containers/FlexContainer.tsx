import React from "react";
import clsx from "clsx";
import { BaseContainerProps } from "./types-spacing";

import {
  alignContentClass,
  alignItemsClass,
  bgColorClass,
  borderRadiusClass,
  displayClass,
  flexDirectionClass,
  flexGrowClass,
  gapClass,
  gridColsClass,
  gridGapClass,
  justifyContentClass,
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
  flexWrapClass,
  paddingXClass,
  paddingYClass,
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
} from "../../theme";

const FlexContainer: React.FC<BaseContainerProps> = ({
  children,
  // Defaults
  bg = "none",
  display = "flex",
  flexDirection = "row",
  flexWrap = "nowrap",
  justify = "start",
  alignItems = "start",
  gap = "md",

  // Flex
  flexGrow,
  alignContent,

  // Layout Props
  height,
  minHeight,
  maxHeight,
  width,
  minWidth,
  maxWidth,

  // Grid
  gridCols,
  gridGap,

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
        // Visual
        bgColorClass[bg],
        borderRadius && borderRadiusClass[borderRadius],
        overflow && overflowClass[overflow],

        // Layout
        display && displayClass[display],
        flexGrow && flexGrowClass[flexGrow],
        flexDirection && flexDirectionClass[flexDirection],
        flexWrap && flexWrapClass[flexWrap],
        justify && justifyContentClass[justify],
        alignItems && alignItemsClass[alignItems],
        alignContent && alignContentClass[alignContent],
        gap && gapClass[gap],
        spaceY && spaceYClass[spaceY],

        typeof height === "string" ? heightClass[height] : undefined,

        typeof minHeight === "string" ? minHeightClass[minHeight] : undefined,

        typeof maxHeight === "string" ? maxHeightClass[maxHeight] : undefined,

        typeof width === "string" ? widthClass[width] : undefined,

        typeof minWidth === "string" ? minWidthClass[minWidth] : undefined,

        typeof maxWidth === "string" ? maxWidthClass[maxWidth] : undefined,

        // Grid
        gridCols && gridColsClass[gridCols],
        gridGap && gridGapClass[gridGap],

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

        // Custom
        className
      )}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
