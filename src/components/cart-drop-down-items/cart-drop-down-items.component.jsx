import React from "react";
import "./cart-drop-down-items.styles.scss";
import {DecreaseItemQuantity} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

// make sure that you are destructing the right props names
// typescript is needed :)
// fucking action has to be included as  a prop
// fuck off once again    
export const CartItem=({imageUrl,name,quantity,DecreaseItemQuantity,price,id})=>{

    return(

        <div className="cart-item" key={id} >
            <div className="cart-item__content">
                <div className="cart-item__content__header">{name}</div>
                <div className="cart-item__content__price">
                    
                    <div className="cart-item__content__price__quantity-btn">
                    <button className="cart-item__content__btn cart-item__content__btn__minus" onClick={()=>console.log("gg")}>
                        <i className="fas fa-minus"></i></button>
                    <span className="cart-item__content__quantity">{quantity}</span>
                    <button className="cart-item__content__btn cart-item__content__btn__plus" onClick={()=>DecreaseItemQuantity(id)}><i className="fas fa-plus" ></i></button>
                    </div>
                      ${price} </div>
            </div>
            <img className="cart-item__img" src={imageUrl}></img>

        </div>

    )
}



const mapDispatchToProps=(dispatch)=>({
    DecreaseItemQuantity:(id)=>dispatch(DecreaseItemQuantity(id)),
});

export default connect(null,mapDispatchToProps)(CartItem);

