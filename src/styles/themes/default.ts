import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  colors: {
    product: {
      yellowDark: "#c47f17",
      yellow: "#dbac2c",
      yellowLight: "#f1e9c9",
      purpleDark: "#4b2995",
      purple: "#8047f8",
      purpleLight: "#ebe5f9",
    },
    base: {
      title: "#272221",
      subtitle: "#403937",
      text: "#574f4d",
      label: "#8d8686",
      hover: "#d7d5d5",
      button: "#e6e5e5",
      input: "#ededed",
      card: "#f3f2f2",
      background: "#fafafa",
      white: "#fff",
    },
    fonts: {
      tile: "Baloo 2, cursive",
      text: "Roboto, sans-serif",
    },
    fontSizes: {
      titleXL: "3rem",
      titleL: "2rem",
      titleM: "1.5rem",
      titleS: "1.25rem",
      titleXS: "1.125rem",

      textL: "1.25rem",
      textM: "1rem",
      textS: "0.875rem",
      textXS: "0.75rem",
      tag: "0.625rem",

      buttonL: "0.875rem",
      buttonM: "0.75rem",
    },
    lineHeights: {
      base: 1.3,
      button: 1.6,
    },
    fontWeights: {
      regular: 400,
      bold: 700,
      extraBold: 800,
    },
  },
};
