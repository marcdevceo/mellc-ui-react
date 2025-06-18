import { UILinkProps } from "./types-links";
import clsx from "clsx";

export default function UILink({
  href = "#",
  children,
  isExternal = false,
  className,
  ...props
}: UILinkProps) {
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : props.target}
      rel={isExternal ? "noopener noreferrer" : props.rel}
      className={clsx(className)}
      {...props}
    >
      {children}
    </a>
  );
}
