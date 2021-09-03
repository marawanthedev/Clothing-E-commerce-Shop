import CollectionPreview from "../../components/preview-collection/collection-preview.component";
import { connect } from "react-redux";

const ShopPage = (props) => {
  const collections = props.ShopData;

  return (
    <div className="shop-page">
      <h1 className="shop-header">Collections</h1>
      {collections.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps}></CollectionPreview>;
      })}
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  // currentUser:state.user.currentUser,
  ShopData: cart.ShopData,
});

export default connect(mapStateToProps)(ShopPage);
