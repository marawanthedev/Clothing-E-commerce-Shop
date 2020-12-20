import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component"
const CollectionPreview=({title,items})=>{
    return ( <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {/* mapping over the items that are passed by the shop page*/}
        {items.filter((item,index)=>index<4).map((item)=> {
          return  <CollectionItem key={item.id} {...item}></CollectionItem>
        })}
        </div>
        </div>)
}
   

export default CollectionPreview;