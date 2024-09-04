import styled from "styled-components";
import type { StyledButtonProps } from "./props";

export const classes = {
  root: 'Btn',
  text: 'Btn-text',
  startIcon: 'Btn-startIcon',
  endIcon: 'Btn-endIcon',
};

const Button = styled('button')<StyledButtonProps>(({
  theme,
  size,
  variant,
  accentColor,
  secondaryColor,
  borderRadius,
}) => ({
  outline: 'none',
  cursor: 'pointer',
  borderRadius,

  ...(() => {
    const buttonPadding = size === 'small' ? '12px 20px' : '18px 32px';
    const typographyProps = size === 'small' ? theme.typography.linkSmall : theme.typography.link;
    const backgroundColor = variant === 'outlined' ? 'transparent' : accentColor;
    const color = variant === 'outlined' ? accentColor : secondaryColor;
    const border = variant === 'outlined' ? `1px solid ${accentColor}` : 'none';

    return {
      padding: buttonPadding,
      backgroundColor,
      border,

      [`.${classes.text}`]: {
        ...typographyProps,
        color,
      },
    };
  })(),
}));

export default {
  Button,
};
