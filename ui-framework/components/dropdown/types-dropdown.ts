type Option = {
  label: string;
  value: string;
};

export type DropdownProps = {
  label?: string;
  listDisc?: boolean;
  options: Option[];
  placeholder?: string;
  onContinue?: (value: string) => void;
};