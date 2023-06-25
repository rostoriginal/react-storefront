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
import navbarTheme from "./styles";

import logo from "../../assets/img/logo.png";

const Navbar = () => {
  return (
    <>
      <ThemeProvider theme={navbarTheme}>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <img
                className="NavbarLogoImage"
                src={logo}
                alt="Commerce.js"
                height="25px"
              />
              Commerce.js
            </Typography>
            <div className="NavbarGrow">
              <div>
                <IconButton aria-label="Show cart items" color="inherit">
                  <Badge badgeContent={2}>
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
