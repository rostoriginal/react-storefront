import React from "react";
import Products from "./components/Products/Products";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  return (
    <>
      <CssBaseline />
      <div>
        <Products />
      </div>
    </>
  );
};

export default App;
