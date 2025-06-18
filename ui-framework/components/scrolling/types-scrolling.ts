import {
  bgColorClass,
  textColorClass,
  positionClass,
  overflowClass,
  widthClass,
  paddingXClass,
  paddingYClass,
  displayClass,
  fontSizeClass,
  fontTokens,
} from "../../theme";

export type ScrollingProps = {
  message: string;
  speed?: number; // seconds for full scroll
  bg?: keyof typeof bgColorClass;
  color?: keyof typeof textColorClass;
  position?: keyof typeof positionClass;
  overflow?: keyof typeof overflowClass;
  width?: keyof typeof widthClass;
  px?: keyof typeof paddingXClass;
  py?: keyof typeof paddingYClass;
  display?: keyof typeof displayClass;
  fontSize?: keyof typeof fontSizeClass;
  font?: keyof typeof fontTokens;
  className?: string;
};
