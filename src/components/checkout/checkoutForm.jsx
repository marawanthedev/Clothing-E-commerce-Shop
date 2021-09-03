import React from "react";
import Header from "../header/header.component";
import "./checkoutForm.scss";
import { connect } from "react-redux";
import {
  DecreaseItemQuantity,
  IncreaseItemQuantity,
  RemoveItem,
} from "../../redux/cart/cart.actions";

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };
  }

  render() {
    const {
      checkoutItems,
      DecreaseItemQuantity,
      IncreaseItemQuantity,
      RemoveItem,
    } = this.props;
    var { total } = this.state;
    return (
      <div className="checkout-container">
        <div className="checkout">
          <div className="checkout__table">
            <div className="checkout-table__headers">
              <div className="checkout-table__headers__item checkout-table__headers__item-img ">
                Product
              </div>
              <div className="checkout-table__headers__item">Description</div>
              <div className="checkout-table__headers__item">Quantity</div>
              <div className="checkout-table__headers__item">Price</div>
              <div className="checkout-table__headers__item">Remove</div>
            </div>

            <hr className="style-two" />

            <div className="checkout__items">
              {checkoutItems.map((checkoutItem, index) => {
                total += checkoutItem.price * checkoutItem.quantity;
                return (
                  <div key={index}>
                    <div className="checkout__item">
                      <img
                        className="checkout__item__img"
                        alt="checkout item"
                        src={checkoutItem.imageUrl}
                      ></img>
                      <div className="checkout__item__desc">
                        {checkoutItem.name}
                      </div>
                      <div className="checkout__item__quantity">
                        <span
                          className="checkout__item__quantity__icon decreaseQuantity"
                          onClick={() => DecreaseItemQuantity(checkoutItem.id)}
                        >
                          <i className="fas fa-chevron-left"></i>
                        </span>
                        {checkoutItem.quantity}
                        <span
                          className="checkout__item__quantity__icon increaseQuantity"
                          onClick={() => IncreaseItemQuantity(checkoutItem.id)}
                        >
                          <i className="fas fa-chevron-right"></i>
                        </span>
                      </div>
                      <div className="checkout__item__price">
                        {checkoutItem.price * checkoutItem.quantity}
                      </div>
                      <div
                        className="checkout__item__removal"
                        onClick={() => RemoveItem(checkoutItem.id)}
                      >
                        <i className="fas fa-times"></i>
                      </div>
                    </div>
                    <hr className="style-two" />
                  </div>
                );
              })}
            </div>
            <div className="payment-actions">
              <div className="total">Total: ${total}</div>
              <button className="pay-button">
                Pay with <i class="fab fa-cc-visa"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  DecreaseItemQuantity: (itemId) => dispatch(DecreaseItemQuantity(itemId)),
  IncreaseItemQuantity: (itemId) => dispatch(IncreaseItemQuantity(itemId)),
  RemoveItem: (itemId) => dispatch(RemoveItem(itemId)),
});
const mapStateToProps = ({ cart: { cartItems } }) => ({
  checkoutItems: cartItems.length > 0 ? cartItems : [],
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
