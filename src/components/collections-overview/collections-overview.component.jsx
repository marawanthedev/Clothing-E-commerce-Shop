import { connect } from "react-redux";
import { selectShopData } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../container/collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";
const CollectionOverView = ({ shopData }) => {
  const keys = Object.keys(shopData);

  return (
    <div className="collections-overview">
      {keys.map((key) => {
        return (
          <CollectionPreview
            key={shopData[key].id}
            {...shopData[key]}
          ></CollectionPreview>
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopData: selectShopData,
});

export default connect(mapStateToProps)(CollectionOverView);
