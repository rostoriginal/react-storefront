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

import { Link, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import navbarTheme, { NavBarLogoImage } from "./styles";

import logo from "../../assets/img/logo.png";

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <>
      <ThemeProvider theme={navbarTheme}>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <Typography component={Link} to="/" variant="h6" color="inherit">
              <NavBarLogoImage src={logo} alt="Commerce.js" height="25px" />
              Commerce.js
            </Typography>
            {location.pathname === "/" && (
              <div>
                <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="Show cart items"
                  color="inherit"
                >
                  <Badge badgeContent={totalItems ?? 0} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
