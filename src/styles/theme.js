import { themes } from "mdx-deck";

const DEFAULT_THEME = themes.swiss
const CODE_THEME = themes.code

const theme = {
  ...DEFAULT_THEME,
  fonts: CODE_THEME.fonts,
  colors: {
    ...DEFAULT_THEME.colors,
    background: "#0D0208",
    text: "#00FF41",
  },
  styles: {
    ...DEFAULT_THEME.styles,
    img: {
      width: "auto",
      maxWidth: "auto",
      height: "auto",
    },
  }
};

export default theme;
