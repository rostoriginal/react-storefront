import { createTheme, styled } from "@mui/material/styles";

export const NavBarLogoImage = styled('img')({
  marginRight: '10px',
});

export const NavbarGrow = styled('div')({
  flexGrow: 1,
});

const drawerWidth = 0;

const navbarTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            [theme.breakpoints.up("sm")]: {
              width: `calc(100% - ${drawerWidth}px)`,
              marginLeft: drawerWidth,
            },
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          };
        },
      },
    },
  },
  typography: {
    h6: {
      flexGrow: 1,
      alignItems: "center",
      display: "flex",
      textDecoration: "none",
    },
  },
});

export default navbarTheme;
