import type { Theme } from "../theme"

export type StyledComponent<Props = object> = {
  theme: Theme;
} & Props;
