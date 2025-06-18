import {
  alignContentClass,
  alignItemsClass,
  bgColorClass,
  displayClass,
  flexDirectionClass,
  flexGrowClass,
  flexWrapClass,
  gapClass,
  gridColsClass,
  gridGapClass,
  heightClass,
  insetClass,
  justifyContentClass,
  marginBottomClass,
  marginClass,
  marginLeftClass,
  marginRightClass,
  marginTopClass,
  marginXClass,
  marginYClass,
  maxHeightClass,
  maxWidthClass,
  minHeightClass,
  minWidthClass,
  overflowClass,
  paddingBottomClass,
  paddingClass,
  paddingLeftClass,
  paddingRightClass,
  paddingTopClass,
  paddingXClass,
  paddingYClass,
  placeItemsClass,
  positionClass,
  spaceYClass,
  widthClass,
  zIndexClass,
} from "../../theme";
import { borderRadiusClass } from "../../theme/border";

export type BaseContainerProps = {
  children: React.ReactNode;

  // 🎨 Background & Visual
  bg?: keyof typeof bgColorClass;
  borderRadius?: keyof typeof borderRadiusClass;
  overflow?: keyof typeof overflowClass;

  // 📐 Layout
  display?: keyof typeof displayClass;
  height?: keyof typeof heightClass | number;
  minHeight?: keyof typeof minHeightClass | number;
  maxHeight?: keyof typeof maxHeightClass | number;
  width?: keyof typeof widthClass | number;
  minWidth?: keyof typeof minWidthClass | number;
  maxWidth?: keyof typeof maxWidthClass | number;

  // 🧱 Flexbox
  flexGrow?: keyof typeof flexGrowClass;
  flexDirection?: keyof typeof flexDirectionClass;
  flexWrap?: keyof typeof flexWrapClass;
  justify?: keyof typeof justifyContentClass;
  alignItems?: keyof typeof alignItemsClass;
  alignContent?: keyof typeof alignContentClass;

  // 🔲 Grid
  gridCols?: keyof typeof gridColsClass;
  gridGap?: keyof typeof gridGapClass;
  placeItems?: keyof typeof placeItemsClass;

  // 📌 Positioning
  position?: keyof typeof positionClass;
  top?: keyof typeof insetClass;
  bottom?: keyof typeof insetClass;
  left?: keyof typeof insetClass;
  right?: keyof typeof insetClass;

  // 🔢 Z-Index
  zIndex?: keyof typeof zIndexClass;

  // 📦 Spacing - Margin
  margin?: keyof typeof marginClass;
  mt?: keyof typeof marginTopClass;
  mb?: keyof typeof marginBottomClass;
  ml?: keyof typeof marginLeftClass;
  mr?: keyof typeof marginRightClass;
  mx?: keyof typeof marginXClass;
  my?: keyof typeof marginYClass;

  // 📦 Spacing - Padding
  padding?: keyof typeof paddingClass;
  pt?: keyof typeof paddingTopClass;
  pb?: keyof typeof paddingBottomClass;
  pl?: keyof typeof paddingLeftClass;
  pr?: keyof typeof paddingRightClass;
  px?: keyof typeof paddingXClass;
  py?: keyof typeof paddingYClass;

  // 🔄 Gap & Spacing Between
  gap?: keyof typeof gapClass;
  spaceY?: keyof typeof spaceYClass;

  // 🎛️ Custom classes
  className?: string;
};
