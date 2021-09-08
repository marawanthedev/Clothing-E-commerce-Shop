import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector.js";
import { AddCartItem } from "../../redux/cart/cart.actions";
import "./collection.styles.scss";
const CollectionPage = ({ collection, AddCartItem }) => {
  console.log(collection);
  return (
    <div className="collection">
      <h2>{collection.title}</h2>
      <div className="collection__items">
        {/* const {(name, price, imageUrl, addCartItemCallBack, id)} = props; */}
        {collection.items.map((item) => (
          <CollectionItem {...item} addCartItemCallBack={AddCartItem} />
        ))}
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  AddCartItem: (cartItem) => dispatch(AddCartItem(cartItem)),
});
const mapStateToProps = (state, ownProps) => ({
  //passing data to selectors by adding another bracket()
  // since that the params is being dynamically passed we need to use the memoize helper so we can memoize the dynamically passed value and avoid not needed re-renderings
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
