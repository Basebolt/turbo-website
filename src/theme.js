import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "CircularStd-Private",
    h2: {
      letterSpacing: "-3px",
      lineHeight: 1.1,
      fontWeight: 700,
    },
    h3: {
      letterSpacing: "-3px",
      fontWeight: 700,
    },
    h4: {
      letterSpacing: "-2px",
      fontWeight: 700,
    },
    h6: {
      letterSpacing: "-1px",
      lineHeight: 1.3,
      fontWeight: 400,
    },
    p: {
      fontFamily: "CircularStd-Private",
    },
    caption: {
      fontSize: 10,
    },
  },
  palette: {
    primary: {
      main: "#087FF6",
      dark: "#0772dd",
    },
    black: {
      main: "#292D32",
      contrastText: "#fff",
    },
    white: {
      main: "#ffffff",
      contrastText: "#314C5C",
    },
    grey: {
      main: "#677B8C",
    },
  },
});