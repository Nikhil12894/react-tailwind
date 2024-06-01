import { RegisterOptions } from "react-hook-form";

export type ControlType =
  | "text"
  | "email"
  | "select"
  | "number"
  | "checkbox"
  | "textarea"
  | "radio"
  | "file"
  | "date"
  | "datetime-local"
  | "time"
  | "color"
  | "password"
  | "range";

export interface SelectOption {
  label: string;
  value: string;
}

export interface DynamicFieldData {
  label: string;
  inputType: ControlType;
  fieldName: string;
  defaultValue: any;
  options?: SelectOption[];
  config?: RegisterOptions;
}
