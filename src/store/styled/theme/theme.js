import { breakpoints } from "./breakpoints";
import { fontStyle } from "./style";

export const theme = {
  colors: {
    background: "#000000d4",
    primary: "#fff",
    default: "#000",
    secondary: "#ffead8",
    surface: "#00000050",

    backgrounds: ["#ffa569", "#e454e5"], //Если фон разный.

    getGradient() {
      return `linear-gradient(138deg, ${this.backgrounds[0]} 0%, ${this.backgrounds[1]})`
    } 
  },

  grid: {
    col3: "33.333%",
    col2: "50%",
    col1: "100%",
  },

  desktopFirst: {
    tablet: `(max-width: ${breakpoints.medium}px)`,
    desktop: `(max-width: ${breakpoints.large}px)`,
  },

  mobileFirst: {
    breakpoints: {},
  },

  fontStyle,
};
