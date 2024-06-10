import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Mulish, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#5ACCCC",
      white: "#FFFFFF",
      steelBlue: "#335C6E",
      yellow: "#FABD33",
    },
    secondary: {
      main: "#CFFAFA",
      turquioseDark: "#53C2C2",
      turquioseDark2: "#28B8B8",
      orangeRed: "#F76434",
      orangePastel: "#FFE6DC",
      teal: "#4AA088",
      yellowDark: "#FAAD00",
    },
  },
});

export default theme;
