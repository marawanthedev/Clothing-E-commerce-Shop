import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../button/button.component";
import { connect } from "react-redux";
import { CartItem } from "../cart-drop-down-items/cart-drop-down-items.component";
import {
  DecreaseItemQuantity,
  IncreaseItemQuantity,
  ToggleCartDropDown,
} from "../../redux/cart/cart.actions";
import { withRouter } from "react-router-dom";
import {
  selectCartItems,
  selectShowCart,
} from "../../redux/cart/cart.selectors";

// dynamically added components
// can not not start a new redux connection
// so we need to pass the method to the dynamic component
const CartDropDown = ({
  showCart,
  cartItems,
  DecreaseItemQuantity,
  IncreaseItemQuantity,
  ToggleCartDropDown,
  history,
}) => {
  return showCart ? (
    <div className="cart-dropdown ">
      <ul className="cart-items">
        {cartItems.length > 0
          ? cartItems.map(({ ...cartData }, index) => {
              return (
                <CartItem
                  key={index}
                  DecreaseItemQuantity={DecreaseItemQuantity}
                  IncreaseItemQuantity={IncreaseItemQuantity}
                  {...cartData}
                ></CartItem>
              );
            })
          : null}
      </ul>
      <div className="btn-container">
        <CustomButton
          textContent="Go to checkout"
          type="button"
          className="cart-btn"
          onClick={() => {
            console.log("gg");
            ToggleCartDropDown();
            history.push(`/checkout`);
          }}
        ></CustomButton>
      </div>
    </div>
  ) : null;
};

//using selectors avoids unneccsarry re-renderings
const mapStateToProps = (state) => ({
  showCart: selectShowCart(state),
  cartItems: selectCartItems(state),
});
const mapDispatchToProps = (dispatch) => ({
  DecreaseItemQuantity: (itemId) => dispatch(DecreaseItemQuantity(itemId)),
  IncreaseItemQuantity: (itemId) => dispatch(IncreaseItemQuantity(itemId)),
  ToggleCartDropDown: () => dispatch(ToggleCartDropDown()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
