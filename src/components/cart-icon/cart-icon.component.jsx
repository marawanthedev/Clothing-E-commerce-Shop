import React from 'react';
import './cart-icon.styles.scss'

import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';
import { connect } from "react-redux";
import {ToggleCartDropDown} from "../../redux/cart/cart.actions"




const CartIcon=({ToggleCartDropDown})=>{

        return (    
            // excecuting a call back that calls redux action does the job instead of having diff method
            // passing data to a dispatch event can bne done in 2 ways
            // 1- using inner callback at the onclick event
            // 2- using an external methods that handles data manps and then dispatches
            <div className="cart-icon" onClick={()=> ToggleCartDropDown()}>
                <ShoppingIcon className="shopping-icon"></ShoppingIcon>
                <span className="item-count">0</span>
            </div>
        )
}



// **PLEAESE FUCKING MAKE SURE THAT YOU ARE ACTUALLY PASSING DATA WITHIN THE DISPATCH
// **STUPID ASS
const mapDispatchToProps=(dispatch)=>({
    ToggleCartDropDown:(cart)=>dispatch(ToggleCartDropDown(cart))
});
export default connect(null,mapDispatchToProps)(CartIcon);