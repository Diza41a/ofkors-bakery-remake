import styled from "styled-components";
import { rgba } from 'polished';
import type { InputProps, TextAreaProps } from "./props";
import type { StyledComponent } from "../../global/props/styleTypes";
import { MOBILE_VIEW_BREAKPOINT } from "../../global/theme";
import { createSharedTextFieldStyles } from "./utils";

const styledInputShouldForwardProp = (prop: string) => (
  !['errorMessage'].includes(prop)
);

export const inputClassName = 'Input';
const Input = styled('input').withConfig({
  shouldForwardProp: styledInputShouldForwardProp,
})<StyledComponent<InputProps>>(({ theme }) => {
  const sharedTextFieldStyles = createSharedTextFieldStyles(theme);

  return {
  ...sharedTextFieldStyles.root,

  '&::placeholder': {
    ...sharedTextFieldStyles.placeholder,
  },

  '&:hover:not(:focus)': {
    ...sharedTextFieldStyles.hover,
  },

  '&:focus': {
    ...sharedTextFieldStyles.focus,
  },

  '&:-webkit-autofill': {
    ...sharedTextFieldStyles.autofill,
  },

  [`@media(max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
    ...sharedTextFieldStyles.mobile,
  },
  }
});

const styledTextAreaShouldForwardProp = (prop: string) => (
  !['errorMessage'].includes(prop)
);

export const textAreaClassName = 'TextArea';
const TextArea = styled('textarea').withConfig({
  shouldForwardProp: styledTextAreaShouldForwardProp,
})<StyledComponent<TextAreaProps>>(({ theme }) => {
  const sharedTextFieldStyles = createSharedTextFieldStyles(theme);

  return {
    ...sharedTextFieldStyles.root,
    resize: 'none',

    '&::placeholder': {
      ...sharedTextFieldStyles.placeholder,
    },

    '&:hover:not(:focus)': {
      ...sharedTextFieldStyles.hover,
    },

    '&:focus': {
      ...sharedTextFieldStyles.focus,
    },

    '&:-webkit-autofill': {
      ...sharedTextFieldStyles.autofill,
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

    [`@media(max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
      ...sharedTextFieldStyles.mobile,
    },
  };
});

export default {
  Input,
  TextArea,
};
