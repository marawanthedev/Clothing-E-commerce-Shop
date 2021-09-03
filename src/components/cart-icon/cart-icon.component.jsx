import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { connect } from "react-redux";
import { ToggleCartDropDown } from "../../redux/cart/cart.actions";

const pathname = window.location.pathname;
const CartIcon = ({ ToggleCartDropDown, itemCount }) => {
  return (
    // excecuting a call back that calls redux action does the job instead of having diff method
    // passing data to a dispatch event can bne done in 2 ways
    // 1- using inner callback at the onclick event
    // 2- using an external methods that handles data manps and then dispatches
    <div
      className={`cart-icon ${
        pathname == "/" ? "animate__animated animate__zoomInDown" : ""
      }`}
      onClick={() => ToggleCartDropDown()}
    >
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count ">{itemCount}</span>
    </div>
  );
};

// HeaderView();

const mapDispatchToProps = (dispatch) => ({
  ToggleCartDropDown: () => dispatch(ToggleCartDropDown()),
});
// nested destructruing
const mapStateToProps = ({ cart: { cartItems } }) => ({
  // itemCount:cartItems.length,
  // accumlating all the number values of each item quantity
  // reduce takes 2 argumetns
  // 1st is a callback that takes accumaltor and the array that we are accumalting from
  // 2nd argument is the initial value of the accumulator
  itemCount:
    cartItems.length > 0
      ? cartItems.reduce(
          (accumaltedQuantity, cartItem) =>
            accumaltedQuantity + cartItem.quantity,
          0
        )
      : 0,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
