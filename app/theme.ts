export const palette = {
  primary: "#9277ff",
  secondary: "#EC5757",
  primaryLight: "#7c5dfa",
  secondaryLight: "#9277FF",
  grey100: "#DFE3FA",
  grey400: "#7E88C3",
  grey600: "#888EB0",
  darkBlue: "#252945",
  darkBlue400: "#1E2139",
  black100: "#0c0e16",
  black200: "#141625",
  whiteBg: "#f8f8f8",
  };

export const colors = {
  light: {
    ...palette,
    background: "#FFFFFF",
    text: "#000000",
    buttonBackground: "#3498db",
    buttonTextColor: "#FFFFFF",
    border: "#bdc3c7",
  },
  dark: {
    ...palette,
    background: "#2c3e50",
    text: "#FFFFFF",
    buttonBackground: "#2980b9",
    buttonTextColor: "#FFFFFF",
    border: "#34495e",
  },
};

export const components = {
  Button: {
    buttonStyle: {
      paddingHorizontal: 18,
      paddingVertical: 10,
    },
  },
};

//TODO Refactor this as per theme mode color palette
