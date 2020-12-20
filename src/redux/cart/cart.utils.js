export const addCartItem = (previousItems, newItem) => {
  //    using find
  // this will check if there is a duplicate
  const exisitingItem = previousItems.find(
    (prevItem) => prevItem.id === newItem.id
  );

  if (exisitingItem) {
    return previousItems.map((prevItem) => {
      return prevItem.id === newItem.id
        ? //   if its already there increase quantity
          { ...prevItem, quantity: prevItem.quantity + 1 }
        : // if item doesnt match id return it as is
          prevItem;
    });
  } else {
    //   spreading the prev items and adding new object which spreads some of its data
    // and then we give it a quantity of 1
    return [...previousItems, { ...newItem, quantity: 1 }];
  }
};
