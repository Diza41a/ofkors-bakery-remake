import styled from "styled-components";
import type { StyledButtonProps } from "./props";

export const classes = {
  root: 'Btn',
  text: 'Btn-text',
  startIcon: 'Btn-startIcon',
  endIcon: 'Btn-endIcon',
};

const styledButtonShouldForwardProp = (prop: string) => (
  !['accentColor','secondaryColor','variant','size','borderRadius','startIcon','endIcon'].includes(prop)
);

const Button = styled('button').withConfig({
  shouldForwardProp: styledButtonShouldForwardProp,
})<StyledButtonProps>(({
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
    const startIconMargin = { marginRight: size === 'small' ? '10px' : '12px' };
    const endIconMargin = { marginLeft: size === 'small'? '10px' : '12px' };

    return {
      padding: buttonPadding,
      backgroundColor,
      border,

      [`.${classes.text}`]: {
        ...typographyProps,
        color,
      },

      [`.${classes.startIcon}`]: {
        ...startIconMargin,
      },

      [`.${classes.endIcon}`]: {
        ...endIconMargin,
      },
    };
  })(),

  '@media (max-width: 600px)': {
    ...(() => ({
      padding: size === 'small' ? '10px 16px' : '14px 26px',

      [`.${classes.startIcon}`]: {
        marginRight: size === 'small' ? '8px' : '10px',
      },

      [`.${classes.endIcon}`]: {
        marginLeft: size === 'small' ? '8px' : '10px',
      },
    }))(),
  },
}));

export default {
  Button,
};
