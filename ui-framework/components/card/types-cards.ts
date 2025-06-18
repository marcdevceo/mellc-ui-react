import {
  bgColorClass,
  marginClass,
  marginXClass,
  marginYClass,
  paddingClass,
  paddingXClass,
  paddingYClass,
} from "../../theme";

export type BaseCardProps = {
  children: React.ReactNode;
  bg?: keyof typeof bgColorClass;
  margin?: keyof typeof marginClass;
  mx?: keyof typeof marginXClass;
  my?: keyof typeof marginYClass;
  padding?: keyof typeof paddingClass;
  px?: keyof typeof paddingXClass;
  py?: keyof typeof paddingYClass;
  rounded?: boolean;
  shadow?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
