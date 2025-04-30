import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { defaultTheme } from "../../styles/themes/default.ts";

export function renderWithTheme(ui: ReactNode) {
  return render(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>);
}
