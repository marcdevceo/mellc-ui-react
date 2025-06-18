import {
  bgColorClass,
  marginClass,
  paddingClass,
  colorVariantClass,
} from "../../theme";
import { buttonVariantClass } from "../button/buttonVariant";

export type BaseInputProps = {
  id?: string,
  name?: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  required?: boolean;
  button?: {
    name: string;
    variant: keyof typeof colorVariantClass;
  };
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
} & React.FormHTMLAttributes<HTMLInputElement>;

export type BaseFormProps = {
  children?: React.ReactNode;
  fields?: BaseInputProps[];
  title?: string;
  buttonTitle?: string;
  buttonVariant?: keyof typeof buttonVariantClass;
  bg?: keyof typeof bgColorClass;
  padding?: keyof typeof paddingClass;
  margin?: keyof typeof marginClass;
  shadow?: boolean,
  radius?: boolean,
  action?: string;
  className?: string,
} & React.FormHTMLAttributes<HTMLFormElement>;
