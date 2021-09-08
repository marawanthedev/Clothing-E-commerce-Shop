import { createSelector } from "reselect";
// used to memoize selectors that has a dynamic argument being passed to
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shopData
);

// so now even dynamic values are being memoized, incase the new value was not different, no re-rendering is
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShop], (shop) => shop.shopData[collectionUrlParam])
);
