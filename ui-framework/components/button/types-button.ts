import { borderRadiusClass } from "../../theme";
import { buttonVariantClass } from "./buttonVariant";

export type BaseButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: "button" | "submit" | "reset";
  variant?: keyof typeof buttonVariantClass;
  radius?: keyof typeof borderRadiusClass;
  pill?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;
