import React from "react";
import clsx from "clsx";
import { spinnerSizeClass, textColorClass } from "../../theme";
import { SpinnerProps } from "./types-spinner";

const Spinner: React.FC<SpinnerProps> = ({
  size = "sm",
  color = "primary",
  className = "",
  ariaLabel = "Loading...",
}) => {
  return (
    <svg
      className={clsx(
        "animate-spin",
        spinnerSizeClass[size],
        textColorClass[color],
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="status"
      aria-label={ariaLabel}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
      />
    </svg>
  );
}

export default Spinner;
