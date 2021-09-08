import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import {
  DecreaseItemQuantity,
  IncreaseItemQuantity,
  RemoveItem,
} from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import StripeButton from "../../components/stripe-button/stripe-button";
const CheckoutForm = (props) => {
  const isThereCheckoutItems = () => {
    const { checkoutItems } = props;

    if (
      checkoutItems.length !== 0 &&
      checkoutItems !== undefined &&
      checkoutItems !== null
    ) {
      return true;
    } else {
      return false;
    }
  };
  const renderItemQuantityController = (checkoutItem) => {
    const { DecreaseItemQuantity, IncreaseItemQuantity } = props;
    return (
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
    );
  };

  const calcTotal = () => {
    const { checkoutItems } = props;
    let total = 0;
    checkoutItems.forEach((item) => (total += item.price * item.quantity));
    return total;
  };
  const renderCheckoutItems = () => {
    const { checkoutItems, RemoveItem } = props;

    if (isThereCheckoutItems()) {
      const items = checkoutItems.map((checkoutItem, index) => {
        return (
          <div key={index}>
            <div className="checkout__item">
              <img
                className="checkout__item__img"
                alt="checkout item"
                src={checkoutItem.imageUrl}
              ></img>
              <div className="checkout__item__desc">{checkoutItem.name}</div>

              <div className="checkout__item__price">
                {checkoutItem.price * checkoutItem.quantity}
              </div>
              {renderItemQuantityController(checkoutItem)}
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
      });

      return items;
    } else {
      return null;
    }
  };
  const renderActionBar = () => {
    const total = calcTotal();
    if (isThereCheckoutItems()) {
      return (
        <>
          <div className="payment-actions">
            <div className="total">Total: ${total}</div>

            <div style={{ margin: "2rem 0" }}>
              <p>Use card Number of:4539682086915318 </p>
              <p>Card Expiration: 9 / 2032 (Month / Year) </p>
              <p>Card CVV: 140 </p>
            </div>
            <StripeButton price={total} />
          </div>
        </>
      );
    } else {
      return null;
    }
  };
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

          <div className="checkout__items">{renderCheckoutItems()}</div>
          {renderActionBar()}
        </div>
      </div>
    </div>
  );
};

// class CheckoutForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       total: 0,
//     };
//   }

//   isThereCheckoutItems = () => {
//     const { checkoutItems } = this.props;

//     if (
//       checkoutItems.length !== 0 &&
//       checkoutItems !== undefined &&
//       checkoutItems !== null
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   };
//   renderItemQuantityController = (checkoutItem) => {
//     const { DecreaseItemQuantity, IncreaseItemQuantity } = this.props;
//     return (
//       <div className="checkout__item__quantity">
//         <span
//           className="checkout__item__quantity__icon decreaseQuantity"
//           onClick={() => DecreaseItemQuantity(checkoutItem.id)}
//         >
//           <i className="fas fa-chevron-left"></i>
//         </span>
//         {checkoutItem.quantity}
//         <span
//           className="checkout__item__quantity__icon increaseQuantity"
//           onClick={() => IncreaseItemQuantity(checkoutItem.id)}
//         >
//           <i className="fas fa-chevron-right"></i>
//         </span>
//       </div>
//     );
//   };
//   renderCheckoutItems = () => {
//     const { checkoutItems, RemoveItem } = this.props;

//     if (this.isThereCheckoutItems()) {
//       const items = checkoutItems.map((checkoutItem, index) => {
//         return (
//           <div key={index}>
//             <div className="checkout__item">
//               <img
//                 className="checkout__item__img"
//                 alt="checkout item"
//                 src={checkoutItem.imageUrl}
//               ></img>
//               <div className="checkout__item__desc">{checkoutItem.name}</div>

//               <div className="checkout__item__price">
//                 {checkoutItem.price * checkoutItem.quantity}
//               </div>
//               {this.renderItemQuantityController(checkoutItem)}
//               <div
//                 className="checkout__item__removal"
//                 onClick={() => RemoveItem(checkoutItem.id)}
//               >
//                 <i className="fas fa-times"></i>
//               </div>
//             </div>
//             <hr className="style-two" />
//           </div>
//         );
//       });
//       return items;
//     } else {
//       return null;
//     }
//   };
//   renderActionBar = () => {
//     if (this.isThereCheckoutItems()) {
//       return (
//         <>
//           <div className="payment-actions">
//             <div className="total">Total: ${this.state.total}</div>
//             <button className="pay-button">
//               Pay with <i class="fab fa-cc-visa"></i>
//             </button>
//           </div>
//         </>
//       );
//     } else {
//       return null;
//     }
//   };
//   render() {
//     return (
//       <div className="checkout-container">
//         <div className="checkout">
//           <div className="checkout__table">
//             <div className="checkout-table__headers">
//               <div className="checkout-table__headers__item checkout-table__headers__item-img ">
//                 Product
//               </div>
//               <div className="checkout-table__headers__item">Description</div>
//               <div className="checkout-table__headers__item">Quantity</div>
//               <div className="checkout-table__headers__item">Price</div>
//               <div className="checkout-table__headers__item">Remove</div>
//             </div>

//             <hr className="style-two" />

//             <div className="checkout__items">{this.renderCheckoutItems()}</div>
//             {this.renderActionBar()}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  DecreaseItemQuantity: (itemId) => dispatch(DecreaseItemQuantity(itemId)),
  IncreaseItemQuantity: (itemId) => dispatch(IncreaseItemQuantity(itemId)),
  RemoveItem: (itemId) => dispatch(RemoveItem(itemId)),
});
const mapStateToProps = (state) => ({
  checkoutItems: selectCartItems(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
