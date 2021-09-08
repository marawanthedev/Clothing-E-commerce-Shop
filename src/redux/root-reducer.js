// actaull store where all other reducers data gets poured in
// this is similar to vuex store
// importing all other component reducers
// reducers combiner

//persist reducer is the function that is going to wrap our reducers
import { persistReducer } from "redux-persist";
//local storage object
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
const persistConfig = {
  key: "root",
  //type of storage
  storage,
  // array of sting names of reducers to persist and store
  //will be persisting cart only since that user is being persisted using firebase
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
// passing persist confing and root reducer
export default persistReducer(persistConfig, rootReducer);
