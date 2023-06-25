import { createTheme } from "@mui/material/styles";

const productTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        maxWidth: "100%",
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: 0,
          paddingTop: "56.25%", // 16:9
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: 'space-between',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "flex-end",
        },
      },
    },
  },
});

export default productTheme;
