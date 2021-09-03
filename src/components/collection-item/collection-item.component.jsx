import "./collection-item.styles.scss";
import CustomButton from "../button/button.component";
import { AddCartItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

// ****** dispacthers have to be included in the props as well

const CollectionItem = (props) => {
  const getStars = () => {
    let stars = [];
    let rand = Math.floor(Math.random() * 5);
    console.log(rand);
    for (let i = 0; i < 5; i++) {
      var starClass = "fas fa-star ";
      starClass += i < rand ? "active" : "not-active";
      starClass += " animate__animated animate__fadeInDown";
      stars.push(<i className={starClass}></i>);
    }

    return stars;
  };
  const { name, price, imageUrl, AddCartItem, id, index } = props;

  return (
    <div className="collection-item ">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <span className="name">{name}</span>
      <div className="stars">{getStars()}</div>
      <span className="price">$ {price}</span>
      <CustomButton
        // @ts-ignore
        CustomButton
        className="collection-item-btn"
        type="button"
        textContent="Add to Cart"
        onClick={() => AddCartItem({ name, id, price, imageUrl, quantity: 1 })}
      ></CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  AddCartItem: (cartItem) => dispatch(AddCartItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
