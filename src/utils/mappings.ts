import { DefaultTheme } from "styled-components";

export const VARIANTS_BUTTONS_MAPPING = (theme: DefaultTheme) => ({
  primary: {
    background: theme.colors.product.yellow,
    text: theme.colors.base.white,
    hover: theme.colors.product.yellowDark,
  },
  secondary: {
    background: theme.colors.base.button,
    text: theme.colors.base.text,
    hover: theme.colors.base.hover,
  },
  icon: {
    background: theme.colors.product.purpleDark,
    text: theme.colors.base.white,
    hover: theme.colors.product.purple,
  },
});
