import CollectionPreview from "../../container/preview-collection/collection-preview.component";
import { connect } from "react-redux";
import { selectShopData } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";

const ShopPage = (props) => {
  const { shopData } = props;
  return (
    <div className="shop-page">
      <h1 className="shop-header">Collections</h1>
      {shopData.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps}></CollectionPreview>;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopData: selectShopData,
});

export default connect(mapStateToProps)(ShopPage);
