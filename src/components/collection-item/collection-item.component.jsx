import React from "react";
import './collection-item.styles.scss';
import CustomButton from "../button/button.component";
import {connect} from "react-redux";

const CollectionItem=({name,price,imageUrl})=>{

    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
    <span className="price">${price}</span>
            </div>
            <CustomButton className="collection-item-btn" type="button" textContent='Add to Cart'  onClick={handleCollectionItemClick}></CustomButton>
        </div>
    )
}   
function handleCollectionItemClick(e){

}
const  mapDispatchToProps=(state)=>{

}
export default connect(mapDispatchToProps)(CollectionItem);
// const mapStateToProps=(state)=>({
//     currentUser:state.user.currentUser,
// });
