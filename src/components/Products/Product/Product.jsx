import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import productTheme from "./styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";

import { AddShoppingCart } from "@mui/icons-material";

const Product = ({ product }) => {
  return (
    <ThemeProvider theme={productTheme}>
      <Card>
        <CardMedia image={product.image.url} title={product.name} />
        <CardContent>
          <div>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default Product;
