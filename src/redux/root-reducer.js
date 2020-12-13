// actaull store where all other reducers data gets poured in
// this is similar to vuex store
// importing all other component reducers
// reducers combiner
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
export default combineReducers({
  // it combines state slices
  user: userReducer,
  cart: cartReducer,
  // we are combining reducers
  // in a compinized way
  // i think that it means that the store reducer is going to be paritioned
  // so we can only pass the parts needed to a component as a prop
  // instead of passing the whole stores data we only pass the required or needed objects
});
