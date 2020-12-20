import { CartActionTypes } from "./cart.types";
import { ShopData } from "./cart.data";
const INITIAL_STATE = {
  showCart: false,
  cartItems: [
    {
      itemName: "Brown cowbov",
      itemPrice: 35,
      itemQuantity: 1,
      itemImgUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    },
  ],
  ShopData,
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROP_DOWN:
      return {
        ...state,
        showCart: !state.showCart,
      };
    default:
      return state;
  }
};

export default cartReducer;

// cartItems[{name,quantity,price,imageUrl}]
