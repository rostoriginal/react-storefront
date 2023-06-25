import { createTheme } from "@mui/material/styles";

const productsTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          flexGrow: 1,
          backgroundColor: theme.palette.background.default,
          padding: theme.spacing(10),
        }),
      },
    },
  },
});

export default productsTheme;
