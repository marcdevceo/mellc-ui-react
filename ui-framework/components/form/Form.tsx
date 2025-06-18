import React from "react";
import clsx from "clsx";
import { BaseFormProps } from "./types-forms";
import {
  bgColorClass,
  paddingClass,
  marginClass,
  borderRadiusClass,
  shadowClass,
} from "../../theme";
import { Subtitle } from "../typography";
import { Button } from "../button";
import Input from "./Input";

const Form: React.FC<BaseFormProps> = ({
  children,
  fields = [],
  title,
  buttonTitle,
  buttonVariant = "primary",
  bg = "accent",
  padding = "lg",
  margin = "none",
  shadow = false,
  radius = false,
  className,
  ...rest
}) => {
  return (
    <form
      className={clsx(
        bgColorClass[bg],
        paddingClass[padding],
        marginClass[margin],
        radius && borderRadiusClass.lg,
        shadow && shadowClass.md,
        "w-full",
        className
      )}
      {...rest}
    >
      {title && <Subtitle align="center">{title}</Subtitle>}

      {fields.map((field) => (
        <Input key={field.name} {...field} />
      ))}
      
      {children && children}

      {buttonTitle && <Button type="submit" variant={buttonVariant}>
        {buttonTitle}
      </Button>}
    </form>
  );
}

export default Form;