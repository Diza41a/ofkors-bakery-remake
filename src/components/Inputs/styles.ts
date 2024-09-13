import styled, { type CSSProperties } from "styled-components";
import { rgba } from 'polished';
import type { InputProps, TextAreaProps } from "./props";
import type { StyledComponent } from "../../global/props/styleTypes";
import type { Theme } from "../../global/theme";

const injectTextfieldStyles = (theme: Theme): CSSProperties => ({
  padding: '11px 12px',
  ...theme.typography.paragraph3,
  color: theme.colors.text.heading,
  backgroundColor: '#F6F6F6',
  border: 'none',
  outline: `0 solid ${rgba(theme.colors.text.darkGray, 0.75)}`,
});
const injectTextfieldPlaceholderStyles = (theme: Theme): CSSProperties => ({
  color: theme.colors.text.darkGray,
});
const injectTextfieldFocusStyles = (): CSSProperties => ({
  outlineWidth: 1,
});
const injectTextfieldHoverStyles = (theme: Theme): CSSProperties => ({
  outline: `1px solid ${theme.colors.text.gray}`,
});
const injectTextfieldAutofillStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: '#F6F6F6 !important',
  color: `${theme.colors.text.heading} !important`,
  boxShadow: '0 0 0px 1000px #F6F6F6 inset !important',
  WebkitTextFillColor: `${theme.colors.text.heading} !important`,
});

const styledInputShouldForwardProp = (prop: string) => (
  !['errorMessage'].includes(prop)
);

export const inputClassName = 'Input';
const Input = styled('input').withConfig({
  shouldForwardProp: styledInputShouldForwardProp,
})<StyledComponent<InputProps>>(({ theme }) => ({
  ...injectTextfieldStyles(theme),

  '&::placeholder': {
    ...injectTextfieldPlaceholderStyles(theme),
  },

  '&:hover:not(:focus)': {
    ...injectTextfieldHoverStyles(theme),
  },

  '&:focus': {
    ...injectTextfieldFocusStyles(),
  },

  '&:-webkit-autofill': {
    ...injectTextfieldAutofillStyles(theme),
  },
}));

const styledTextAreaShouldForwardProp = (prop: string) => (
  !['errorMessage'].includes(prop)
);

export const textAreaClassName = 'TextArea';
const TextArea = styled('textarea').withConfig({
  shouldForwardProp: styledTextAreaShouldForwardProp,
})<StyledComponent<TextAreaProps>>(({ theme }) => ({
  ...injectTextfieldStyles(theme),
  resize: 'none',

  '&::placeholder': {
    ...injectTextfieldPlaceholderStyles(theme),
  },

  '&:hover:not(:focus)': {
    ...injectTextfieldHoverStyles(theme),
  },

  '&:focus': {
    ...injectTextfieldFocusStyles(),
  },

  '&:-webkit-autofill': {
    ...injectTextfieldAutofillStyles(theme),
  },

  '&::-webkit-scrollbar': {
    width: 8,
  },

  '&::-webkit-scrollbar-track': {
    background: rgba('#f1f1f1', 0.75),
  },

  '&::-webkit-scrollbar-thumb': {
    background: rgba(theme.colors.text.darkGray, 0.5),
  },

  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: theme.colors.text.darkGray,
  },
}));

export default {
  Input,
  TextArea,
};
