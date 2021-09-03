import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//**  middlware setup
const middlewares = [logger];
// so here we are creating new store
// which takes two arguments
// 1st is root reducer which is going to contain the slices of other reducers
// 2nd is applyMiddleware method which takes our array of middleware in an object form
// so thats why we are spreading it so the method can apply each middleware included in the array
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

