import {
  bgColorClass,
  paddingClass,
  marginClass,
  maxWidthClass,
  textAlignClass,
  fontSizeClass,
  fontWeightClass,
  overflowClass,
  paddingYClass,
  paddingXClass,
  marginXClass,
  marginYClass,
  marginBottomClass,
  marginTopClass,
  paddingBottomClass,
  paddingTopClass,
} from "../../theme";

export type BaseFooterProps = {
  children?: React.ReactNode;

  // 🎨 Visual
  bg?: keyof typeof bgColorClass;
  overflow?: keyof typeof overflowClass;

  // 📐 Layout
  maxWidth?: keyof typeof maxWidthClass;
  textAlign?: keyof typeof textAlignClass;

  // 🧾 Typography
  fontSize?: keyof typeof fontSizeClass;
  fontWeight?: keyof typeof fontWeightClass;

  // 📦 Spacing - Padding
  padding?: keyof typeof paddingClass;
  pt?: keyof typeof paddingTopClass;
  pb?: keyof typeof paddingBottomClass;
  px?: keyof typeof paddingXClass;
  py?: keyof typeof paddingYClass;

  // 📦 Spacing - Margin
  margin?: keyof typeof marginClass;
  mt?: keyof typeof marginTopClass;
  mb?: keyof typeof marginBottomClass;
  mx?: keyof typeof marginXClass;
  my?: keyof typeof marginYClass;

  // 📛 Branding
  companyName?: string;
  logo?: string;

  // 🧩 Native HTML props
} & React.HTMLAttributes<HTMLElement>;

