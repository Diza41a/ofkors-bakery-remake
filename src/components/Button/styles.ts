import styled from "styled-components";
import type { StyledButtonProps } from "./props";

export const classes = {
  root: 'Btn',
  text: 'Btn-text',
  link: 'Btn-link',
  startIcon: 'Btn-startIcon',
  endIcon: 'Btn-endIcon',
};

const styledButtonShouldForwardProp = (prop: string) => (
  ![
    'accentColor',
    'secondaryColor',
    'variant',
    'size',
    'borderRadius',
    'startIcon',
    'endIcon',
    'isIconButton',
  ].includes(prop)
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
  isIconButton,
}) => ({
  outline: 'none',
  cursor: 'pointer',
  borderRadius,

  ...(() => {
    let buttonPadding = '18px 32px';
    if (isIconButton) {
      buttonPadding = '0';
    } else if (size === 'small') {
      buttonPadding = '12px 20px';
    }
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
      ...(() => {
        if (isIconButton) {
          return {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40px',
            height: '40px',
          };
        } else return {};
      })(),

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
