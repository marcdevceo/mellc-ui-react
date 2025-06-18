import {
  fontSizeClass,
  fontTokens,
  fontWeightClass,
  textAlignClass,
  textColorClass,
} from "../../theme";

export type BaseTextProps = {
  children: React.ReactNode;
  align?: keyof typeof textAlignClass;
  color?: keyof typeof textColorClass;
  size?: keyof typeof fontSizeClass;
  weight?: keyof typeof fontWeightClass;
  font?: keyof typeof fontTokens;
  italic?: boolean,
  className?: string;
};

export type ListsProps<T> = {
  color?: keyof typeof textColorClass;
  listDisc?: boolean;
  lists: T[];
  width?: string;
  renderItem: (item: T, index: number) => React.ReactNode;
};
