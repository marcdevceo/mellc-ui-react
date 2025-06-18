import { BaseInputProps } from "./types-forms";

export default function Input({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  ...rest
}: BaseInputProps) {
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className="block mb-1 font-medium">{label}</label>}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
        {...rest}
      />
    </div>
  );
}
