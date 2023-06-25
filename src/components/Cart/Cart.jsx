import React from "react";
import { Container, Typography, Grid, ThemeProvider } from "@mui/material";

import cartTheme, {
  CardDetails,
  EmptyButton,
  CheckoutButton,
  CartToolbar,
} from "./styles";
import CartItem from "./CartItem/CartItem";

import { Link } from "react-router-dom";

const Cart = ({ cart, onUpdateCartQvt, onRemoveFromCart, onEmptyCart }) => {
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        {" "}
        start adding some!
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQvt={onUpdateCartQvt}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <CardDetails>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <EmptyButton
            onClick={() => onEmptyCart()}
            size="large"
            type="button"
            color="secondary"
            variant="contained"
          >
            Empty Cart
          </EmptyButton>
          <CheckoutButton
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </CheckoutButton>
        </div>
      </CardDetails>
    </>
  );

  if (!cart.line_items) return "Loading...";

  return (
    <ThemeProvider theme={cartTheme}>
      <Container>
        <CartToolbar>
          <Typography variant="h3" gutterBottom>
            Your Shopping Cart
          </Typography>
          {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </CartToolbar>
      </Container>
    </ThemeProvider>
  );
};

export default Cart;
