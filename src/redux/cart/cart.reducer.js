import { CartActionTypes } from "./cart.types";
import { ShopData } from "./cart.data";
import { addCartItem } from "./cart.utils";
const INITIAL_STATE = {
  showCart: false,

  cartItems: [],
  ShopData,
  item: {},
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
    default:
      return state;
  }
};

export default cartReducer;
