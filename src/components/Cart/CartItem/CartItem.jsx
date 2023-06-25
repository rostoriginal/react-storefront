import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ThemeProvider,
} from "@mui/material";
import cartItemTheme, { CartItemButtons } from "./styles";

const CartItem = ({ item }) => {
  return (
    <ThemeProvider theme={cartItemTheme}>
      <Card>
        <CardMedia image={item.image.url}></CardMedia>
        <CardContent>
          <Typography variant="h4">{item.name}</Typography>
          <Typography variant="h5">
            {item.line_total.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions>
          <CartItemButtons>
            <Button type="button" size="small">
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button type="button" size="small">
              +
            </Button>
          </CartItemButtons>
          <Button type="button" color="secondary" variant="contained">
            Remove
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default CartItem;
