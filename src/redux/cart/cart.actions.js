import { CartActionTypes } from "./cart.types";
export const ToggleCartDropDown = () => ({
  // **returning action object
  type: CartActionTypes.TOGGLE_CART_DROP_DOWN,
  payload: null,
});

// needed actions for cart feature

// 1-add item to cart
// 2- remove item from cart

export const AddCartItem = (cartItem) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: cartItem,
});
