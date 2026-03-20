import type { InputHTMLAttributes } from "react";
import type { ButtonSize } from "../Button";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: ButtonSize;
}
