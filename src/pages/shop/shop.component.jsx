import React from "react";
// import ShopData from './shop.data'
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
import {connect} from "react-redux"

class ShopPage  extends React.Component{

    constructor(props){
        super(props);

        this.state={
            collections:this.props.ShopData
        }
    }
   
    render(){
        const {collections}=this.state;
        return(
                <div className="shop-page">
                    <h1 className="shop-header">Collections</h1>
                    {
                        collections.map(({id,...otherProps})=>{


                          return  <CollectionPreview key={id} {...otherProps}></CollectionPreview>
                        })
                    }
                </div>
            )

    }
}

const mapStateToProps=({cart})=>({
    // currentUser:state.user.currentUser,
    ShopData:cart.ShopData
});


export default connect(mapStateToProps)(ShopPage);



{/* <CollectionPreview key={id} {...otherProps}></CollectionPreview> */}