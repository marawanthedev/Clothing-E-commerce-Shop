import "./collection-preview.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { AddCartItem } from "../../redux/cart/cart.actions";
const CollectionPreview = ({ title, items, AddCartItem }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return (
              <CollectionItem
                key={item.id}
                {...item}
                addCartItemCallBack={AddCartItem}
              />
            );
          })}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  AddCartItem: (cartItem) => dispatch(AddCartItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CollectionPreview);
