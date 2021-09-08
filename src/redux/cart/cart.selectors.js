import { createSelector } from "reselect";

// input selector
// and output selector
//getting the target reducer

// destruct the cart piece out of the whole redux state
const selectCart = (state) => state.cart;

//create selector takes  takes 2 arguments
//1st argument takes an array of inputs to watch
//2nd ea
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
);
export const selectShowCart = createSelector(
  [selectCart],
  (cart) => cart.showCart
);
