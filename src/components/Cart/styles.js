import { createTheme, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const CartToolbar = styled("div")({
  root: (theme) => theme.mixins.toolbar,
});

export const EmptyButton = ({ children, ...props }) => (
  <Button
    {...props}
    sx={{
      minWidth: "150px",
      marginBottom: (theme) => {
        return {
          [theme.breakpoints.down("xs")]: {
            marginBottom: "5px",
          },
        };
      },
      marginRight: (theme) => {
        return {
          [theme.breakpoints.up("xs")]: {
            marginRight: "20px",
          },
        };
      },
    }}
  >
    {children}
  </Button>
);

export const CheckoutButton = ({ children, ...props }) => (
  <Button
    {...props}
    sx={{
      minWidth: "150px",
    }}
  >
    {children}
  </Button>
);

export const CardDetails = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "10%",
  width: "100%",
  justifyContent: "space-between",
}));

const cartTheme = createTheme({
  typography: {
    h3: {
      marginTop: "10%",
    },
  },
});

export default cartTheme;
