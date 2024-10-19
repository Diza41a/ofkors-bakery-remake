import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  accentColor?: CSSProperties['backgroundColor'];
  secondaryColor?: CSSProperties['color'];
  variant?: 'outlined' | 'contained';
  size?: 'default' | 'small';
  borderRadius?: CSSProperties['borderRadius'];
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  children?: ReactNode;
  isIconButton?: boolean;
  routerHref?: string;
  /**
   * Button will render as `<a>`.
   */
  href?: string;
};
