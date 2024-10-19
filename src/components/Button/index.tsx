import { useNavigate } from 'react-router-dom';
import S, { classes } from './styles.ts';
import theme from '../../global/theme.ts';
import type { ButtonProps } from './props.ts';

const Button = (props: ButtonProps): JSX.Element => {
  const navigate = useNavigate();

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
    routerHref=undefined,
    href = undefined,
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
  };

  const anchorEl = href ? (
    <a className={classes.anchorEl} href={href} />
  ) : null;

  return (
    <S.Button
      className={classes.root}
      {...buttonStyleProps}
      {...rest}
      onClick={(...onClickProps) => {
        if (props.onClick) props.onClick(...onClickProps);
        if (routerHref) navigate(routerHref);
      }}
    >
      {startIcon && <span className={classes.startIcon}>{startIcon}</span>}
      {isIconButton ? children : <p className={classes.text}>{children}</p>}
      {endIcon && <span className={classes.endIcon}>{endIcon}</span>}

      {anchorEl}
    </S.Button>
  );
};

export default Button;
