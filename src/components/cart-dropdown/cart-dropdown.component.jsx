import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../button/button.component";
import {connect} from "react-redux";

const CartDropDown=({showCart})=>{

    return(
        showCart?<div className="cart-dropdown">
        <ul className="cart-items"></ul>
        <CustomButton textContent="Go to checkout" type="button" backGroundColor="black" className="cart-btn"></CustomButton>
        </div>:null
    )
}
const mapStateToProps=({cart})=>({
    showCart:cart.showCart
});
export default connect(mapStateToProps)(CartDropDown);