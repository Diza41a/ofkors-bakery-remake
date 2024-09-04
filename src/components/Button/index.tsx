import S, { classes } from './styles.ts';
import type { ButtonProps, StyledButtonProps } from './props.ts';
import theme from '../../global/theme.ts';

const Button = (props: ButtonProps): JSX.Element => {
  const {
    children,
    accentColor = theme.colors.action.gold,
    secondaryColor = theme.colors.text.white,
    variant = 'contained',
    size = 'default',
    borderRadius = 0,
    startIcon = undefined,
    endIcon = undefined,
  } = props;

  const buttonStyleProps: StyledButtonProps = {
    accentColor,
    secondaryColor,
    variant,
    size,
    borderRadius,
    startIcon,
    endIcon,
  };

  return (
    <S.Button
      className={classes.root}
      {...buttonStyleProps}
    >
      {startIcon && <span className={classes.startIcon}>{startIcon}</span>}
      <p className={classes.text}>{children}</p>
      {endIcon && <span className={classes.endIcon}>{endIcon}</span>}
    </S.Button>
  );
};

Button.defaultProps = {
  accentColor: theme.colors.action.gold,
  secondaryColor: theme.colors.text.white,
  variant: 'contained',
  size: 'default',
  borderRadius: 0,
  startIcon: undefined,
  endIcon: undefined,
};

export default Button;
