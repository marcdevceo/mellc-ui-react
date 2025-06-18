import clsx from "clsx";
import { UIImageProps } from "./types-image";

export default function UIImage({
  src,
  alt,
  className,
  ...props
}: UIImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx("object-cover", className)}
      loading="lazy"
      {...props}
    />
  );
}
