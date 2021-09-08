import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

const pathname = window.location.pathname;
export default function CartIcon({ toggleCartDropDownCallBack, itemCount }) {
  return (
    // executing a call back that calls redux action does the job instead of having diff method
    // passing data to a dispatch event can bne done in 2 ways
    // 1- using inner callback at the onclick event
    // 2- using an external methods that handles data maps and then dispatches
    <div
      className={`cart-icon ${
        pathname === "/" ? "animate__animated animate__zoomInDown" : ""
      }`}
      onClick={() => toggleCartDropDownCallBack()}
    >
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count ">{itemCount}</span>
    </div>
  );
}
