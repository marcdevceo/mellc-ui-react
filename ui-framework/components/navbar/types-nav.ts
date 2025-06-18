import { bgColorClass, marginClass, paddingClass } from "../../theme";

export type NavLinksProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

export type NavBarProps = {
  children?: React.ReactNode;
  bg?: keyof typeof bgColorClass;
  padding?: keyof typeof paddingClass;
  margin?: keyof typeof marginClass;
  title?: string;
  titleHref?: string;
  logo?: string;
  logoHref?: string;
  links?: NavLinksProps[];
} & React.HTMLAttributes<HTMLElement>;

export type MobileNavProps = {
  links?: NavLinksProps[];
};