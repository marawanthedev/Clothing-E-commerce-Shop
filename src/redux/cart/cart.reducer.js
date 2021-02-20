import { CartActionTypes } from "./cart.types";
import { ShopData } from "./cart.data";
import { addCartItem, addCartItemQuantity } from "./cart.utils";
const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
  ShopData,
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROP_DOWN:
      return {
        ...state,
        showCart: !state.showCart,
      };

    case CartActionTypes.ADD_CART_ITEM: {
      return {
        ...state,
        // set the state cart items to action payload
        // sending the currentCart items and the action.payload is the newely added one
        cartItems: addCartItem(state.cartItems, action.payload),
      };
    }
    case CartActionTypes.INCREASE_ITEM_QUANTITY: {
      return {
        ...state,
        // cartItems: addCartItemQuantity(state.cartItems, action.payload),
      };
    }
    case CartActionTypes.DECREASE_ITEM_QUANTITY: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
