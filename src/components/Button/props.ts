import type { CSSProperties, ReactNode } from "react";
import type  { Theme } from "../../global/theme";

export interface ButtonProps {
  accentColor?: CSSProperties['backgroundColor'];
  secondaryColor?: CSSProperties['color'];
  variant?: 'outlined' | 'contained';
  size?: 'default' | 'small';
  borderRadius?: CSSProperties['borderRadius'];
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  children?: ReactNode;
  isIconButton?: boolean;
  /**
   * Button will render as `<a>`.
   */
  href?: string;
};

export type StyledButtonProps = ButtonProps & { theme?: Theme };
