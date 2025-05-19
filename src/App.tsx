import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";
import { GlobalStyles } from "./styles/global.ts";

import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Header } from "./components/layout/Header.tsx";
import { AppProvider } from "./providers/app-providers.tsx";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AppProvider>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.key} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
