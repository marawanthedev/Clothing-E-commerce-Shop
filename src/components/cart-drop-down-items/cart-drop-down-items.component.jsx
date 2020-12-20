import React from "react";
import "./cart-drop-down-items.styles.scss";
    // make sure that you are destructing the right props names please
    // i need typescript so fucking bad
export const CartItem=({imageUrl,name,quantity,price})=>{

    return(

        <div className="cart-item">
            <img className="cart-item__img" src={imageUrl}></img>
            <div className="cart-item__content">
                <div className="cart-item__content__header">{name}</div>
                <div className="cart-item__content__price"> <span className="cart-item__content__quantity">{quantity}</span> x ${price} </div>
            </div>
        </div>

    )
}
export default CartItem;