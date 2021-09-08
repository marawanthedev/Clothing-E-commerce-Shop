import { createSelector } from "reselect";
// used to memoize selectors that has a dynamic argument being passed to
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};
const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shopData
);

// so now even dynamic values are being memoized, incase the new value was not different, no re-rendering is done
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShop], (shop) =>
    shop.shopData.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);
