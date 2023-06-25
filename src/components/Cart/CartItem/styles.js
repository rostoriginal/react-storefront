import { createTheme, styled } from "@mui/material/styles";

export const CartItemButtons = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const cartItemTheme = createTheme({
  components: {
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: 260,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
        },
      },
    },
  },
  typography: {
    h3: {
      marginTop: "10%",
    },
    subtitle1: {
      marginTop: "10%",
    },
  },
});

export default cartItemTheme;
