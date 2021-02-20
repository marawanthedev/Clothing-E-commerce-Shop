
import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../button/button.component";
import {connect} from "react-redux";
import {CartItem} from "../cart-drop-down-items/cart-drop-down-items.component"

const CartDropDown=({showCart,cartItems})=>{

    return(
        showCart?
        <div className="cart-dropdown ">
        <ul className="cart-items">
        {cartItems.map(({...cartData},index)=>{
            return <CartItem key={index}   {...cartData}></CartItem>
        })}
        </ul>
        <div className="btn-container">
        <CustomButton  textContent="Go to checkout" type="button"  className="cart-btn"></CustomButton>
        </div>
        </div>
        :null
    );
}


const mapStateToProps=({cart})=>({
    showCart:cart.showCart,
    cartItems:cart.cartItems
});
export default connect(mapStateToProps)(CartDropDown);