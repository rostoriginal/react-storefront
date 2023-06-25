import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { ThemeProvider } from "@mui/material/styles";
import navbarTheme, { NavBarLogoImage, NavbarGrow} from "./styles";

import logo from "../../assets/img/logo.png";

const Navbar = ({ totalItems }) => {
  return (
    <>
      <ThemeProvider theme={navbarTheme}>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <NavBarLogoImage
                src={logo}
                alt="Commerce.js"
                height="25px"
              />
              Commerce.js
            </Typography>
            <div>
                <IconButton aria-label="Show cart items" color="inherit">
                  <Badge badgeContent={totalItems ?? 0} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
