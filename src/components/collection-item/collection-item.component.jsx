import React from "react";
import './collection-item.styles.scss';
import CustomButton from "../button/button.component";
import {AddCartItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

// ****** dispacthers have to be included in the props as well
const CollectionItem=({name,price,imageUrl,AddCartItem,id})=>{

    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
            <span className="price">${price}</span>
            </div>
            <CustomButton className="collection-item-btn" type="button" textContent='Add to Cart'  onClick={()=>AddCartItem({name,id,price,imageUrl,quantity:1})}></CustomButton>
        </div>
    )
}   


const mapDispatchToProps=(dispatch)=>({
    AddCartItem:(cartItem)=>dispatch(AddCartItem(cartItem)),
    
});

export default connect(null,mapDispatchToProps)(CollectionItem);
