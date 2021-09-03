import { createSelector } from "reselect";

// input selector
// and output selector
//getting the target reducer

const selectCart = (state) => state.cart;


export const selectCartItem=createSelector([selectCart],()=>{})