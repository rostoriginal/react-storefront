import { createTheme, styled } from "@mui/material/styles";

export const CheckoutButtons = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
});

export const CheckoutMain = styled("div")(({ theme }) => ({
  width: "auto",
  marginTop: 100,
  [theme.breakpoints.up('xs')]: {
    width: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const checkoutTheme = createTheme({
  components: {
    MuiStepper: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(3, 0, 5)
        })
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.down("xs")]: {
            width: "100%",
            marginTop: 60,
          },
          [theme.breakpoints.up('xs')]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        marginTop: ({ theme }) => theme.spacing(3),
        marginLeft: ({ theme }) => theme.spacing(1),
      },
    },
    MuiDivider: {
      styleOverrides: {
        margin: "20px 0",
      },
    },
  },
});

export default checkoutTheme;
