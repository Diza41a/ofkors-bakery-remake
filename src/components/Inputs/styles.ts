import styled from "styled-components";
import { rgba } from 'polished';
import type { InputProps, TextAreaProps } from "./props";
import type { StyledComponent } from "../../global/props/styleTypes";
import { MOBILE_VIEW_BREAKPOINT } from "../../global/theme";
import { createSharedTextFieldStyles } from "./utils";

const styledInputShouldForwardProp = (prop: string) => (
  !['errorMessage'].includes(prop)
);

export const inputClassNames = {
  container: 'InputContainer',
  root: 'Input',
  error: 'Input--error',
  errorLabel: 'Input--error-Lbl',
};
const InputContainer = styled('div').withConfig({
  shouldForwardProp: styledInputShouldForwardProp,
})<StyledComponent<InputProps>>(({ theme }) => {
  const sharedTextFieldStyles = createSharedTextFieldStyles(theme);

  return {
    ...sharedTextFieldStyles.container,

    [`.${inputClassNames.root}`]: {
      ...sharedTextFieldStyles.root,

      '&::placeholder': {
        ...sharedTextFieldStyles.placeholder,
      },

      '&:hover:not(:focus)': {
        [`&:not(.${inputClassNames.error})`]: {
          ...sharedTextFieldStyles.hover,
        },
      },

      [`&:focus:not(.${inputClassNames.error})`]: {
        ...sharedTextFieldStyles.focus,
      },

      [`&.${inputClassNames.error}`]: {
        ...sharedTextFieldStyles.error,
      },

      '&:-webkit-autofill': {
        ...sharedTextFieldStyles.autofill,
      },
    },

    [`.${inputClassNames.errorLabel}`]: {
      ...sharedTextFieldStyles.errorLabel,
    },

    [`@media(max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
      [`.${inputClassNames.root}`]: {
        ...sharedTextFieldStyles.mobile,
      },
    },
  }
});

const styledTextAreaShouldForwardProp = (prop: string) => (
  !['errorMessage'].includes(prop)
);

export const textAreaClassNames = {
  container: 'TextArea-Container',
  root: 'TextArea',
  error: 'TextArea--error',
  errorLabel: 'TextArea--error-Lbl',
};
const TextAreaContainer = styled('div').withConfig({
  shouldForwardProp: styledTextAreaShouldForwardProp,
})<StyledComponent<TextAreaProps>>(({ theme }) => {
  const sharedTextFieldStyles = createSharedTextFieldStyles(theme);

  return {
    ...sharedTextFieldStyles.container,

    [`.${textAreaClassNames.root}`]: {
      ...sharedTextFieldStyles.root,
      resize: 'none',

      '&::placeholder': {
        ...sharedTextFieldStyles.placeholder,
      },

      '&:hover:not(:focus)': {
        [`&:not(.${textAreaClassNames.error})`]: {
          ...sharedTextFieldStyles.hover,
        },
      },

      [`&:focus:not(.${textAreaClassNames.error})`]: {
        ...sharedTextFieldStyles.focus,
      },

      [`&.${textAreaClassNames.error}`]: {
        ...sharedTextFieldStyles.error,
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
    },

    [`.${textAreaClassNames.errorLabel}`]: {
      ...sharedTextFieldStyles.errorLabel,
    },

    [`@media(max-width: ${MOBILE_VIEW_BREAKPOINT}px)`]: {
      [`.${textAreaClassNames.root}`]: {
        ...sharedTextFieldStyles.mobile,
      },
    },
  };
});

export default {
  InputContainer,
  TextAreaContainer,
};
