import type { Theme } from "../../global/theme";
import type { CSSProperties } from "styled-components";
import { rgba } from 'polished';

// Styling
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
  root: createTextfieldStyles(theme),
  placeholder: createTextfieldPlaceholderStyles(theme),
  focus: createTextfieldFocusStyles(),
  hover: createTextfieldHoverStyles(theme),
  autofill: createTextfieldAutofillStyles(theme),
  mobile: createMobileTextfieldStyles(),
});
