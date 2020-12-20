import React from "react";
import "./cart-drop-down-items.styles.scss";

export const CartItem=({itemImgUrl,itemName,itemQuantity,itemPrice})=>{

    return(

        <div className="cart-item">
            <img className="cart-item__img" src={itemImgUrl}></img>
            <div className="cart-item__content">
                <div className="cart-item__content__header">{itemName}</div>
                <div className="cart-item__content__price"> <span className="cart-item__content__quantity">{itemQuantity}</span> x ${itemPrice} </div>
            </div>
        </div>

    )
}
export default CartItem;