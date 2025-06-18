import clsx from "clsx";
import {
  fontSizeClass,
  paddingClass,
  colorVariantClass,
  hoverClass,
  shadowClass,
  paddingXClass,
  paddingYClass,
} from "../../theme";

export const buttonVariantClass = {
  primary: clsx(
    fontSizeClass.buttonText,
    paddingClass.md,
    colorVariantClass.primary,
    hoverClass.scaleSm,
    shadowClass.md
  ),
  secondary: clsx(
    fontSizeClass.buttonText,
    paddingClass.sm,
    colorVariantClass.secondary,
    hoverClass.opacity,
    shadowClass.sm
  ),
  thin: clsx(
    fontSizeClass.xs,
    paddingClass.xs,
    colorVariantClass.primary,
    hoverClass.opacity,
    shadowClass.sm
  ),
  outline: clsx(
    fontSizeClass.buttonText,
    paddingClass.sm,
    colorVariantClass.outlineLight,
    hoverClass.textPrimary,
    shadowClass.none
  ),
  outlineMiniLight: clsx(
    fontSizeClass.xs,
    paddingXClass.sm,
    paddingYClass.xs,
    colorVariantClass.outlineLight,
    hoverClass.textPrimary,
    shadowClass.none
  ),
  outlineMiniDark: clsx(
    fontSizeClass.xs,
    paddingXClass.sm,
    paddingYClass.xs,
    colorVariantClass.outlineDark,
    hoverClass.textPrimary,
    shadowClass.none
  ),

  ghost: clsx(
    fontSizeClass.caption,
    paddingClass.none,
    colorVariantClass.ghost,
    hoverClass.opacity,
    shadowClass.none
  ),

  // 🔁 Responsive Variants
  primaryresp: clsx(
    "text-sm sm:text-base md:text-lg",
    "px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4",
    colorVariantClass.primary,
    hoverClass.scaleMd,
    shadowClass.md
  ),
  secondaryresp: clsx(
    "text-xs sm:text-sm md:text-base",
    "px-3 py-1.5 sm:px-4 sm:py-2.5",
    colorVariantClass.secondary,
    hoverClass.opacity,
    shadowClass.sm
  ),
  outlineresp: clsx(
    "text-xs sm:text-sm md:text-base",
    "px-3 py-2 sm:px-5 md:px-6",
    colorVariantClass.outlineLight,
    hoverClass.textPrimary,
    shadowClass.none
  ),
  ghostresp: clsx(
    "text-xs sm:text-sm",
    "px-1.5 sm:px-2",
    colorVariantClass.ghost,
    hoverClass.opacity,
    shadowClass.none
  ),
};
