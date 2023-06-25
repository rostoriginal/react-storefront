import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { Products, Navbar } from "./components";

import "./style.css";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Products />
    </>
  );
};

export default App;
