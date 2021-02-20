
import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../button/button.component";
import {connect} from "react-redux";
import {CartItem} from "../cart-drop-down-items/cart-drop-down-items.component"
import {DecreaseItemQuantity,IncreaseItemQuantity} from "../../redux/cart/cart.actions";
// dynamically added components 
// can not not start a new redux connection
// so we need to pass the method to the dynamic component
const CartDropDown=({showCart,cartItems,DecreaseItemQuantity,IncreaseItemQuantity})=>{

    return(
        showCart?
        <div className="cart-dropdown ">
        <ul className="cart-items">
        {cartItems.map(({...cartData},index)=>{
            return <CartItem  key={index} DecreaseItemQuantity={DecreaseItemQuantity} IncreaseItemQuantity={IncreaseItemQuantity}    {...cartData}></CartItem>
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
const mapDispatchToProps=(dispatch)=>({
    DecreaseItemQuantity:(itemId)=>dispatch(DecreaseItemQuantity(itemId)),
    IncreaseItemQuantity:(itemId)=>dispatch(IncreaseItemQuantity(itemId)),

});
export default connect(mapStateToProps,mapDispatchToProps)(CartDropDown);