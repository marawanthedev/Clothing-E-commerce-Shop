import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../button/button.component";
import {connect} from "react-redux";
import {CartItem} from "../cart-drop-down-items/cart-drop-down-items.component"

class CartDropDown extends React.Component{
    constructor({showCart,cartItems}){
        super({showCart,cartItems});
    }
    componentDidMount(){
        console.log(this.props.cartItems)
    }
    render(){
        const {showCart,cartItems}=this.props;
        return(
            showCart?
            <div className="cart-dropdown">
            <ul className="cart-items">

                {cartItems.map(({...cartData})=>{

                    return <CartItem {...cartData}></CartItem>
                })}
    
            </ul>
            <div className="btn-container">
            <CustomButton textContent="Go to checkout" type="button" backGroundColor="black" className="cart-btn"></CustomButton>
            </div>
    
            </div>
            :null
        )
    }
}
const mapStateToProps=({cart})=>({
    showCart:cart.showCart,
    cartItems:cart.cartItems
});
export default connect(mapStateToProps)(CartDropDown);


// const CartDropDown=({showCart,cartItems})=>{

//     return(
//         showCart?
//         <div className="cart-dropdown">
//         <ul className="cart-items">
//         <CartItem></CartItem>

//         </ul>
//         <CustomButton textContent="Go to checkout" type="button" backGroundColor="black" className="cart-btn"></CustomButton>

//         </div>
//         :null
//     )
// }