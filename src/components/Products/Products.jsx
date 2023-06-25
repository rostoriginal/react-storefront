import React from "react";
import { Container, Grid, ThemeProvider } from "@mui/material";
import Product from "./Product/Product";
import productsTheme from "./styles";

const Products = ({ products }) => {
  return (
    <ThemeProvider theme={productsTheme}>
      <Container component="main" maxWidth={false}>
        <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Products;
