import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type CustomTheme = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
