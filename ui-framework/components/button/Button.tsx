import React from "react";
import clsx from "clsx";
import { BaseButtonProps } from "./types-button";
import { buttonVariantClass } from "./buttonVariant";
import { borderRadiusClass } from "../../theme";
import { UILink } from "../links";

const Button: React.FC<BaseButtonProps> = ({
  children,
  onClick,
  href,
  target = "_self",
  type = "button",
  variant = "primaryresp",
  radius = "sm",
  disabled = false,
  isLoading = false,
  loadingText = "Loading...",
  className = "",
  ...rest
}) => {
  const baseStyles = clsx(
    "inline-flex items-center justify-center transition duration-150 ease-in-out",
    buttonVariantClass[variant],
    {
      "opacity-50 cursor-not-allowed": disabled || isLoading,
    },
    borderRadiusClass[radius],
    className
  );

  const content = isLoading ? loadingText : children;

  if (href && (href.startsWith("http") || href.startsWith("mailto:"))) {
    return (
      <a
        href={href}
        target={target}
        className={baseStyles}
        aria-disabled={disabled || isLoading}
        {...rest}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <UILink
        href={href}
        target={target}
        className={baseStyles}
        aria-disabled={disabled || isLoading}
        {...rest}
      >
        {content}
      </UILink>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseStyles}
      disabled={disabled || isLoading}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;




