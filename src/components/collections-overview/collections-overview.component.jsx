import { connect } from "react-redux";
import { selectShopData } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../container/collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";
const CollectionOverView = ({ shopData }) => {
  return (
    <div className="collections-overview">
      {shopData.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps}></CollectionPreview>;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopData: selectShopData,
});

export default connect(mapStateToProps)(CollectionOverView);
