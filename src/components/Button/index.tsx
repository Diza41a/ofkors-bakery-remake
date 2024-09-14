import S, { classes } from './styles.ts';
import theme from '../../global/theme.ts';
import type { ButtonProps } from './props.ts';

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
    isIconButton = false,
    href=undefined,
    ...rest
  } = props;

  const buttonStyleProps: ButtonProps = {
    accentColor,
    secondaryColor,
    variant,
    size,
    borderRadius,
    startIcon,
    endIcon,
    isIconButton,
    href,
  };

  return (
    <S.Button
      className={classes.root}
      {...buttonStyleProps}
      {...rest}
    >
      {startIcon && <span className={classes.startIcon}>{startIcon}</span>}
      {isIconButton ? children : <p className={classes.text}>{children}</p>}
      {endIcon && <span className={classes.endIcon}>{endIcon}</span>}
    </S.Button>
  );
};

export default Button;
