import type { Theme } from "../../global/theme";
import type { CSSProperties } from "styled-components";
import { rgba } from 'polished';

// Styling
const createTextFieldContainerStyles = (): CSSProperties => ({
  display: 'flex',
  flexDirection: 'column',
});
const createTextfieldStyles = (theme: Theme): CSSProperties => ({
  padding: '11px 12px',
  ...theme.typography.paragraph3,
  color: theme.colors.text.heading,
  backgroundColor: '#F6F6F6',
  border: 'none',
  outline: `0 solid ${rgba(theme.colors.text.darkGray, 0.75)}`,
});
const createTextfieldPlaceholderStyles = (theme: Theme): CSSProperties => ({
  color: theme.colors.text.darkGray,
});
const createTextfieldFocusStyles = (): CSSProperties => ({
  outlineWidth: 1,
});
const createTextFieldErrorStyles = (theme: Theme): CSSProperties => ({
  outline: `1px solid ${rgba(theme.colors.action.red, 0.8)}`,
});
const createTextFieldErrorLabelStyles = (theme: Theme): CSSProperties => ({
  ...theme.typography.paragraph4,
  color: theme.colors.action.red,
  marginTop: '0.3rem',
});
const createTextfieldHoverStyles = (theme: Theme): CSSProperties => ({
  outline: `1px solid ${theme.colors.text.gray}`,
});
const createTextfieldAutofillStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: '#F6F6F6 !important',
  color: `${theme.colors.text.heading} !important`,
  boxShadow: '0 0 0px 1000px #F6F6F6 inset !important',
  WebkitTextFillColor: `${theme.colors.text.heading} !important`,
});
const createMobileTextfieldStyles = (): CSSProperties => ({
  padding: 9,
});
export const createSharedTextFieldStyles = (theme: Theme) => ({
  container: createTextFieldContainerStyles(),
  root: createTextfieldStyles(theme),
  placeholder: createTextfieldPlaceholderStyles(theme),
  focus: createTextfieldFocusStyles(),
  error: createTextFieldErrorStyles(theme),
  errorLabel: createTextFieldErrorLabelStyles(theme),
  hover: createTextfieldHoverStyles(theme),
  autofill: createTextfieldAutofillStyles(theme),
  mobile: createMobileTextfieldStyles(),
});
