const INITIAL_STATE = {
  showCart: false,
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_DROP_DOWN":
      return {
        ...state,
        showCart: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
