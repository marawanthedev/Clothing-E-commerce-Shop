import CollectionOverView from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router";
import CollectionPage from "../collection/collection.component";
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <h1 className="shop-header">Collections</h1>
      <Route exact path={`${match.path}`} component={CollectionOverView} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
