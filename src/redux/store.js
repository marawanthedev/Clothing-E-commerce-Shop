import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//persisting redux
// will be done on 2 steps
// 1- persisting store
// 2- persisting reducers
import { persistStore } from "redux-persist";

//**  middlware setup
const middlewares = [];
//disabling the logger in production

// and only logging conditionally based on process env
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// so here we are creating new store
// which takes two arguments
// 1st is root reducer which is going to contain the slices of other reducers
// 2nd is applyMiddleware method which takes our array of middleware in an object form
// so thats why we are spreading it so the method can apply each middleware included in the array

//exporting normal store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//exporting persisting store
export const persistor = persistStore(store);
