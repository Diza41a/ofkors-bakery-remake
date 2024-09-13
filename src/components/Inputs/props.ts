import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export interface TextFieldProps {
  errorMessage?: string;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & TextFieldProps;
export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & TextFieldProps;
